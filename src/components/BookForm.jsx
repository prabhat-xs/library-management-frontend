import { useState, useEffect, useContext } from "react";
import { addBook, updateBook } from "../services/api";
import { toast } from "react-hot-toast";
import { AuthContext } from "../main";

const BookForm = ({ bookToEdit, onBookSaved, onClose }) => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setGenre(bookToEdit.genre);
    }
  }, [bookToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = { title, author, genre };

    try {
      if (bookToEdit) {
        await updateBook(user,bookToEdit.id, bookData);
        toast.success("Book updated successfully!");
      } else {
        await addBook(user, bookData);
        toast.success("Book added successfully!");
      }
      onBookSaved();
      onClose();
    } catch (error) {
      toast.error("Failed to save the book.");
    }
  };

  return (
    <div className="form-container">
      <h3>{bookToEdit ? "Edit Book" : "Add Book"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <button type="submit">{bookToEdit ? "Update" : "Add"} Book</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookForm;
