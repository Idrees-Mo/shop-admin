import React from "react";

import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome, {user?.name}!</p>
      </div>
      <div>
        <h2>User Information</h2>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
      </div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Dashboard;
