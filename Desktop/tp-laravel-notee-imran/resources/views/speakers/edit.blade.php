<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Edit Speaker') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form action="{{ route('speakers.update', $speaker) }}" method="POST">
                        @csrf
                        @method('PUT')
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
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
