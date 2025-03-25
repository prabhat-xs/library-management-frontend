import React from "react";
import BookList from "./BookList";
import UserList from "./UserList";
import RequestList from "./RequestList";

function OwnerDashboard() {
  return (
    <div>
      OwnerDashboard
      <BookList />
      <UserList />
      <RequestList />
      
    </div>
  );
}

export default OwnerDashboard;
