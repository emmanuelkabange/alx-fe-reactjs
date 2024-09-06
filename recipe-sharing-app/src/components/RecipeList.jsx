// src/App.jsx
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm /> {/* Form to add recipes */}
      <RecipeList /> {/* Display the list of recipes */}
    </div>
  );
}

export default App;
