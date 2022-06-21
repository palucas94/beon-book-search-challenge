/* eslint-disable no-param-reassign */
const BOOKS_API_URL = 'http://localhost:4000/books';

export const fetchAllBooks = async () => {
  const API_RESPONSE = await fetch(BOOKS_API_URL);
  const BOOKS = await API_RESPONSE.json();
  return BOOKS;
};

export const fetchFilteredBooks = async ({ searchInput, minYear, maxYear }) => {
  if (minYear === '') { minYear = -5000; }
  if (maxYear === '') { maxYear = 5000; }

  const API_RESPONSE = await fetch(
    `${BOOKS_API_URL}/?q=${searchInput}&year_gte=${minYear}&year_lte=${maxYear}`,
  );
  const BOOKS = await API_RESPONSE.json();
  return BOOKS;
};
