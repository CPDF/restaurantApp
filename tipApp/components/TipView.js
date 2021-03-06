
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function TipView( { navigation } ) {
    const onPressHandler = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Food search
            </Text>
            <Pressable
                onPress = {onPressHandler}
                style = {({pressed}) => ({backgroundColor: pressed ? '#ddd' : '0f0'})}
            >
                <Text> Go back to Home </Text>
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