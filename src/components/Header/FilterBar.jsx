import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';

function FilterBar() {
  const { books, inputValues: { minYear, maxYear }, inputHandler } = useContext(BooksContext);

  return (
    <div className="header__filterbar-container">
      <div className="header__filterbar-wrapper">

        <p className="header__filterbar-text">Filtrar ano da publicação:</p>

        <input
          type="number"
          placeholder="min"
          onChange={inputHandler}
          name="minYear"
          value={minYear}
          className="header__filterbar-input"
          data-testid="input-minYear"
        />

        <p className="header__filterbar-text">até</p>

        <input
          type="number"
          placeholder="max"
          onChange={inputHandler}
          name="maxYear"
          value={maxYear}
          className="header__filterbar-input"
          data-testid="input-maxYear"
        />
      </div>

      <p className="header__filterbar-text">{`${books.length} resultados encontrados`}</p>
    </div>
  );
}

export default FilterBar;
