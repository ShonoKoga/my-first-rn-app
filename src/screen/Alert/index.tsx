import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const useErrorModalDialog = (initialErrors: Array<string>) => {
  const [errors, setErrors] = React.useState(initialErrors);
  React.useEffect(() => {
    if (0 < errors.length) {
      Alert.alert(errors[0], undefined, [
        {
          text: 'OK',
          onPress: () => {
            setErrors(errors.filter((_, index) => index !== 0));
          },
        },
      ]);
    }
  }, [errors]);
  function addError(newError: string) {
    setErrors([...errors, newError]);
  }
  return addError;
};

const Component = () => {
  const addError = useErrorModalDialog(['1st', '2nd', '3rd']);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => addError('new Error')}>
        <Text>Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
