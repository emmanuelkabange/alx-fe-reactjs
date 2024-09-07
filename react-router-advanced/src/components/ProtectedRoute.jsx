// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Get authentication status from the hook
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
