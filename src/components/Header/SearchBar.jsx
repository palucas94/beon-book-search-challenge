import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';
import beonLogo from '../../images/beon-logo-roxo.png';

function SearchBar() {
  const { inputValues: { searchInput }, inputHandler, searchBooks } = useContext(BooksContext);

  return (
    <div>
      <img src={beonLogo} alt="beon" />

      <input
        type="text"
        placeholder="Busque livros pelo título, autor, ou idioma"
        onChange={inputHandler}
        name="searchInput"
        value={searchInput}
      />

      <button
        type="button"
        onClick={searchBooks}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
