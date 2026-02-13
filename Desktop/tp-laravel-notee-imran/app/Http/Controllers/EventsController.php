<?php

namespace App\Http\Controllers;

use App\Exports\EventsExport;
use App\Models\Events;
use App\Models\Speakers;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        if($request->has('search') && $request->search){
             $events = Events::where('title' , 'like' , "%{$request->search}%")->get();
            return view('events.index' , ['events' => $events]);
        }
        $events = Events::all();
        return view('events.index' , ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $speakers = Speakers::all();
        return view('events.create' , ['speakers' => $speakers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'date' => 'required',
            'location' => 'required',
            'image' => 'required',
        ]);

        

        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'location' => $request->location,
            'image' => $request->image,
            'user_id' => auth()->id(),
        ];

        
        
        if( $request->has('speaker_ids') && count($request->speaker_ids) > 0){
            foreach($request->speaker_ids as $speaker_id){
                
                $event = Events::create($data);
                $event->speakers()->attach($speaker_id , ["topic" => "Topic: topci of speaker"]);
            }
                     return redirect()->route('events.index')->with('success', 'Event created.');

        }
         $event = Events::create($data);

         return redirect()->route('events.index')->with('success', 'Event created.');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $event = Events::with('speakers')->find($id);
        return view("events.show" , ["event" => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event = Events::with('speakers')->find($id);
        $speakers = Speakers::all();
        $eventSpeakers = $event->speakers->pluck('id')->toArray();
        return view("events.edit" , ["event" => $event , "speakers" => $speakers ,
        "eventSpeakers" => $eventSpeakers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Events::find($id);
        $event->delete();
        return redirect()->route('events.index')->with('success', 'Event deleted.');
    }

    public function search(Request $request){
        $events = Events::where('title' , 'like' , "%{$request->search}%");
        return view('events.index' , ['events' => $events]);
    }


    public function generatePdf($id){
        $events = Events::with(['speakers' , 'participants'])->find($id);
        $pdf = FacadePdf::loadView('events.pdf' , ['event' => $events]);
        return $pdf->download('events.pdf');
    }

    public function exportExcel()
    {
         return Excel::download(new EventsExport, 'events.xlsx');
    }
}
