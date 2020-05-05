import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 256,
  },
});

const Component = () => {
  return (
    <View style={styles.container}>
      <ProgressView style={styles.progressBar} progress={0.5} />
    </View>
  );
};

export default Component;
