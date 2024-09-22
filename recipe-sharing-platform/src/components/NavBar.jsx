import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-recipe" className="text-white">
            Add Recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
