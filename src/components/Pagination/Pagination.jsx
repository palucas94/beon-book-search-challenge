import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';
import '../../styles/Pagination.css';

function Pagination() {
  const { pages, currentPage, setCurrentPage } = useContext(BooksContext);

  return (
    <div className="pagination__container">
      <button
        type="button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <div className="pagination__arrow-left" />
      </button>

      { Array.from(Array(pages), (item, index) => (
        <button
          key={Math.random()}
          type="button"
          onClick={() => setCurrentPage(index)}
          className={index === currentPage ? 'pagination__button pagination__current-page' : 'pagination__button'}
        >
          {index + 1}
        </button>
      ))}

      <button
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages - 1}
      >
        <div className="pagination__arrow-right" />
      </button>
    </div>
  );
}

export default Pagination;
