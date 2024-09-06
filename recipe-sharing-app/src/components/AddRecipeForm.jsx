// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // Get addRecipe action from the store
  const [title, setTitle] = useState(""); // Local state for title input
  const [description, setDescription] = useState(""); // Local state for description input

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    addRecipe({ id: Date.now(), title, description }); // Add a new recipe with a unique ID
    setTitle(""); // Clear the input fields after submission
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update the title state on change
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update the description state on change
        placeholder="Description"
        required
      />
      <button type="submit">Add Recipe</button> {/* Submit the form */}
    </form>
  );
};

export default AddRecipeForm;
