import React, { useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";

async function BookList() {
  const [books, setBooks] = useState(null);

  try {
    const res = await axios.get("url");
    setBooks(res.books);
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <div>BookList </div>
      <div>
        {" "}
        {books.map((book) => {
          <BookItem key={book.isbn} book={book} />;
        })}
      </div>
    </>
  );
}

export default BookList;
