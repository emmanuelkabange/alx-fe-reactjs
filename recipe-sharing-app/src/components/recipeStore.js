// src/stores/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe], // Add new recipe to the array
    })),
  setRecipes: (recipes) => set({ recipes }), // Set the list of recipes (if necessary)
}));

export { useRecipeStore };
