<?php

namespace App\Http\Controllers;

use App\Models\Events;
use App\Models\Participants;
use Illuminate\Http\Request;

class ParticipantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $participants = Participants::all();
        return view("participants.index" , ["participants" => $participants]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $events = Events::all();
        return view("participants.create" , ["events" => $events]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "first_name" => "required",
            "last_name" => "required",
            "email" => "required",
            "phone" => "required"
        ]);

        $data = $request->all();
        Participants::create($data);
        return redirect()->route("participants.index")->with("success" , "Participant created.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $participant = Participants::find($id);
        return view("participants.show" , ["participant" => $participant]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $participant = Participants::find($id);
        return view("participants.edit" , ["participant" => $participant]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "first_name" => "required",
            "last_name" => "required",
            "email" => "required",
            "phone" => "required"
        ]);

        


        $participant = Participants::find($id);
        $participant::update([
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "phone" => $request->phone
        ]);

        return redirect()->route("participants.index")->with("success" , "Participant updated.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $participant = Participants::find($id);
        $participant->delete();
        return redirect()->route("participants.index")->with("success" , "Participant deleted.");
    }
}
