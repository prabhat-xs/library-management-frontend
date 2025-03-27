import { useState } from "react";
import { addBook } from "../services/api";
import { toast } from "react-hot-toast";

const AddBookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBook = await addBook(formData);
      toast.success("Book added successfully!");
      setFormData({ title: "", author: "", genre: "" });
      onBookAdded(newBook);
    } catch (error) {
      toast.error("Failed to add book.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add a New Book</h2>
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
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
