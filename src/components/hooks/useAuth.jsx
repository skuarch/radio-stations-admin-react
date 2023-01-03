import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();
console.log('AuthContext: ', AuthContext);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  console.log('auth: ', auth);
  return auth;
};

export const AuthProvider = ({ Child }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={(isAuthenticated, login, logout)}>{Child}</AuthContext.Provider>
  );
};
