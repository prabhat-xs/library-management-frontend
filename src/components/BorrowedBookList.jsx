import { useState, useEffect } from "react";
import { fetchBorrowedBooks } from "../services/api";
import BorrowedBookItem from "./BorrowedBookItem";

const BorrowedBooksList = ({ role }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const loadBorrowedBooks = async () => {
      const data = await fetchBorrowedBooks();
      setBorrowedBooks(data);
    };
    loadBorrowedBooks();
  }, []);

  return (
    <div className="borrowed-books-list">
      <h2>Borrowed Books</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Borrower</th>
            <th>Due Date</th>
            {role !== "reader" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((book) => (
            <BorrowedBookItem key={book.id} book={book} role={role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooksList;
