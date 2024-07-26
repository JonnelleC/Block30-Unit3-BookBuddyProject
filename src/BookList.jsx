import { useState, useEffect } from "react";

const BookList = ({ setSingleBookDetails }) => {
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseJson = await response.json();
        const allBooks = responseJson.results;
        setBookList(allBooks);
      } catch (error) {
        setError('Error fetching books. Please try again later.');
        console.error("Error fetching books:", error);
      }
    };

    getAllBooks();
  }, []);

  const getBookInfo = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const individualBook = await response.json();
      setSingleBookDetails(individualBook);
    } catch (error) {
      setError('Error fetching book details. Please try again later.');
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {bookList.map((singleBook) => (
          <li
            key={singleBook.id}  // Using a unique key
            onClick={() => getBookInfo(singleBook.id)}  // Pass the book id instead
          >
            {singleBook.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;