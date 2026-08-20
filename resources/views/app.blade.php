<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Developer Credit -->
        <meta name="author" content="Michael N. Mwanza">
        <meta name="developer" content="Designed & Engineered by Michael N. Mwanza (Full-Stack Developer)">

        <!-- SEO Meta Tags -->
        <meta name="description" content="Professional commercial and residential refrigeration services in Highlands, Harare, Zimbabwe. Cold room installation, fridge repairs, chiller maintenance, and HVAC solutions.">
        <meta name="keywords" content="refrigeration, refrigeration services, fridge repair, commercial refrigeration, industrial refrigeration, cold room installation, chillers, freezer repair, HVAC Zimbabwe, refrigeration Harare, fridge repair Highlands, commercial fridges Harare, air conditioning Zimbabwe, cold storage Harare">
        <meta name="robots" content="index, follow">

        <!-- Local / Geo SEO Tags -->
        <meta name="geo.region" content="ZW-HA">
        <meta name="geo.placename" content="Highlands, Harare, Zimbabwe">
        <meta name="geo.position" content="-17.8056;31.0961">
        <meta name="ICBM" content="-17.8056, 31.0961">

        <!-- Open Graph / Social Media -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ config('app.name', 'Refrigeration Services') }}">
        <meta property="og:title" content="{{ config('app.name', 'Refrigeration Services Harare') }} - Highlands, Zimbabwe">
        <meta property="og:description" content="Expert commercial and domestic refrigeration repairs, cold room builds, and HVAC maintenance in Highlands, Harare, Zimbabwe.">
        <meta property="og:image" content="{{ asset('images/android-chrome-512x512.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'Refrigeration Services Harare') }}">
        <meta name="twitter:description" content="Top-tier commercial refrigeration and fridge repair services in Highlands, Harare.">
        <meta name="twitter:image" content="{{ asset('images/android-chrome-512x512.png') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>