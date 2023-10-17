import React from 'react';
import {View} from 'react-native';
import {TextCanvas} from '../../component/TextCanvas';
import {styles} from './styles';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextCanvas />
    </View>
  );
};
