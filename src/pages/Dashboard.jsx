import React from "react";
import OwnerDashboard from "../components/OwnerDashboard";
import AdminDashboard from "../components/AdminDashboard";
import ReaderDashboard from "../components/ReaderDashboard";

function Dashboard() {
  return (
    <div>
      Dashboard
      <OwnerDashboard />
      <AdminDashboard />
      <ReaderDashboard />
    </div>
  );
}

export default Dashboard;
