import React from "react";
import OwnerDashboard from "../components/OwnerDashboard";
import AdminDashboard from "../components/AdminDashboard";
import ReaderDashboard from "../components/ReaderDashboard";
import { AuthContext } from "../main";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    navigate("/login");
  }
  const role = user.Role;

  return (
    <div>
      Dashboard
      {role == "Owner" ? (
        <OwnerDashboard />
      ) : role == "Admin" ? (
        <AdminDashboard />
      ) : (
        <ReaderDashboard />
      )}
    </div>
  );
}

export default Dashboard;
