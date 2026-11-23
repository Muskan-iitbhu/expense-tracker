import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/v1/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // You can also confirm backend returns _id; if not, fix backend to send it
          setUser({
            _id: res.data._id,
            name: res.data.name,
            email: res.data.email,
          });
        } catch (error) {
          console.error('Failed to fetch user:', error);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);

      setUser({
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
      });
    } catch (error) {
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);

      setUser({
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
      });
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
