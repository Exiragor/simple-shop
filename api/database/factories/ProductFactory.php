<?php

use Faker\Generator as Faker;
use App\Models\Category;
use App\Models\Product;

$factory->define(Product::class, function (Faker $faker) {
    $tags = $faker->randomElements(['new', 'hit', 'pure', 'pop', 'rare', 'cast', 'expensive', 'cheaper'], 2);
    $specs = [
        ['name' => 'weight', 'value' => $faker->randomNumber()],
        ['name' => 'color', 'value' => $faker->randomElement(['yellow', 'black', 'white', 'red', 'green', 'orange'])],
    ];
    $images = [
        "https://pp.userapi.com/c606823/v606823421/1aad/8Jrr2sDrNP0.jpg",
        "https://sun1-15.userapi.com/c543109/v543109365/31795/VzglO7Ek4Zc.jpg",
        "https://sun1-16.userapi.com/c7006/v7006851/20fc9/ACW4fTXr86I.jpg",
    ];

    return [
        'name' => $faker->name,
        'code' => 'CODE_' . $faker->randomNumber(),
        'description' => $faker->paragraph,
        'price' => $faker->randomFloat(3, 100, 1000000),
        'specifications' => json_encode($specs),
        'tags' => json_encode($tags),
        'category_id' => function() { return Category::inRandomOrder()->first()->id; },
        'img_path' => $faker->randomElement($images),
    ];
});
