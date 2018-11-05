<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrder;
use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function store(StoreOrder $request) {
        $order = new Order();
        $order->first_name = $request->firstName;
        $order->last_name = $request->lastName;
        $order->phone = $request->phone;
        $order->sum = $request->sum;
        $order->status = 'new';
        $order->save();

        return response('OK');
    }
}
