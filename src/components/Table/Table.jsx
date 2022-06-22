import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';
import '../../styles/Table.css';

function Table() {
  const { currentPageBooks } = useContext(BooksContext);

  const showBookDetails = (title) => {
    const id = `${title}-details`;
    const div = document.getElementById(id);

    div.classList.toggle('show-book-details');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Livro</th>
          <th>Autor</th>
          <th>Idioma</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {currentPageBooks.map(({
          title, author, language, year, pages, country, link,
        }) => (
          <>
            <tr key={title + year}>
              <td>{title}</td>
              <td>{author}</td>
              <td>{language}</td>
              <td>{year}</td>
              <td>
                <button
                  type="button"
                  onClick={() => showBookDetails(title)}
                  className="table__details-button"
                >
                  Detalhes
                </button>
              </td>
            </tr>
            <tr
              id={`${title}-details`}
              className="table__book-details"
              key={link}
            >
              <td>{`Pages: ${pages}`}</td>
              <td>{`Country: ${country}`}</td>
              <td>
                Link:
                {' '}
                <a href={link} target="_blank" rel="noreferrer">{link}</a>
              </td>
              {/* <img src={imageLink} alt={title} /> */}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
