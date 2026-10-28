var nomEntreprise = "Tech Innovante";
var anneeCreation = 2010;

const afficherDetails = () => {
  let age = new Date().getFullYear() - anneeCreation;
  console.log(
    `L'entreprise  ${nomEntreprise} a  ete  creee  en  ${anneeCreation}  a  ${age}  ans.`,
  );
};
afficherDetails();

// exercie 2
const etudiants = [
  { id: 1, nom: "Ali", note: 14, filiere: "GI" },
  { id: 2, nom: "Sara", note: 17, filiere: "TM" },
  { id: 3, nom: "Karim", note: 9, filiere: "GI" },
  { id: 4, nom: "Mina", note: 12, filiere: "TM" },
];

// Question 1
const etudiantsGi = etudiants.filter((etudiant) => etudiant.filiere === "GI");
console.log(etudiantsGi);

// Question 2
const etudiants10 = etudiants
  .filter((etudiant) => etudiant.note >= 10)
  .map((etudiant) => ({ nom: etudiant.nom }));
console.log(etudiants10);

// Question 3
let nouvelleEtudiant = { ...etudiants[0], note: 15 };
nouvelleEtudiant.note = 15;
console.log(nouvelleEtudiant);

// Question 4
const { nom, note } = etudiants[1];
console.log(nom, note);

// EXERCICE 15

// Question 1
class Produit {
  constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }

  // Question 2
  afficher = () => {
    console.log(`Produit : ${this.nom}, Prix : ${this.prix}`);
  };
}

// Question 3
class Panier {
  constructor() {
    this.articles = [];
  }

  // Question 4
  ajouter = (produit) => {
    this.articles.push(produit);
  };

  total = () => {
    return this.articles.reduce((total, produit) => total + produit.prix, 0);
  };
}

const pc = new Produit("Laptop HP", 7500);
const souris = new Produit("Souris sans fil", 150);

const monPanier = new Panier();

monPanier.ajouter(pc);
monPanier.ajouter(souris);
console.log(`Total : ${monPanier.total()} MAD`);

const recupererUtilisateurs = async () => {
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/userss")

    if(users.status !== 200){
      throw new Error("url notfound")
    }
    
    const utilisateurs = await users.json();

    utilisateurs.map((item) => {
      console.log(`L'utilisateur ${item.name} habite à ${item.city}`);
    });
  } catch (err) {
    console.log("url notfound , error : " + err.message);
  }
};

recupererUtilisateurs()
