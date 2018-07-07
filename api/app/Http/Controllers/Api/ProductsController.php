<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $count = $request->get('count');
        $count = (is_numeric($count) && $count > 0) ? $count : 20;
        $page = $request->get('page');
        $page = (is_numeric($page) && $page > 0) ? $page - 1 : 0;

        $products = Product::active()->skip($page * $count)->take($count)->get();
        $products->load('category');

        return ProductResource::collection($products);
    }
}
