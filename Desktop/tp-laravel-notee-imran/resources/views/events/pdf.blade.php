<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Détails de l'événement</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; color: #222; }
        h1 { color: #2563eb; font-size: 2rem; margin-bottom: 0.5rem; }
        .section { margin-bottom: 1.5rem; }
        .label { font-weight: bold; }
        .speakers, .participants { margin-top: 1rem; }
        .speakers ul, .participants ul { margin: 0; padding-left: 1.2rem; }
        .speakers li, .participants li { margin-bottom: 0.5rem; }
        .event-image { max-width: 300px; margin: 1rem 0; border-radius: 8px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .table th, .table td { border: 1px solid #ccc; padding: 6px 10px; }
        .table th { background: #f3f4f6; }
    </style>
</head>
<body>
    <h1>{{ $event->title }}</h1>
    <div class="section">
        <span class="label">Description:</span> {{ $event->description }}
    </div>
    <div class="section">
        <span class="label">Date:</span> {{ $event->date }}<br>
        <span class="label">Lieu:</span> {{ $event->location }}<br>
        <span class="label">Créé par:</span> {{ $event->user->name }}
    </div>
    @if($event->image)
        <div class="section">
            <img src="{{ $event->image }}" alt="Event image" class="event-image">
        </div>
    @endif
    <div class="section speakers">
        <h2>Speakers</h2>
        <ul>
            @foreach ($event->speakers as $speaker)
                <li>
                    <span class="label">Nom:</span> {{ $speaker->name }}<br>
                    <span class="label">Email:</span> {{ $speaker->email }}<br>
                    <span class="label">Sujet:</span> {{ $speaker->pivot->topic }}
                </li>
            @endforeach
        </ul>
    </div>
    <div class="section participants">
        <h2>Participants</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($event->participants as $participant)
                    <tr>
                        <td>{{ $participant->first_name }} {{ $participant->last_name }}</td>
                        <td>{{ $participant->email }}</td>
                        <td>{{ $participant->phone }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
