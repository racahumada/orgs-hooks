import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {createStyles} from './styles';
import Estrela from '../Estrela';

const Estrelas = ({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) => {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const styles = createStyles();

  const RenderEstrelas = () => {
    let listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={`estrelas-${i}`}
          grande={grande}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
    </View>
  );
};

export default Estrelas;
