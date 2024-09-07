// ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simulate authentication status
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
