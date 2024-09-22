import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center text-xl font-semibold">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              Ingredients
            </h2>
            <ul className="list-disc pl-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg text-gray-600">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              Instructions
            </h2>
            <p className="text-lg text-gray-600 whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
