import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
  circle: {
    minWidth: 120,
    minHeight: 40,
    backgroundColor: '#b58df1',
    cursor: 'grab',
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
