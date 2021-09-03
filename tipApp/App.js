import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home'
import Menu from './components/Menu';
import TipView from './components/TipView';
import AddTip from './components/AddTip';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Menu"
          component = {Menu}
          styles = {styles.text}
        />
        <Stack.Screen
          name = "TipView"
          component = {TipView}
        />
          <Stack.Screen
          name = "Home"
          component = {Home}
        />
        <Stack.Screen
          name = "AddTip"
          component = {AddTip}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems : 'center'
  },
  text: {
    fontSize: 40,
    fontWeight : 'bold',
    margin: 10
  }
});
