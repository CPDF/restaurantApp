import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import{ createAppContainer } from 'react-navigation'
import Home from '../components/Home'

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails:{
      screen: ReviewDetails
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);