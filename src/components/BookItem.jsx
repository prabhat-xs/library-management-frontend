import React from "react";

function BookItem(book) {
  const { isbn, title, author, version, publisher } = book;
  return (
    <>
      <div className="book">
        {isbn} {title} {author} {version} {publisher}
      </div>
      <hr />
    </>
  );
}

export default BookItem;
