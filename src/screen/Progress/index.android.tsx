import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 256,
  },
});

const Component = () => {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <View style={styles.wrapper}>
        <ProgressBar styleAttr="Horizontal" />
      </View>
      <View style={styles.wrapper}>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    </View>
  );
};

export default Component;
