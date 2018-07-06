<?php

use Faker\Generator as Faker;
use App\Models\Category;
use App\Models\Product;

$factory->define(Product::class, function (Faker $faker) {
    $tags = $faker->randomElements(['new', 'hit', 'pure', 'pop', 'rare', 'cast', 'expensive', 'cheaper'], 2);
    $tags_json = json_encode(['tags' => $tags]);
    $specs = $faker->randomElement([
        ['name' => 'weight', 'value' => $faker->randomNumber()],
        ['name' => 'color', 'value' => $faker->randomElement(['yellow', 'black', 'white', 'red', 'green', 'orange'])],
    ]);
    $specs_json = json_encode(['specifications' => $specs]);

    return [
        'name' => 'Товар №' . $faker->randomNumber(),
        'code' => 'CODE_' . $faker->randomNumber(),
        'description' => $faker->paragraph,
        'price' => $faker->randomFloat(3, 100, 1000000),
        'specifications' => $specs_json,
        'tags' => $tags_json,
        'category_id' => function() { return Category::inRandomOrder()->first()->id; },
    ];
});
