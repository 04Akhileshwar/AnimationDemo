import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import CustomImages from '../../component/CustomImages';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomImages />
    </View>
  );
};
