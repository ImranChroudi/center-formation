<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Create Event') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form action="{{ route('events.store') }}" method="POST">
                        @csrf

                        <div class="space-y-4">
                            <!-- Title -->
                            <div>
                                <label class="block text-sm font-medium">Title</label>
                                <input type="text" name="title" 
                                       value="{{ old('title', 'Default Event Title') }}" 
                                       class="mt-1 block w-full rounded border-gray-300" required>
                            </div>

                            <!-- Description -->
                            <div>
                                <label class="block text-sm font-medium">Description</label>
                                <textarea name="description" 
                                          class="mt-1 block w-full rounded border-gray-300" 
                                          rows="4">{{ old('description', 'This is a default description') }}</textarea>
                            </div>

                            <!-- Date -->
                            <div>
                                <label class="block text-sm font-medium">Date</label>
                                <input type="date" name="date" 
                                       value="{{ old('date', date('Y-m-d')) }}" 
                                       class="mt-1 block w-full rounded border-gray-300">
                            </div>

                            <!-- Location -->
                            <div>
                                <label class="block text-sm font-medium">Location</label>
                                <input type="text" name="location" 
                                       value="{{ old('location', 'Casablanca') }}" 
                                       class="mt-1 block w-full rounded border-gray-300">
                            </div>

                            <!-- Image URL -->
                            <div>
                                <label class="block text-sm font-medium">Image URL</label>
                                <input type="text" name="image" 
                                       value="{{ old('image', 'https://via.placeholder.com/150') }}" 
                                       class="mt-1 block w-full rounded border-gray-300">
                            </div>

                            <!-- Speakers -->
                            <div>
                                <p>Choisir les Speakers :</p>
                                @foreach ($speakers as $speaker)
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                               name="speaker_ids[]" value="{{ $speaker->id }}" 
                                               id="speaker{{ $speaker->id }}"
                                               {{ (is_array(old('speaker_ids')) && in_array($speaker->id, old('speaker_ids'))) ? 'checked' : '' }}>
                                        <label class="form-check-label" for="speaker{{ $speaker->id }}">
                                            {{ $speaker->name }}
                                        </label>
                                    </div>
                                @endforeach
                            </div>

                            <!-- Buttons -->
                            <div class="pt-4">
                                <button type="submit" style="background-color: green;" 
                                        class="px-4 py-2 bg-green-600 text-white rounded">
                                    Save
                                </button>
                                <a href="{{ route('events.index') }}" class="ml-2 text-gray-600">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
