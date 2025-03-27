// const BookItem = ({ book, role }) => {
//   return (
//     <tr>
//       <td>{book.title}</td>
//       <td>{book.author}</td>
//       <td>{book.genre}</td>
//       {role !== "reader" && (
//         <td>
//           <button>Edit</button>
//           <button>Delete</button>
//         </td>
//       )}
//     </tr>
//   );
// };

// export { BookItem };

const BookItem = ({ book, role, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
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
