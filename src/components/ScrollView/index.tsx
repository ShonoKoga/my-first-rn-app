import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  block: {
    width: '100%',
    height: 400,
  },
});

const Component = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.block, { backgroundColor: 'red' }]}>RED</Text>
      <Text style={[styles.block, { backgroundColor: 'green' }]}>GREEN</Text>
      <Text style={[styles.block, { backgroundColor: 'blue' }]}>BLUE</Text>
      <Text style={[styles.block, { backgroundColor: 'yellow' }]}>YELLOW</Text>
    </ScrollView>
  );
};

export default Component;
