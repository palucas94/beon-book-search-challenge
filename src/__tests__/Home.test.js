/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import BooksProvider from '../provider/BooksProvider';

describe('Testa a renderização dos elementos na página Home - endpoint /books', () => {
  it('Os elementos do componente SearchBar foram renderizados corretamente', () => {
    const screen = render(<Home />, { wrapper: BooksProvider });
    screen.getByRole('img', { name: /beon/i });
    screen.getByRole('textbox');
    screen.getByRole('button', { name: /buscar/i });
  });

  it('Os elementos do componente FilterBar foram renderizados corretamente', () => {
    const screen = render(<Home />, { wrapper: BooksProvider });
    screen.getByText(/filtrar ano da publicação/i);
    screen.getByTestId('input-minYear');
    screen.getByTestId('input-maxYear');
    screen.getByText(/resultados encontrados/i);
  });

  it('O cabeçalho da tabela de livros foi renderizado corretamente', () => {
    const screen = render(<Home />, { wrapper: BooksProvider });
    screen.getByRole('columnheader', { name: /livro/i });
    screen.getByRole('columnheader', { name: /autor/i });
    screen.getByRole('columnheader', { name: /idioma/i });
    screen.getByRole('columnheader', { name: /ano/i });
    screen.getByRole('columnheader', { name: /ações/i });
  });
});
