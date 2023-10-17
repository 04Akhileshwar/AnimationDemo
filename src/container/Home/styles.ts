import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  yView: {
    height: height,
    width: 1,
    backgroundColor: 'red',
  },
  xView: {
    height: 1,
    width: width,
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: height / 2 - 1,
  },
});
