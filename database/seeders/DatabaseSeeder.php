<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Enums\UserRole;
use Illuminate\Support\Facades\Hash;
use RuntimeException;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // 1. Provision Admin Core Security Account First
        // Email and password come from .env only (ADMIN_EMAIL / ADMIN_PASSWORD) —
        // no hardcoded fallback, so this fails loudly instead of silently
        // seeding a guessable account if the env vars are missing.
        $email = config('services.admin.email');
        $password = config('services.admin.password');

        if (empty($email) || empty($password)) {
            throw new RuntimeException(
                'ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env before seeding the admin account.'
            );
        }

        $admin = User::updateOrCreate(
            ['email' => $email],
            [
                'name' => config('services.admin.name', 'System Administrator'),
                'password' => Hash::make($password),
                'role' => UserRole::Admin,
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );

    }
}
