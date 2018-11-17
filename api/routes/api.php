<?php

use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\OrdersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{id}', [ProductsController::class, 'get']);
Route::get('/comments', [CommentsController::class, 'index']);
Route::post('/comments', [CommentsController::class, 'store']);
Route::post('/orders', [OrdersController::class, 'store']);
