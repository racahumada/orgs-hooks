import {View, Text, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {carregaTopo} from '../../../../services/loadData';
import logo from '../../../../assets/logo.png';

import {styles} from './styles';

const Topo = () => {
  const [mocks, setMocks] = useState(null);

  const atualizaTopo = () => {
    const res = carregaTopo();
    console.log(res);
    setMocks(res);
  };

  useLayoutEffect(() => {
    atualizaTopo();
  }, []);

  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.imagem} />
      <Text style={styles.boasvindas}>{mocks?.boasVindas}</Text>
      <Text style={styles.legenda}>{mocks?.legenda}</Text>
    </View>
  );
};

export default Topo;
