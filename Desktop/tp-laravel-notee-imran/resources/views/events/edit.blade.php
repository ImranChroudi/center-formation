<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Edit Event') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form action="{{ route('events.update', $event) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium">Title</label>
                                <input type="text" name="title" value="{{ old('title', $event->title ?? '') }}" class="mt-1 block w-full rounded border-gray-300" required>
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Description</label>
                                <textarea name="description" class="mt-1 block w-full rounded border-gray-300" rows="4">{{ old('description', $event->description ?? '') }}</textarea>
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Date</label>
                                <input type="date" name="date" value="{{ old('date', isset($event) ? $event->date : '') }}" class="mt-1 block w-full rounded border-gray-300">
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Location</label>
                                <input type="text" name="location" value="{{ old('location', $event->location ?? '') }}" class="mt-1 block w-full rounded border-gray-300">
                            </div>

                            <div>
                                <label class="block text-sm font-medium">Image URL</label>
                                <input type="text" name="image" value="{{ old('image', $event->image ?? '') }}" class="mt-1 block w-full rounded border-gray-300">
                            </div>

                           <div>

                           <?php echo $eventSpeakers ?>
                            <p>Speakers : </p>
                            @foreach ($speakers as $speaker ){
                                <div>
                                    <label>{{ $speaker->name }}</label>
                                    <input value="speakers_ids[]" type="checkbox"
                                     checked={{ in_array($speaker->id, $eventSpeakers) === true ? 'checked' : '' }} name="speaker_ids[]" value="{{ $speaker->id }}" />
                                </div>
                            }
                            
                            @endforeach
                           </div>

                            <div class="pt-4">
                                <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
                                <a href="{{ route('events.index') }}" class="ml-2 text-gray-600">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
