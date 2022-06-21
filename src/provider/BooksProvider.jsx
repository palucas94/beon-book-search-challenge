/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import BooksContext from '../context/BooksContext';
import { fetchAllBooks, fetchFilteredBooks } from '../services/booksAPI';

const initialInputValues = {
  searchInput: '',
  minYear: '',
  maxYear: '',
};

const booksPerPage = 10;

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [currentPageBooks, setCurrentPageBooks] = useState([]);
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(books.length / booksPerPage);
  const startIndex = currentPage * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  const inputHandler = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const setCurrentBooks = () => {
    const currentBooks = books.slice(startIndex, endIndex);
    setCurrentPageBooks(currentBooks);
  };

  const searchBooks = async () => {
    const filteredBooks = await fetchFilteredBooks(inputValues);
    setBooks(filteredBooks);
    setCurrentPage(0);
  };

  useEffect(() => {
    setCurrentBooks();
  }, [currentPage, books]);

  useEffect(() => {
    async function getBooks() {
      const allBooks = await fetchAllBooks();
      const currentBooks = allBooks.slice(startIndex, endIndex);
      setBooks(allBooks);
      setCurrentPageBooks(currentBooks);
    }
    getBooks();
  }, []);

  const contextValue = useMemo(() => ({
    books,
    pages,
    inputValues,
    currentPageBooks,
    inputHandler,
    searchBooks,
    setCurrentPage,
  }));

  return (
    <BooksContext.Provider value={contextValue}>{ children }</BooksContext.Provider>
  );
}
