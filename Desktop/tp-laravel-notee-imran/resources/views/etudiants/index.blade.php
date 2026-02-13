<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Etudiants</h1>

    <div>

    @if (count($etudiants) == 0)

        <p>Il n'y a pas d'étudiants</p>
        <?php return ?>
    

    
    @endif


    <button
        
    >
        <a href="{{ route('etudiants.create') }}">Ajouter une étudiant</a>
    </button>
        <table border="1">
            <tr>
                <th>id</th>
                <th>nom</th>
                <th>prenom</th>
                <th>dateDeNaissance</th>
                <th>email</th>
                <th>telephone</th>
                <th>actions</th>
            </tr>
            @foreach ($etudiants as $etudiant)
                <tr>
                    <td>{{ $etudiant->id }}</td>
                    <td>{{ $etudiant->nom }}</td>
                    <td>{{ $etudiant->prenom }}</td>
                    <td>{{ $etudiant->dateDeNaissance }}</td>
                    <td>{{ $etudiant->email }}</td>
                    <td>{{ $etudiant->telephone }}</td>
                    <td>
                        <div>
                            <button >
                                <a href="{{ route('etudiants.show', $etudiant->id) }}">Voir</a>
                            </button>
                            <button>
                                <a href="{{ route('etudiants.edit', $etudiant->id) }}">Modifier</a>
                            </button>
                           <form action="{{ route('etudiants.destroy', $etudiant->id) }}" method="post">
                            @csrf
                            @method("DELETE")
                              <button type="submit">
                                Supprimer
                             </button>
                            </form>
                        </div>
                    </td>
                </tr>
             @endforeach
        </table>
    </div>
</body>
</html>