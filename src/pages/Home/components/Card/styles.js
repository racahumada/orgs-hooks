import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f6f6f6',
    borderRadius: 6,
    flexDirection: 'row',
    //Android
    elevation: 4,
    //iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    marginVertical: 16,
    marginLeft: 16,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
