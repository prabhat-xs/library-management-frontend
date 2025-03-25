import axios from "axios";
import React from "react";
import UserItem from "./UserItem";

async function UserList() {
  const [users, setUsers] = useState(null);
  try {
    const res = await axios.get("url");
    setUsers(res.user);
  } catch (error) {}

  return (
    <div>
      UserList
      {users.map((user) => {
        <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UserList;
