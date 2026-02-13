<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EEvents>
 */
class EventsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            "title" => $this->faker->title(),
            "description" => $this->faker->text(),
            "date" => $this->faker->date(),
            "location" => $this->faker->address(),
            "image" => $this->faker->imageUrl(),
            "user_id"=> $this->faker->numberBetween(1, 10),
            "created_at" => now(),
            "updated_at" => now(),         
        ];
    }
}
