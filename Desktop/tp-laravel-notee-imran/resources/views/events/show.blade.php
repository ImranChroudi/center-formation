<x-app-layout>
    <style>
        .event-details p {
            margin-bottom: 0.5rem;
        }
        .event-details img {
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-top: 0.5rem;
        }
        .event-details ul {
            margin-left: 1.5rem;
            list-style: disc;
        }
        .event-details li {
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e5e7eb;
        }
        .event-details h2 {
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            color: #2563eb;
        }
    </style>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ $event->title }}</h2>
    </x-slot>

    <div class="py-6">
        <div  class="max-w-3xl mx-auto sm:px-6 lg:px-8 mb-4">
            <a style="background-color : aquamarine;" href="{{ route('events.pdf', $event->id) }}" class="inline-block px-4 py-2 bg-indigo-600 text-black rounded hover:bg-indigo-700" target="_blank">
                Générer PDF
            </a>
            <a style="background-color : aquamarine; margin-left : 10px;" href="{{ route('events.export', $event->id) }}" class="inline-block px-4 py-2 bg-indigo-600 text-black rounded hover:bg-indigo-700" target="_blank">
                exporter les participants
            </a>
            
        </div>
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100 event-details">
                    <p class="mb-4">{{ $event->description }}</p>
                    <p><strong>Date:</strong> {{ $event->date }}</p>
                    <p><strong>Location:</strong> {{ $event->location }}</p>
                    @if($event->image)
                        <div class="mt-4">
                            <img src="{{ $event->image }}" alt="Event image" class="max-w-full h-auto">
                        </div>
                    @endif
                    <p><strong>Created by:</strong> {{ $event->user->name }}</p>
                    <p>Description: {{ $event->description }}</p>

                   <div>
                     <h2 class="text-lg font-semibold mt-4">Speakers:</h2>
                    <ul>
                        @foreach ($event->speakers as $speaker)
                            <li>
                                <p><strong>Name:</strong> {{ $speaker->name }}</p>
                                <p><strong>Email:</strong> {{ $speaker->email }}</p>
                                <p><strong>Topic:</strong> {{ $speaker->pivot->topic }}</p>
                            </li>
                        @endforeach
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
