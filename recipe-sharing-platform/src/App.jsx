import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

export default function App() {
  return (
    <Router>
      <nav classname="bg-gray-800 p-4">
        <Link to="/" classname="text-white mr-4">
          Home
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
