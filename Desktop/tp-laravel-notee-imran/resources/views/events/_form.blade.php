@props(['event' => null])

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

    <div class="pt-4">
        <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <a href="{{ route('events.index') }}" class="ml-2 text-gray-600">Cancel</a>
    </div>
</div>
