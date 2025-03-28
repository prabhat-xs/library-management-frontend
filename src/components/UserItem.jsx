const UserItem = ({ role, user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.contact_number}</td>
      <td>{user.Role}</td>
      {(role === "owner" || role == "admin") && (
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      )}
    </tr>
  );
};

export default UserItem;
