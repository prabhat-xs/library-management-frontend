import { useState, useEffect } from "react";
import { updateBook } from "../services/api";
import { toast } from "react-hot-toast";

const EditBookForm = ({ book, onBookUpdated, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        genre: book.genre,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBook = await updateBook(book.id, formData);
      toast.success("Book updated successfully!");
      onBookUpdated(updatedBook);
    } catch (error) {
      toast.error("Failed to update book.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-book-form">
      <h2>Edit Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Book</button>
      <button type="button" onClick={onCancel} className="cancel-btn">
        Cancel
      </button>
    </form>
  );
};

export default EditBookForm;
