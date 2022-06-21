import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';

function FilterBar() {
  const { books, inputValues: { minYear, maxYear }, inputHandler } = useContext(BooksContext);

  return (
    <div style={{ display: 'flex' }}>
      <p>Filtrar ano da publicação:</p>

      <input
        type="number"
        placeholder="Min"
        onChange={inputHandler}
        name="minYear"
        value={minYear}
      />

      <p>até</p>

      <input
        type="number"
        placeholder="Max"
        onChange={inputHandler}
        name="maxYear"
        value={maxYear}
      />

      <p>{`${books.length} resultados encontrados`}</p>
    </div>
  );
}

export default FilterBar;
