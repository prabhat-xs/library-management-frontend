import { useState, useEffect } from "react";
import { fetchBooks, deleteBook } from "../services/api";
import BookItem from "./BookItem";
import BookForm from "./BookForm";
import { toast } from "react-hot-toast";

const BookList = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await fetchBooks(role);
    setBooks(data.books);
  };

  const handleDelete = async (isbn) => {
    try {
      await deleteBook(role, isbn);
      toast.success("Book deleted successfully!");
      loadBooks();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete book.");
    }
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
    setShowForm(true);
  };

  return (
    <div className="book-list">
      <h2>Books</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {role !== "reader" && (
        <button onClick={() => setShowForm(true)}>Add Book</button>
      )}

      {showForm && (
        <BookForm
          role={role}
          bookToEdit={bookToEdit}
          onBookSaved={loadBooks}
          onClose={() => {
            setShowForm(false);
            setBookToEdit(null);
          }}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Version</th>
            <th>Copies</th>
            {role !== "reader" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {books
            .filter((book) =>
              book?.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <BookItem
                key={book.isbn}
                book={book}
                role={role}
                onEdit={handleEdit}
                onDelete={() => handleDelete(book.isbn)}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
