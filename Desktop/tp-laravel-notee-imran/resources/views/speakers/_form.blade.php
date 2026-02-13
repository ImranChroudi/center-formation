@props(['speaker' => null])

<div class="space-y-4">
    <div>
        <label class="block text-sm font-medium">Name</label>
        <input type="text" name="name" value="{{ old('name', $speaker->name ?? '') }}" class="mt-1 block w-full rounded border-gray-300" required>
    </div>

    <div>
        <label class="block text-sm font-medium">Bio</label>
        <textarea name="bio" class="mt-1 block w-full rounded border-gray-300" rows="4">{{ old('bio', $speaker->bio ?? '') }}</textarea>
    </div>

    <div>
        <label class="block text-sm font-medium">Email</label>
        <input type="email" name="email" value="{{ old('email', $speaker->email ?? '') }}" class="mt-1 block w-full rounded border-gray-300">
    </div>

    <div class="pt-4">
        <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <a href="{{ route('speakers.index') }}" class="ml-2 text-gray-600">Cancel</a>
    </div>
</div>
