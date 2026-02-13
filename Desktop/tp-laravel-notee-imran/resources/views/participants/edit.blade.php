<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ __('Edit Participant') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form action="{{ route('participants.update', $participant) }}" method="POST">
                        @csrf
                        @method('PUT')
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
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
