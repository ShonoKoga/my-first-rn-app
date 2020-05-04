import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
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

const AnimatedProgressView = Animated.createAnimatedComponent(ProgressView);

const Component = () => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(progress, {
      toValue: 1,
      friction: 1,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedProgressView
        progress={progress}
        progressTintColor="blue"
        style={styles.progressBar}
      />
    </View>
  );
};

export default Component;
