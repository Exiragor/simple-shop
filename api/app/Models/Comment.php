<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['id', 'name', 'comment'];

    protected $casts = ['active' => 'boolean'];

    public function scopeActive(Builder $query, bool $active = true)
    {
        return $query->where(compact('active'));
    }
}
