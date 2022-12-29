import React from 'react';
import Topo from './components/Topo';
import Produtores from './components/Produtores';

const Home = () => {
  return (
    <>
      <Produtores header={Topo} />
    </>
  );
};

export default Home;
