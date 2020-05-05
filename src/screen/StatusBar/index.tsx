import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const Component = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default Component;
