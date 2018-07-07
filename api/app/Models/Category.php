<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Category extends Model
{
    protected $fillable = ['name', 'code', 'description', 'sort'];

    protected $casts = ['active' => 'boolean'];

    public function scopeActive(Builder $query, bool $active = true)
    {
        return $query->where(compact('active'));
    }
}
