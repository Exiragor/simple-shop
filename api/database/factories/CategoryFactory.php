<?php

use Faker\Generator as Faker;
use App\Models\Category;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->title,
        'code' => 'CODE_' . $faker->randomNumber(),
        'description' => $faker->text,
        'sort' => 100
    ];
});
