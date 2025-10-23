import "./App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/auth/Login";

function AppContent() {
  const { user } = useAuth();

  return <div className="app">{user ? <Dashboard /> : <Login />}</div>;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
