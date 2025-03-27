import { useState, useEffect, useContext } from "react";
import { addBook, updateBook } from "../services/api";
import { toast } from "react-hot-toast";

const BookForm = ({ role, bookToEdit, onBookSaved, onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [copies, setCopies] = useState(0);
  //todo add all applicable fields
  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setCopies(bookToEdit.available_copies);
    }
  }, [bookToEdit]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = { title, author, copies };

    try {
      if (bookToEdit) {
        await updateBook(role, bookToEdit.ISBN, bookData);
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
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Copies"
          value={copies}
          onChange={(e) => setCopies(e.target.value)}
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
