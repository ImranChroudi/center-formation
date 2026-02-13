<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ajouter une étudiant</h1>


    <form action="{{ route("etudiants.update", $etudiant->id) }}" method="post">
        @csrf
        @method("PUT")
        <label>Nom : </label>
        <input type="text" name="nom" id="nom" value="{{ $etudiant->nom }}">

        <label>Prenom : </label>
        <input type="text" name="prenom" id="prenom" value="{{ $etudiant->prenom }}"> 

        <label>Date de naissance : </label>
        <input type="date" name="dateDeNaissance" id="dateDeNaissance" value="{{ $etudiant->dateDeNaissance }}">

        <label>Email : </label>
        <input type="email" name="email" id="email" value="{{ $etudiant->email }}">

      
        <label>Telephone : </label>
        <input type="tel" name="telephone" id="telephone" value="{{ $etudiant->telephone }}">

        <button type="submit">Modifier</button>

    </form>
</body>
</html>