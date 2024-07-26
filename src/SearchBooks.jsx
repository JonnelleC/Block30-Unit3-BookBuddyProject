import { useState } from 'react';

const SearchBook = () => {
  const [titleInput, setTitleInput] = useState('');
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setError(null);
    setBookDetails(null);

    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const books = data.results;
      const foundBook = books.find(book => book.title.toLowerCase() === titleInput.toLowerCase());

      if (foundBook) {
        const bookResponse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${foundBook.id}`);
        if (!bookResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const bookDetails = await bookResponse.json();
        setBookDetails(bookDetails);
      } else {
        setError('Book not found.');
      }
    } catch (error) {
      setError('Error fetching book details. Please try again later.');
      console.error('Error fetching book details:', error);
    }
  };

  return (
    <div>
      <h1>Search for a Book</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter book title"
          value={titleInput}
          onChange={(event) => setTitleInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {bookDetails && (
        <div>
          <h2>{bookDetails.title}</h2>
          <p><strong>Author:</strong> {bookDetails.author}</p>
          <p><strong>Details:</strong> {bookDetails.details}</p>
          <img src={bookDetails.coverimage} alt={bookDetails.title} />
        </div>
      )}
    </div>
  );
};

export default SearchBook;