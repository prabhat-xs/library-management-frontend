const BorrowedBookItem = ({ book, role }) => {
  const handleReturn = () => {
    console.log(`Returned book ${book.id}`);
  };

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.borrower}</td>
      <td>{book.dueDate}</td>
      {role !== "reader" && (
        <td>
          <button onClick={handleReturn}>Mark as Returned</button>
        </td>
      )}
    </tr>
  );
};

export default BorrowedBookItem;
