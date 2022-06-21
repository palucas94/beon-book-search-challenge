import React, { useContext } from 'react';
import BooksContext from '../../context/BooksContext';

function Table() {
  const { books } = useContext(BooksContext);

  return (
    <table>
      <tr>
        <th>Livro</th>
        <th>Autor</th>
        <th>Idioma</th>
        <th>Ano</th>
        <th>Ações</th>
      </tr>

      {books.map(({
        title, author, language, year,
      }) => (
        <tr>
          <td>{title}</td>
          <td>{author}</td>
          <td>{language}</td>
          <td>{year}</td>
          <td>Detalhes</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
