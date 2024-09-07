// src/hooks/useAuth.js
import { useState } from "react";

// Mock authentication hook
export function useAuth() {
  // Simulate authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to log in for testing purposes
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout,
  };
}
