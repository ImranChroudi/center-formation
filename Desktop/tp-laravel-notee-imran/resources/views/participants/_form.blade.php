@props(['participant' => null])

<div class="space-y-4">
    <div>
        <label class="block text-sm font-medium">First name</label>
        <input type="text" name="first_name" value="{{ old('first_name', $participant->first_name ?? '') }}" class="mt-1 block w-full rounded border-gray-300" required>
    </div>

    <div>
        <label class="block text-sm font-medium">Last name</label>
        <input type="text" name="last_name" value="{{ old('last_name', $participant->last_name ?? '') }}" class="mt-1 block w-full rounded border-gray-300" required>
    </div>

    <div>
        <label class="block text-sm font-medium">Email</label>
        <input type="email" name="email" value="{{ old('email', $participant->email ?? '') }}" class="mt-1 block w-full rounded border-gray-300">
    </div>

    <div>
        <label class="block text-sm font-medium">Phone</label>
        <input type="text" name="phone" value="{{ old('phone', $participant->phone ?? '') }}" class="mt-1 block w-full rounded border-gray-300">
    </div>

    <div class="pt-4">
        <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <a href="{{ route('participants.index') }}" class="ml-2 text-gray-600">Cancel</a>
    </div>
</div>
