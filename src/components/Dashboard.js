import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          borderBottom: "1px solid #ddd",
          paddingBottom: "1rem",
        }}
      >
        <h1>ShopAdmin Dashboard</h1>
        <div>
          <span>Welcome, {user?.name} </span>
          <button
            onClick={logout}
            style={{
              marginLeft: "1rem",
              padding: "0.5rem 1rem",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
