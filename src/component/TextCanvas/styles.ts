import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  btnContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dedede',
  },
  warper: {
    height: height,
    width: width,
  },
  yView: {
    height: height,
    width: 1,
    backgroundColor: 'red',
    position: 'absolute',
  },
  xView: {
    height: 1,
    width: width,
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: height / 2 - 1,
  },
});
