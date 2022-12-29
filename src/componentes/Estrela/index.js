import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';
import {createStyles} from './styles';

const Estrela = ({
  preenchida,
  onPress,
  desabilitada = true,
  grande = false,
}) => {
  const styles = createStyles(grande);
  const getImage = () => (preenchida ? estrela : estrelaCinza);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={desabilitada}
      style={styles.button}>
      <Image source={getImage()} style={styles.estrela} />
    </TouchableOpacity>
  );
};

export default Estrela;
