import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';

import {carregaProdutores} from '../../../../services/loadData';
import Card from '../Card';

const Produtores = ({header: Header}) => {
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

  const TopoLista = () => {
    return (
      <>
        <Header />
        <Text style={styles.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={listaProdutores}
      ListHeaderComponent={() => <TopoLista />}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Card {...item} />}
    />
  );
};

export default Produtores;
