import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // пока null = не залогинен

  const login = async (login, password) => {
    // Заглушка: имитируем вход
    if (login === 'admin' && password === '123456') {
      setUser({ login: 'admin' });
      return { success: true };
    }
    throw new Error('Неверный логин или пароль');
  };

  const register = async (login, email, password) => {
    // Заглушка: имитируем регистрацию
    setUser({ login });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}