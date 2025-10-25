// src/components/RecipePortfolio/RecipePortfolio.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

function RecipePortfolio() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const querySnapshot = await getDocs(collection(db, 'recipes'));
      const recipesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container py-4">
  <div className="row g-4">
    {recipes.map(recipe => (
      <div className="col-md-4" key={recipe.id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
   );
}

export default RecipePortfolio;
