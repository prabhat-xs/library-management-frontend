import { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";
import UserItem from "./UserItem";

const UserList = ({ role }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers(role);
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            {(role === "owner" || role === "admin") && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.id} user={user} role={role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
