import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "At least two ingredients are required";
    if (!steps) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Handle the submission logic
    console.log({ title, ingredients: ingredients.split(","), steps });
    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      {errors.title && <p className="text-red-500 mb-2">{errors.title}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Recipe Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 p-2 transition duration-200"
          required
        />
      </div>
      {errors.ingredients && (
        <p className="text-red-500 mb-2">{errors.ingredients}</p>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Ingredients (comma-separated)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 p-2 transition duration-200"
          rows="4"
          required
        />
      </div>
      {errors.steps && <p className="text-red-500 mb-2">{errors.steps}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 p-2 transition duration-200"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
