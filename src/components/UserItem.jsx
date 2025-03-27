const UserItem = ({ user, role }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      {role === "owner" && (
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      )}
    </tr>
  );
};

export default UserItem;
