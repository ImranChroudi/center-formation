<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ $participant->first_name }} {{ $participant->last_name }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <p><strong>Email:</strong> {{ $participant->email }}</p>
                    <p><strong>Phone:</strong> {{ $participant->phone }}</p>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
