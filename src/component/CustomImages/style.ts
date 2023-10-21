import {Dimensions, Platform, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    padding: 10,
  },
  textInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 10,
  },

  imgContainer: {
    height: 200,
    width: width / 2 - 20,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 4,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: Platform.OS === 'android' ? 0 : 0.4,
  },
});
