// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found!</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>{" "}
            {/* Real link to recipe details */}
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
