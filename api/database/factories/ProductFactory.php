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

    return [
        'name' => 'Товар №' . $faker->randomNumber(),
        'code' => 'CODE_' . $faker->randomNumber(),
        'description' => $faker->paragraph,
        'price' => $faker->randomFloat(3, 100, 1000000),
        'specifications' => json_encode($specs),
        'tags' => json_encode($tags),
        'category_id' => function() { return Category::inRandomOrder()->first()->id; },
    ];
});
