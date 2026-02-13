<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Events') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-between mb-4">
                <h3 class="text-lg font-medium">All events</h3>
                <button class="px-4 py-2 " style="background-color : aquamarine;">
                    <a href="{{ route('events.create') }}" class="px-4 py-2   block text-black rounded">Create Event</a>
                </button>
            </div>

            <div >
                <form action="{{ route('events.index') }}" method="GET">
                    <div class="flex items-center">
                        <input type="text" name="search" placeholder="Search by title" class="px-4 py-2 border border-gray-300 rounded">
                        <button type="submit" class="ml-2 px-4 py-2  text-white rounded" style="background-color: blue;">Search</button>
                    </div>
                </form>
            </div>

            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    @if($events->isEmpty())
                        <p>No events yet.</p>
                    @else
                        <table class="w-full table-auto">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2 text-left">Title</th>
                                    <th class="px-4 py-2 text-left">Date</th>
                                    <th class="px-4 py-2 text-left">Location</th>
                                    <th class="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($events as $event)
                                <tr class="border-t">
                                    <td class="px-4 py-2">{{ $event->title }}</td>
                                    <td class="px-4 py-2">{{ $event->date }}</td>
                                    <td class="px-4 py-2">{{ $event->location }}</td>
                                    <td class="px-4 py-2 text-center">
                                        <a href="{{ route('events.show', $event) }}" class="text-blue-600 mr-2">View</a>
                                        <a href="{{ route('events.edit', $event) }}" class="text-yellow-600 mr-2">Edit</a>
                                        <form action="{{ route('events.destroy', $event) }}" method="POST" class="inline-block" onsubmit="return confirm('Delete this event?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
