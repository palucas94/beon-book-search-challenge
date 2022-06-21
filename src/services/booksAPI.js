const BOOKS_API_URL = 'http://localhost:4000/books';

const fetchAllBooks = async () => {
  const API_RESPONSE = await fetch(BOOKS_API_URL);
  const BOOKS = await API_RESPONSE.json();
  return BOOKS;
};

export default fetchAllBooks;
