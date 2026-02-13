<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'date',
        'location',
        'image',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class , "user_id");
    }

    public function speakers(){
        return $this->belongsToMany(Speakers::class , "event_speaker" , "event_id" , "speaker_id")
        ->withPivot('topic');
    }

    public function participants(){
        return $this->belongsToMany(Participants::class , "event_participant" , "event_id" , "participant_id");
      }
}
