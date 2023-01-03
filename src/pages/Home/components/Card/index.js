import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useMemo, useReducer} from 'react';
import {styles} from './styles';
import Estrelas from '../../../../componentes/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

const Card = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, selecionadoDispatch] = useReducer(state => {
    return !state;
  }, false);

  const distanciaTexto = useMemo(() => {
    console.log('distancia memo');
    return distanciaEmMetros(distancia);
  }, [distancia]);

  return (
    <TouchableOpacity onPress={selecionadoDispatch} style={styles.container}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
