
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import TipView from './TipView';


const Stack = createStackNavigator();

export default function Home( { navigation } ) {

    const onPressHandler_screen_menu = () => {
        navigation.navigate('Menu')
    }

    const onPressHandler_screen_AddTip = () => {
        navigation.navigate('AddTip')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to restaurant
            </Text>
            <Pressable
                onPress = {onPressHandler_screen_menu}
                style = {({pressed}) => (
                    {backgroundColor: pressed ? '#ddd' : '0f0'}
                    )}
            >
                <Text style={styles.button}> Go to Menu </Text>
            </Pressable>
            <Pressable
                onPress = {onPressHandler_screen_AddTip}
                style = {({pressed}) => (
                    {backgroundColor: pressed ? '#ddd' : '0f0'}
                    )}
            >
                <Text style={styles.button}> Add a Food item </Text>
            </Pressable>        
            </View>
    )
  }


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems : 'center'
},
title: {
    fontSize: 20,
    fontWeight : 'bold',
    margin: 10
    },
button: {
    fontSize: 20,
    fontWeight : 'bold',
    margin: 10
    },
text: {
    fontSize: 40,
    fontWeight : 'bold',
    margin: 10
    }
})