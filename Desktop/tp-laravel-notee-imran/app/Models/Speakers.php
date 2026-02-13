<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speakers extends Model
{
    use HasFactory;

    public function events(){
        return $this->belongsToMany(Events::class , "event_speaker" , "speaker_id" , "event_id")
        ->withTimestamps()
        ->withPivot('topic');
    }
}
