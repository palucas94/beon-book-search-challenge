import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';
import beonLogo from '../../images/beon-logo-roxo.png';
import '../../styles/Header.css';

function SearchBar() {
  const { inputValues: { searchInput }, inputHandler, searchBooks } = useContext(BooksContext);

  return (
    <div className="header__searchbar-container">
      <img src={beonLogo} alt="beon" className="header__searchbar-img" />

      <input
        type="text"
        placeholder="Busque livros pelo título, autor, ou idioma"
        onChange={inputHandler}
        name="searchInput"
        value={searchInput}
        className="header__searchbar-input"
      />

      <button
        type="button"
        onClick={searchBooks}
        className="header__searchbar-button"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
