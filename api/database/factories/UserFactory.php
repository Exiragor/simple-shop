<?php

use Faker\Generator as Faker;
use App\Models\User;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'role' => $faker->randomElement(['client', 'manager']),
        'email' => $faker->unique()->email,
        'password' => bcrypt('test123'),
    ];
});

$factory->state(User::class, 'admin', [
    'name' => 'Alex',
    'email' => 'admin@mail.ru',
    'role' => 'admin',
    'password' => bcrypt('admin')
]);