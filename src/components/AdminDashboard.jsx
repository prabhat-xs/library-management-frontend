import React from "react";
import BookList from "./BookList";
import UserList from "./UserList";
import RequestList from "./RequestList";

function AdminDashboard() {
  return (
    <div>
      AdminDashboard
      <BookList />
      <UserList />
      <RequestList />
    </div>
  );
}

export default AdminDashboard;
