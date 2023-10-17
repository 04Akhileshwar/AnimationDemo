import React, {useCallback, useMemo, useState} from 'react';
import {Modal, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ICustomModalProps {
  isOpen: boolean;
  onSubmit: (text: string) => void;
}

export const CustomModal: React.FC<ICustomModalProps> = ({
  isOpen,
  onSubmit,
}) => {
  const [currentText, setCurrentText] = useState<string>('');

  const onSave = useCallback(() => {
    onSubmit(currentText);
    setCurrentText('');
  }, [currentText, onSubmit]);

  const onClear = useCallback(() => {
    setCurrentText('');
  }, []);

  const headerView = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <Icon name="close" size={20} color="#900" onPress={onSave} />
        <Icon name="trash" size={20} color="#900" onPress={onClear} />
        <Icon name="check" size={20} color="#900" onPress={onSave} />
      </View>
    );
  }, [onClear, onSave]);

  return (
    <Modal visible={isOpen} onRequestClose={onSave}>
      <View style={styles.container}>
        {headerView}
        <TextInput
          style={styles.input}
          onChangeText={value => setCurrentText(value)}
          value={currentText}
          placeholder="Enter the Text"
          keyboardType="default"
        />
      </View>
    </Modal>
  );
};
