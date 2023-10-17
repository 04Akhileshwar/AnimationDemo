import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {CustomModal} from '../CustomModal';
import {height, styles, width} from './styles';

export const TextCanvas: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [saveTxtData, setSaveTxtData] = useState<string[]>([]);

  const pressed = useSharedValue(false);

  const animatedStylesCross = useAnimatedStyle(() => ({
    opacity: pressed.value ? 1 : 0,
  }));

  const onSubmit = useCallback(
    (value: string) => {
      setCurrentText(value);
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  const onSave = useCallback(() => {
    const lclData = [...saveTxtData];
    lclData.push(currentText);
    setSaveTxtData(lclData);
    setCurrentText('');
  }, [currentText, saveTxtData]);

  return (
    <>
      <TouchableOpacity style={styles.btnContainer} onPress={onSave}>
        <Text>{'Save'}</Text>
      </TouchableOpacity>

      <GestureHandlerRootView style={styles.container}>
        <View style={styles.warper}>
          <ReactNativeZoomableView
            maxZoom={30}
            contentWidth={width - 20}
            contentHeight={height - 20}
            onPanResponderGrant={() => (pressed.value = true)}
            onPanResponderEnd={() => (pressed.value = false)}>
            <Text>{currentText}</Text>
          </ReactNativeZoomableView>
        </View>

        <Animated.View style={[styles.xView, animatedStylesCross]} />
        <Animated.View style={[styles.yView, animatedStylesCross]} />
      </GestureHandlerRootView>
      <CustomModal isOpen={isOpen} onSubmit={onSubmit} />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setIsOpen(!isOpen)}>
        <Text>{'Text'}</Text>
      </TouchableOpacity>
    </>
  );
};
