/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import BooksContext from '../context/BooksContext';
import { fetchAllBooks, fetchFilteredBooks } from '../services/booksAPI';

const initialInputValues = {
  searchInput: '',
  minYear: '',
  maxYear: '',
};

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [inputValues, setInputValues] = useState(initialInputValues);

  const inputHandler = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const searchBooks = async () => {
    const filteredBooks = await fetchFilteredBooks(inputValues);
    setBooks(filteredBooks);
  };

  useEffect(() => {
    async function getBooks() {
      const allBooks = await fetchAllBooks();
      setBooks(allBooks);
    }
    getBooks();
  }, []);

  const contextValue = useMemo(() => ({
    books,
    inputValues,
    inputHandler,
    searchBooks,
  }));

  return (
    <BooksContext.Provider value={contextValue}>{ children }</BooksContext.Provider>
  );
}
