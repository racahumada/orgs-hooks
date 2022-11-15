import {View, Text, Image} from 'react-native';
import React from 'react';
import logo from '../../../../assets/logo.png';

import {styles} from './styles';
import topo from '../../../../mocks/topo';

const Topo = () => {
  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.imagem} />
      <Text style={styles.boasvindas}>{topo.boasVindas}</Text>
      <Text style={styles.legenda}>{topo.legenda}</Text>
    </View>
  );
};

export default Topo;
