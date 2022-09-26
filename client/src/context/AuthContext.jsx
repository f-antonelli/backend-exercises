import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('There ir not auth provider');
  return context;
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');

  const login = token => {
    setIsLogged(true);
    setToken(token);
    localStorage.setItem('token', token);
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return <AuthContext.Provider value={{ login, token, isLogged }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
export default AuthContext;
