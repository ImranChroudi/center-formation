<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\UtilisateursSeeder;
use Database\Seeders\UsersSeeder;
use Database\Seeders\EventsSeeder;
use Database\Seeders\ParticipantsSeeder;
use Database\Seeders\SpeakersSeeder;
use Database\Seeders\EventSpeakerSeeder;
use Database\Seeders\EventParticipantSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        // core seeders
        // $this->call(UsersSeeder::class);
        // $this->call(EventsSeeder::class);
        // $this->call(ParticipantsSeeder::class);
        // $this->call(SpeakersSeeder::class);

        // pivot seeders
        $this->call(EventSpeakerSeeder::class);
        $this->call(EventParticipantSeeder::class);
    }
}
