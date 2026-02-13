<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ajouter une étudiant</h1>


    <form action="{{ route("etudiants.store") }}" method="post">
        @csrf
        @method("POST")
        <label>Nom : </label>
        <input type="text" name="nom" id="nom">

        <label>Prenom : </label>
        <input type="text" name="prenom" id="prenom">

        <label>Date de naissance : </label>
        <input type="date" name="dateDeNaissance" id="dateDeNaissance">

        <label>Email : </label>
        <input type="email" name="email" id="email">

        <label>Mot de passe : </label>
        <input type="password" name="motDePasse" id="motDePasse">

        <label>Telephone : </label>
        <input type="tel" name="telephone" id="telephone">

        <button type="submit">Ajouter</button>

    </form>
</body>
</html>