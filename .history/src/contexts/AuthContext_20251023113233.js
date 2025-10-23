import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate successful login
        setUser({ id: 1, name: "Admin User", email, role: "admin" });
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, setUser, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
