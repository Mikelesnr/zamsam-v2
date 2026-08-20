<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use App\Mail\Transport\GoogleApiTransport;
use Illuminate\Support\Facades\Mail;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Intercept and extend mail manager with the custom google_api driver
        Mail::extend('google_api', function () {
            return new GoogleApiTransport(
                config('services.google.client_id') ?? '',
                config('services.google.client_secret') ?? '',
                config('services.google.refresh_token') ?? ''
            );
        });

        Vite::prefetch(concurrency: 3);

        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
    }
}
