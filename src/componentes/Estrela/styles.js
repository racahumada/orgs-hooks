import {StyleSheet} from 'react-native';

export const createStyles = grande =>
  StyleSheet.create({
    button: {marginRight: 2},
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });
