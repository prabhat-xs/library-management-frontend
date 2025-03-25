import React from "react";

function UserItem(user) {
  const { Name, Email, ContactNumber, Role } = user;
  return (
    <div>
      {Name}
      {Email}
      {ContactNumber}
      {Role}
    </div>
  );
}

export default UserItem;
