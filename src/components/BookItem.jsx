

const BookItem = ({ book, role, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.available_copies}</td>
      {role !== "reader" && (
        <td>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </td>
      )}
    </tr>
  );
};

export default BookItem;
