import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Component = () => {
  const { navigate } = useNavigation();

  const screens = [
    'Context',
    'Image',
    'ScrollView',
    'FlatList',
    'SectionList',
    'Touchable',
    'TextInput',
    'StatusBar',
    'ActivityIndicator',
    'Switch',
    'Alert',
    'AppState',
    'AsyncStorage',
    'SafeAreaView',
    'Progress',
    'Animation',
    'Navigation',
  ];

  return (
    <>
      {screens.map(screen => (
        <Button key={screen} title={screen} onPress={() => navigate(screen)} />
      ))}
    </>
  );
};

export default Component;
