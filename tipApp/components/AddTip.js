/* 
Make a post request to the API to add a new food item using react native.
*/

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  Platform,
  Dimensions,
  BackAndroid,
  Linking,
} from 'react-native';

import axios from "axios";

export default function AddTip({ navigation}){
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [image, setImage] = useState('');
    const [origen, setOrigen] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [foodDescription, setFoodDescription] = useState('');

    const makeAxiosPostRequest = () => { 
      //https://my-restaurant-menu-app-equisde.herokuapp.com/
      axios.post('https://my-restaurant-menu-app-equisde.herokuapp.com/', {
        name: name,
        unit_price: unitPrice,
        image: image,
        origen: origen,
        ingredients: ingredients,
        food_description: foodDescription
      })
      .then(res => { 
        console.log("SUCCES: ", res)
        Alert.alert('Success', 'Food item created successfully');
      })
      .catch(error => {
        Alert.alert('Error', 'Error creating food item');
        console.log("Error: ", error);
      });
    };

    //Function needed for the stack navigator

    const onPressHandler = () => {
      navigation.navigate("Home");
    };

  return (
    <View style={styles.container}>
      <TextInput
          style={styles.searchInputStyle}
          value={name}
          placeholder="Insert Name"
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setName(text); }}
        />
      <TextInput
          style={styles.searchInputStyle}
          value={unitPrice}
          placeholder="Insert Price"
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setUnitPrice(text); }}
        />
      <TextInput
          style={styles.searchInputStyle}
          value={image}
          placeholder="Insert Image URL"
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setImage(text); }}
        />
      <TextInput
          style={styles.searchInputStyle}
          value={origen}
          placeholder="Insert Country of Origin"
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setOrigen(text); }}
        />
      <TextInput
          style={styles.searchInputStyle}
          value={ingredients}
          placeholder="Insert Ingredients"
          numberOfLines = {2}
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setIngredients(text); }}
      />

      <TextInput
          style={styles.searchInputStyleDescription}
          value={foodDescription}
          numberOfLines={10}
          multiline={true}
          placeholder="Insert Food Description"
          underlineColorAndroid="transparent"
          onChangeText={(text) => { setFoodDescription(text); }}
      />


        <Button
          onPress={makeAxiosPostRequest}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressHandler}
          title="Go to main"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        
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
  textAreaContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 5
  },
  foodImage: {
    width: 200,
    height: 200,
  },
  foodNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 20,
    color: '#333333',
    flex: 1,
  },
  AddTipButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    padding: 10,
  },
  AddTipButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  searchInputStyle: {
    height: 50,
    width: 300,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  searchInputStyleDescription: {
    height: 100,
    width: 300,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  addButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    alignSelf: "center",
  },
});