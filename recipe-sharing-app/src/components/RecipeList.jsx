// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "../stores/recipeStore"; // Import the store

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Fetch recipes from the store

  if (!recipes || recipes.length === 0) {
    return <p>No recipes added yet!</p>; // Display message if no recipes are available
  }

  return (
    <div>
      {recipes.map(
        (
          recipe // Use map to iterate over the recipes array
        ) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default RecipeList;
