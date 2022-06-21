import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';

function Table() {
  const { currentPageBooks } = useContext(BooksContext);

  const showBookDetails = (title) => {
    const id = `${title}-details`;
    const div = document.getElementById(id);

    div.classList.toggle('show-details');
  };

  return (
    <table>
      <tr>
        <th>Livro</th>
        <th>Autor</th>
        <th>Idioma</th>
        <th>Ano</th>
        <th>Ações</th>
      </tr>

      {currentPageBooks.map(({
        title, author, language, year, pages, country, link, imageLink,
      }) => (
        <>
          <tr key={title + year}>
            <td>{title}</td>
            <td>{author}</td>
            <td>{language}</td>
            <td>{year}</td>
            <td>
              <button type="button" onClick={() => showBookDetails(title)}>Detalhes</button>
            </td>
          </tr>
          <div id={`${title}-details`} className="book-details">
            <p>{`Pages: ${pages}`}</p>
            <p>{`Country: ${country}`}</p>
            <p>
              Link:
              {' '}
              <a href={link}>{link}</a>
            </p>
            <img src={imageLink} alt={title} />
          </div>
        </>
      ))}
    </table>
  );
}

export default Table;
