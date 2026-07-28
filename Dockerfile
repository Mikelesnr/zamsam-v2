# Stage 1: PHP & Composer Dependencies
FROM php:8.3-cli-alpine AS composer_base

# Install system dependencies needed for Composer & extensions
RUN apk add --no-cache \
    zip unzip git libpng-dev libjpeg-turbo-dev \
    libwebp-dev libzip-dev oniguruma-dev icu-dev postgresql-dev

RUN docker-php-ext-install pdo pdo_pgsql mbstring gd intl zip

WORKDIR /app

# Copy Composer files and source code needed for Artisan/Ziggy
COPY composer.json composer.lock ./
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies without scripts first
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Copy application files needed to generate Ziggy routes
COPY . .

# Generate the autoloader and Ziggy routes JS file
RUN composer dump-autoload --optimize \
    && php artisan ziggy:generate resources/js/ziggy.js --typescript


# Stage 2: Build Frontend Assets with Node
FROM node:current-slim AS frontend
WORKDIR /app

# Copy package files for NPM caching
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source code and the newly generated Ziggy file from Stage 1
COPY . .
COPY --from=composer_base /app/resources/js/ziggy.js ./resources/js/ziggy.js

# Build Vite frontend assets
RUN npm run build


# Stage 3: Final Production Backend
FROM php:8.3-fpm-alpine AS backend

# Install production system dependencies
RUN apk add --no-cache \
    nginx curl zip unzip git libpng-dev libjpeg-turbo-dev \
    libwebp-dev libxpm-dev libzip-dev freetype-dev \
    oniguruma-dev icu-dev bash shadow postgresql-dev \
    supervisor

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd intl zip

WORKDIR /var/www/html

# Environment variables
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

# Copy application code and vendor from Stage 1
COPY . .
COPY --from=composer_base /app/vendor ./vendor

# Copy compiled frontend assets from Stage 2
COPY --from=frontend /app/public/build ./public/build

# Ensure storage paths exist and permissions are set
RUN mkdir -p bootstrap/cache storage/framework/views storage/framework/sessions storage/framework/cache \
    && chmod -R 775 bootstrap/cache storage \
    && chown -R www-data:www-data bootstrap/cache storage /var/www/html

# Copy Nginx/Supervisor configs
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisord.conf

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]