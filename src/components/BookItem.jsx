const BookItem = ({ book, role, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors}</td>
      <td>{book.publisher}</td>
      <td>{book.version}</td>
      <td>{book.available_copies}</td>
      {role !== "reader" && (
        <td>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.isbn)}>Delete</button>
        </td>
      )}
    </tr>
  );
};

export default BookItem;
