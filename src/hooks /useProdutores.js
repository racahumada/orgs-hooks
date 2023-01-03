import {useState, useEffect} from 'react';

import {carregaProdutores} from '../services/loadData';

const useProdutores = () => {
  const [titulo, setTitulo] = useState('');
  const [listaProdutores, setListaProdutores] = useState([]);

  const atualizaProdutores = () => {
    const res = carregaProdutores();
    setTitulo(res.titulo);
    setListaProdutores(res.lista);
  };

  useEffect(() => {
    atualizaProdutores();
  }, []);

  return [titulo, listaProdutores];
};

export default useProdutores;
