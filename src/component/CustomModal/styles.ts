import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  input: {
    height: 60,
    width: '95%',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7000880',
    paddingHorizontal: 8,
  },
});
