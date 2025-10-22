import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = () => {
  // Authentication logic would go here
  return (
    <AuthContext.Provider value={{ user: "idrees" }}>
      {/* Children components would go here */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
