<?php

use Faker\Generator as Faker;
use \App\Models\Comment;
use \App\Models\User;
use \App\Models\Product;

$factory->define(Comment::class, function (Faker $faker) {
    return [

        'user_id' => function() { return User::inRandomOrder()->first()->id; },
        'product_id' => function() { return Product::inRandomOrder()->first()->id; },
        'message' => $faker->text,
        'date' => $faker->date($format = 'Y-m-d', $max = 'now')

    ];
});
