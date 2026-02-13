<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Events;
use App\Models\Speakers;
use Illuminate\Support\Str;

class EventSpeakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = Events::all();
        $speakers = Speakers::all();

        foreach ($events as $event) {
            $count = $speakers->count() ?: 0;
            if ($count === 0) {
                continue;
            }
            $pick = rand(1, min(3, $count));
            $assigned = $speakers->random($pick)->pluck('id')->toArray();
            foreach ($assigned as $speakerId) {
                $event->speakers()->attach($speakerId, [
                    'topic' => 'Topic: ' . Str::random(10),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
