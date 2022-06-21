/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import BooksContext from '../context/BooksContext';
import fetchAllBooks from '../services/booksAPI';

export default function BooksProvider({ children }) {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const books = await fetchAllBooks();
      setAllBooks(books);
    }
    getBooks();
  }, []);

  const contextValue = useMemo(() => ({ allBooks }));

  return (
    <BooksContext.Provider value={contextValue}>{ children }</BooksContext.Provider>
  );
}
