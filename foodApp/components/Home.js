
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import FoodSearch from './FoodSearch';


const Stack = createStackNavigator();

export default function Home( { navigation }) {

    const onPressHandler_screen_menu = () => {
        navigation.navigate('Menu')
    }

    const onPressHandler_screen_search = () => {
        navigation.navigate('FoodSearch')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome - This is the home page
            </Text>
            <Pressable
                onPress = {onPressHandler_screen_menu}
                style = {({pressed}) => ({backgroundColor: pressed ? '#ddd' : '0f0'})}
            >
                <Text> Go to Menu </Text>
            </Pressable>
            <Pressable
                onPress = {onPressHandler_screen_search}
                style = {({pressed}) => ({backgroundColor: pressed ? '#ddd' : '0f0'})}
            >
                <Text> Go to Search </Text>
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
text: {
    fontSize: 40,
    fontWeight : 'bold',
    margin: 10
    }
})