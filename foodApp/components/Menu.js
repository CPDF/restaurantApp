import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
  Button,
  Pressable,
  Image,
  ScrollView,
} from "react-native";


import { createStackNavigator } from "@react-navigation/stack";

import axios from 'axios'
import filter from 'lodash.filter';

import { mockFoodData } from "./MockData/MockMenu";

const Stack = createStackNavigator();

export default function Menu({ navigation }) {
    // isLoading state variable is going to have a boolean value of false by default. Its purpose is to display a loading indicator when the data is being fetched from the API endpoint.
    const [isLoading, setIsLoading] = useState(false);
    const [foodData, setFoodData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')

    const onPressHandler = () => {
      navigation.navigate("Home");
    };


    useEffect(() => {
        fetchData();
        return () => {

        }
    }, []);

    const fetchData = () => {
      const apiURL = 'http://127.0.0.1:8000/'
      fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
      }).catch((error) => {
        console.error(error);
      })
     };

     const searchFilter = (text) => {
       if(text){
         const newData = masterData.filter((item) => {
          const itemData = item.name ? item.name.toUpperCase(): ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        })
        setFilteredData(newData);
        setSearch(text);
       } else {
         setFilteredData(masterData);
         setSearch(text);
       }
     }
    
     const ItemView = ({item}) => {
       return (
          <View style = {styles.food}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.foodIngredients}>{item.ingredients.toString()}</Text>
          <Image
              source={{ uri: item.image }}
              style={styles.foodImage}
              width={200}
              height={150}
              />

          </View>
       )
     }

  return (
    <View style={styles.container}>
        {console.log("API DATA: ", foodData)}
        <SafeAreaView>
        <Text style={styles.text}>Menu</Text>
        <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
            backgroundColor: pressed ? "#ddd" : "0f0",
        })}
        >
        <Text> Go back to home </Text>
        </Pressable>
        <TextInput
            style={styles.TextInputStyle}
            value={search}
            placeholder="Search Here"
            underlineColorAndroid="transparent"
            onChangeText={(text)=> searchFilter(text)}
          />
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {ItemView}
            />
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  food: {
    backgroundColor: "rgba(233,233,195, 0.7)",
    marginVertical: 10,
    width: "80%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  foodName: {
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "italic"
  },
  foodIngredients: {
    alignSelf: "center",
    fontSize: 18,
  },
  foodImage: {
    width: 200,
    height: 200,
    alignItems: "center",
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  }
});
