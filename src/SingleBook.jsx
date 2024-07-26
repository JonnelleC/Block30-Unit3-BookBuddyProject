import React from 'react';

const AllBooks = ({ BookList }) => {
  return (
    <div>
      <h1>Ellenor's Book Collection</h1>
      <ul>
        {BookList.map((book) => (
          <li key={book.id}>
            <img src={book.coverimage} alt={book.title} />
            <div>{book.title}</div>
            <div>{book.details}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooks;