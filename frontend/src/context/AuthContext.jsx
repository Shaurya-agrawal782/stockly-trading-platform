import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on page load
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await fetch('http://localhost:3002/', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await response.json();

      if (data.status) {
        setIsAuthenticated(true);
        // Get full user data from localStorage
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('user');
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, logout, checkAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
