<?php

namespace App\Http\Controllers;

use App\Models\Etudiants;
use App\Models\Inscriptions;
use App\Models\Utilisateurs;
use Illuminate\Http\Request;

class EtudiantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $etudiants = Etudiants::all();
        return view('etudiants.index' , ["etudiants" => $etudiants]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('etudiants.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $newUtilisateur = new Utilisateurs();
        $newUtilisateur->nom = $request->nom;
        $newUtilisateur->email = $request->email;
        $newUtilisateur->motDePasse = $request->motDePasse;
        $newUtilisateur->save();

        $newEtudiant =  new Etudiants();
        $newEtudiant->nom = $request->nom;
        $newEtudiant->prenom = $request->prenom;
        $newEtudiant->dateDeNaissance = $request->dateDeNaissance;
        $newEtudiant->email = $request->email;
        $newEtudiant->telephone = $request->telephone;
        $newEtudiant->utilisateur_id = $newUtilisateur->id;
        $newEtudiant->save();


        return redirect()->route('etudiants.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $etudiant = Etudiants::with(['inscriptions.cours', 'absence.cours'])->find($id);
        return view('etudiants.show', ['etudiant' => $etudiant]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $etudiant)
    {
        $etudiant = Etudiants::find($etudiant);
        return view("etudiants.edit" , ["etudiant" => $etudiant]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $etudiant = Etudiants::find($id);
        $etudiant->nom = $request->nom;
        $etudiant->prenom = $request->prenom;
        $etudiant->dateDeNaissance = $request->dateDeNaissance;
        $etudiant->email = $request->email;
        $etudiant->telephone = $request->telephone;
        

        $etudiant->save();
        return redirect()->route('etudiants.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $etudiant = Etudiants::find($id);
        $etudiant->delete();
        return redirect()->route('etudiants.index');
    }


    public function getCours($etudiant){
        dump($etudiant);
        //$cours = Inscriptions::with(['cours'])->where('etudiant_id', $etudiant->id)->get();
        //return view('etudiants.note', ['etudiant' => $etudiant, 'cours' => $cours]);
    }
}
