import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';

function Pagination() {
  const { pages, setCurrentPage } = useContext(BooksContext);

  return (
    <div>
      { Array.from(Array(pages), (item, index) => (
        <button
          key={item}
          type="button"
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
