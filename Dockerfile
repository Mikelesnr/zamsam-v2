# Stage 1: PHP & Composer Dependencies
FROM php:8.3-cli-alpine AS composer_base

RUN apk add --no-cache \
    zip unzip git libpng-dev libjpeg-turbo-dev \
    libwebp-dev libzip-dev oniguruma-dev icu-dev postgresql-dev

RUN docker-php-ext-install pdo pdo_pgsql mbstring gd intl zip

WORKDIR /app

COPY composer.json composer.lock ./
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

COPY . .

# Generate autoloader and Ziggy routes JS file
RUN composer dump-autoload --optimize \
    && php artisan ziggy:generate resources/js/ziggy.js --typescript || true


# Stage 2: Build Frontend Assets with Node
FROM node:20-alpine AS frontend
WORKDIR /app

# Prevent Node OOM memory crashes on Render
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy EVERYTHING needed for Vite (configs, html, resources, ziggy)
COPY . .
COPY --from=composer_base /app/resources/js/ziggy.js ./resources/js/ziggy.js

# Build Vite assets
RUN npm run build


# Stage 3: Final Production Backend
FROM php:8.3-fpm-alpine AS backend

RUN apk add --no-cache \
    nginx curl zip unzip git libpng-dev libjpeg-turbo-dev \
    libwebp-dev libxpm-dev libzip-dev freetype-dev \
    oniguruma-dev icu-dev bash shadow postgresql-dev \
    supervisor

RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd intl zip

WORKDIR /var/www/html

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

COPY . .
COPY --from=composer_base /app/vendor ./vendor
COPY --from=frontend /app/public/build ./public/build

RUN mkdir -p bootstrap/cache storage/framework/views storage/framework/sessions storage/framework/cache \
    && chmod -R 775 bootstrap/cache storage \
    && chown -R www-data:www-data bootstrap/cache storage /var/www/html

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisord.conf

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]