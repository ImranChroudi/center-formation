<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détail de l'étudiant</title>
</head>
<body>

    <h1>Détail de l'étudiant : {{ $etudiant->nom }} {{ $etudiant->prenom }}</h1>

    <a href="{{ route('etudiants.index') }}">Retour à la liste</a>

    <h2>Informations personnelles</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <td>{{ $etudiant->id }}</td>
        </tr>
        <tr>
            <th>Nom</th>
            <td>{{ $etudiant->nom }}</td>
        </tr>
        <tr>
            <th>Prénom</th>
            <td>{{ $etudiant->prenom }}</td>
        </tr>
        <tr>
            <th>Date de naissance</th>
            <td>{{ $etudiant->dateDeNaissance }}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{{ $etudiant->email }}</td>
        </tr>
        <tr>
            <th>Téléphone</th>
            <td>{{ $etudiant->telephone }}</td>
        </tr>
    </table>

    <h2>Cours inscrits</h2>
    @if ($etudiant->inscriptions->count() > 0)
        <table border="1">
            <tr>
                <th>Code</th>
                <th>Nom du cours</th>
                <th>Description</th>
                <th>Date d'inscription</th>
            </tr>
            @foreach ($etudiant->inscriptions as $inscription)
                <tr>
                    <td>{{ $inscription->cours->code }}</td>
                    <td>{{ $inscription->cours->nom }}</td>
                    <td>{{ $inscription->cours->description }}</td>
                    <td>{{ $inscription->dateInscription }}</td>
                </tr>
            @endforeach
        </table>
    @else
        <p>Aucune inscription trouvée.</p>
    @endif

    <h2>Absences</h2>
    @if ($etudiant->absence->count() > 0)
        <table border="1">
            <tr>
                <th>Date</th>
                <th>Cours</th>
                <th>Justification</th>
            </tr>
            @foreach ($etudiant->absence as $abs)
                <tr>
                    <td>{{ $abs->date }}</td>
                    <td>{{ $abs->cours->nom }}</td>
                    <td>{{ $abs->justification ?? 'Non justifiée' }}</td>
                </tr>
            @endforeach
        </table>
    @else
        <p>Aucune absence enregistrée.</p>
    @endif


    <button>
        <a href="{{ route("get-cours" , ['id' => $etudiant->id]) }}">Ajouter une Note</a>
    </button>
</body>
</html>
