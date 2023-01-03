import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Card from '../Card';
import useProdutores from '../../../../hooks /useProdutores';

const Produtores = ({header: Header}) => {
  const [titulo, listaProdutores] = useProdutores();
  const [listaOrdenada, setListaOrdenada] = useState([]);

  useEffect(() => {
    setListaOrdenada(listaProdutores);
  }, [listaProdutores]);

  const ordenarProdutores = () => {
    let newList = [...listaOrdenada].sort((a, b) => a.distancia - b.distancia);
    setListaOrdenada(newList);
  };

  const TopoLista = () => {
    return (
      <>
        <Header />
        <View style={styles.viewTitulo}>
          <Text style={styles.titulo}>{titulo}</Text>
          <TouchableOpacity onPress={ordenarProdutores} style={styles.btnSort}>
            <Text>Ordenar</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <FlatList
      data={listaOrdenada}
      ListHeaderComponent={() => <TopoLista />}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Card {...item} />}
    />
  );
};

export default Produtores;
