import React from 'react';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import Table from '../components/Table/Table';

function Home() {
  return (
    <div>
      <Header />
      <Table />
      <Pagination />
    </div>
  );
}

export default Home;
