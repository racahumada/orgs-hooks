import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Estrelas from '../../../../componentes/Estrelas';

const Card = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSelecionado(!selecionado)}
      style={styles.container}>
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
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
