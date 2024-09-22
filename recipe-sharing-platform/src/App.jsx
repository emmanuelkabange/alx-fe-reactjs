import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
