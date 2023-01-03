import {Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Card from '../Card';
import useProdutores from '../../../../hooks /useProdutores';

const Produtores = ({header: Header}) => {
  const [titulo, listaProdutores] = useProdutores();

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
