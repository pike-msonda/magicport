<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ProjectFactory extends Factory
{

    public function definition(): array
    {
        return [
            'name' => fake()->realTextBetween(10, 50),
            'description' => fake()->paragraph(),
        ];
    }
}
