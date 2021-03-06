<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['first_name', 'last_name', 'phone', 'status', 'sum'];

    public function products()
    {
        return $this->belongsToMany('App\Models\Product', 'product_order');
    }
}
