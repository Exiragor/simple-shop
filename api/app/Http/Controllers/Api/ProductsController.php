<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index(Request $request, Product $product)
    {
        $product = $product->newQuery();

        if ($request->has('name')) {
            $product->where('name', 'like', '%' . $request->input('name') . '%');
        }

        $count = $request->get('count');
        $count = (is_numeric($count) && $count > 0) ? $count : 20;
        $page = $request->get('page');
        $page = (is_numeric($page) && $page > 0) ? $page - 1 : 0;

        $products = $product->active()->skip($page * $count)->paginate($count);
        $products->load('category');

        return ProductResource::collection($products);
    }

    public function get(string $id) {
        $id = (is_numeric($id) && $id > 0) ? $id : null;
        $product = Product::active()->findOrFail($id);

        return ProductResource::make($product);
    }
}
