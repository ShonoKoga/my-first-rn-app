import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 210,
  },
  label: {
    color: 'white',
    fontSize: 64,
  },
});

const Component = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./logo.jpeg')} style={styles.image}>
        <Text style={styles.label}>メタモン</Text>
      </ImageBackground>
    </View>
  );
};

export default Component;
