// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Error fetching the recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="text-center">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{recipe.title}</h2>
          <h3 className="text-xl mt-4">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {/* Assuming ingredients are part of your recipe data */}
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mt-1">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="text-xl mt-4">Cooking Instructions:</h3>
          <p className="mt-1">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
