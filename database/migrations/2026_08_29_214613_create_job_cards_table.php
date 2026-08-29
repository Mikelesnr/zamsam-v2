<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('job_cards', function (Blueprint $table) {
            // Use lower-case method names
            $table->uuid('id')->primary();

            // Job Metadata
            $table->uuid('job_card_number');
            $table->enum('status', ['pending', 'in_progress', 'awaiting_parts', 'completed', 'cancelled'])->default('pending');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');

            // Product & Equipment Details
            $table->string('product_name');
            $table->string('product_model')->nullable();
            $table->string('serial_number');
            $table->text('issue_description');
            $table->text('repair_notes')->nullable();

            // Assignments & Foreign Keys (Now correctly references users.id)
            $table->foreignUuid('assigned_by')->constrained('users')->cascadeOnDelete();
            $table->foreignUuid('assigned_to')->nullable()->constrained('users')->nullOnDelete();

            // Financials & Dates
            $table->decimal('estimated_cost', 10, 2)->nullable();
            $table->decimal('final_cost', 10, 2)->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_cards');
    }
};