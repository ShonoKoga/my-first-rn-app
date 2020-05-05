import React from 'react';
import {
  Top,
  Context,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Touchable,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Switch,
  Alert,
  AppState,
  AsyncStorage,
  SafeAreaView,
  Progress,
  Animation,
  Navigation,
} from './screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Component = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Top">
        <Stack.Screen name="Top" component={Top} />
        <Stack.Screen name="Context" component={Context} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="ScrollView" component={ScrollView} />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="SectionList" component={SectionList} />
        <Stack.Screen name="Touchable" component={Touchable} />
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="StatusBar" component={StatusBar} />
        <Stack.Screen name="ActivityIndicator" component={ActivityIndicator} />
        <Stack.Screen name="Switch" component={Switch} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="AppState" component={AppState} />
        <Stack.Screen name="AsyncStorage" component={AsyncStorage} />
        <Stack.Screen name="SafeAreaView" component={SafeAreaView} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Component;
