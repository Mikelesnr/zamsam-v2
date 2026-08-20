<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Enums\UserRole;
use Illuminate\Support\Facades\Hash;

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
        $email = config('services.admin.email', 'admin@alignedsurveyors.com');
        $password = config('services.admin.password', 'SecretPassword123');

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
