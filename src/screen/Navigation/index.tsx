import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  const { dispatch } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(DrawerActions.openDrawer());
        }}
      >
        <Text>OPEN Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
function Sub() {
  const { dispatch } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(DrawerActions.openDrawer());
        }}
      >
        <Text>OPEN Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

const Component = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Sub" component={Sub} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Component;
