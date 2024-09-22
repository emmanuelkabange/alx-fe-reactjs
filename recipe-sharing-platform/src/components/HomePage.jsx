// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="mt-2 text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
