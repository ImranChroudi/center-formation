<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Events;
use App\Models\Participants;

class EventParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = Events::all();
        $participants = Participants::all();

        foreach ($participants as $participant) {
            $assigned = $events->random(rand(1, min(5, $events->count())))->pluck('id')->toArray();
            foreach ($assigned as $eventId) {
                DB::table('event_participant')->insert([
                    'event_id' => $eventId,
                    'participant_id' => $participant->id,
                    'registered_at' => now(),
                ]);
            }
        }
    }
}
