<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Speakers') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-between mb-4">
                <h3 class="text-lg font-medium">All speakers</h3>
                <a href="{{ route('speakers.create') }}" class="px-4 py-2 bg-blue-600 text-white rounded">Create Speaker</a>
            </div>

            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    @if($speakers->isEmpty())
                        <p>No speakers yet.</p>
                    @else
                        <table class="w-full table-auto">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2 text-left">Name</th>
                                    <th class="px-4 py-2 text-left">Email</th>
                                    <th class="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($speakers as $s)
                                <tr class="border-t">
                                    <td class="px-4 py-2">{{ $s->name }}</td>
                                    <td class="px-4 py-2">{{ $s->email }}</td>
                                    <td class="px-4 py-2 text-center">
                                        <a href="{{ route('speakers.show', $s) }}" class="text-blue-600 mr-2">View</a>
                                        <a href="{{ route('speakers.edit', $s) }}" class="text-yellow-600 mr-2">Edit</a>
                                        <form action="{{ route('speakers.destroy', $s) }}" method="POST" class="inline-block" onsubmit="return confirm('Delete this speaker?')">
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
