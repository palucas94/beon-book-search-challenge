/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import BooksContext from '../context/BooksContext';

export default function BooksProvider({ children }) {
  const contextValue = useMemo(() => ({}), []);

  return (
    <BooksContext.Provider value={contextValue}>{ children }</BooksContext.Provider>
  );
}
