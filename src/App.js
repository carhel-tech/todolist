import React, { useState } from 'react';

const App = () => {
  //state(etat,donnee)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Mangue" },
    { id: 3, nom: "cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  //comportement (evenement)
  const handleDelete = (id) =>{
  
//1 Copie du state

const fruitsCopy=[...fruits];


//2 maniuler mon state
const fruitsCopiyUpdated = fruitsCopy.filter((fruit)=>fruit.id !== id)


//rerender mon state avec le stater

setFruits(fruitsCopiyUpdated);
  }

  const handleSubmit= (event) => {
    event.preventDefault();

    //Pour ajouter un nouveau fruit à la soumission
    //1 copie du state
    const fruitsCopy = [...fruits];
    //2 manipulation sur la copie du state
    const id= new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter= {id: id, nom: nom};
    fruitsCopy.push(fruitAAjouter);

    //3 modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  }

  const handleChange = (event) => {
    setNouveauFruit(event.target.value)
    
  }




  //affichage
  return (
    <div>
      <h1>Liste de fruit</h1>
      <ul>
        {fruits.map((fruit) => { 
          return <li key={fruit.id}>{fruit.nom} 
          <button onClick={()=>handleDelete(fruit.id)}>X</button></li>
         })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
        value={nouveauFruit}
         type="text" placeholder='Ajouter un fruit' 
         onChange={handleChange}/>
        <button>Ajouter</button>
      </form>

    </div>
  );
}

export default App;

// Gestion de formulaire
// 1 création de formulaire
// 2 soumission de formulaire
// 3 collecte des donnees du formulaire
