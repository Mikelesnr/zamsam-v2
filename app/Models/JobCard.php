<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobCard extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'job_card_number',
        'status',
        'priority',
        'product_name',
        'product_model',
        'serial_number',
        'issue_description',
        'repair_notes',
        'assigned_by',
        'assigned_to',
        'estimated_cost',
        'final_cost',
        'started_at',
        'completed_at',
    ];

    protected $casts = [
        'estimated_cost' => 'decimal:2',
        'final_cost' => 'decimal:2',
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    /**
     * Get the user who assigned/created the job card.
     */
    public function assigner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_by');
    }

    /**
     * Get the technician assigned to perform the repair.
     */
    public function technician(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}