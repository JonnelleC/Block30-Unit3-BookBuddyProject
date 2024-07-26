import { useState, useEffect } from "react";

const BookList = ({ setSingleBookDetails }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        const responseJson = await response.json();
        const allBooks = responseJson.results;
        setBookList(allBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getAllBooks();
  }, []);

  const getBookInfo = async (title) => {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${title}`
      );
      const individualBook = await response.json();
      setSingleBookDetails(individualBook);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <ul>
      {bookList.map((singleBook) => (
        <li
          key={singleBook.title}
          onClick={(event) => {
            const bookName = event.target.innerText;
            getBookInfo(bookName);
          }}
        >
          {singleBook.title}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
