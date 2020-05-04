import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Component = () => {
  const [value, setValue] = React.useState(false);
  function onValueChange(newValue: boolean) {
    setValue(newValue);
  }
  return (
    <View style={styles.container}>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default Component;
