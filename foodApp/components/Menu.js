import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

import AnimatedLoader from "react-native-animated-loader";




export default function Menu({ navigation }) {

  // isLoading state variable is going to have a boolean value of false by default. Its purpose is to display a loading indicator when the data is being fetched from the API endpoint.
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [searchName, setSearchName] = useState('')
  const [searchIngredients, setSearchIngredients] = useState('')

  //Function needed for the stack navigator

  const onPressHandler = () => {
    navigation.navigate("Home");
  };


  useEffect(() => {
    fetchData();
    return () => {

    }
  }, []);

  // fetchData is a function that is called when the component is mounted.
  // will fetch data from backend and set the state of the component.

  const fetchData = () => {
    const apiURL = 'https://my-restaurant-menu-app-equisde.herokuapp.com/'
    //android: const apiURL = 'http://10.0.2.2:8000/'
    //local web: const apiURL = 'http://127.0.0.1:8000/'
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
        setIsLoaded(true);
      }).catch((error) => {
        console.error(error);
      })
  };


  //Filter for searching by name
  const searchFilterByName = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilteredData(newData);
      setSearchIngredients('');
      setSearchName(text);
    } else {
      setFilteredData(masterData);
      setSearchName(text);
    }
  }

  //Filter for searching by ingredients

  const searchFilterByIngredient = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.ingredients ? item.ingredients.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilteredData(newData);
      setSearchName('');
      setSearchIngredients(text);
    } else {
      setFilteredData(masterData);
      setSearchIngredients(text);
    }
  }

  const ItemView = ({ item }) => {
    return (
      <View style={styles.foodBox}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodIngredients}><Text style={styles.ingredientsTitle}>Ingredients: </Text>{item.ingredients.toString()}</Text>
        <Image
          source={{ uri: item.image }}
          style={styles.foodImage}
          width={200}
          height={150}
        />
        <Text style={styles.foodIngredients}><Text style={styles.descriptionTitle}>Description: </Text>{item.food_description.toString()}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.mainTitle}>Our Menu</Text>
        <TouchableOpacity>
        <Pressable
          onPress={onPressHandler}
        >
          <Text style={styles.goBackButton}>
            <Text style={styles.goBackButtonColor}>
              Go back to home.
            </Text>
          </Text>
        </Pressable>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInputStyle}
          value={searchName}
          placeholder="Search Here by Name"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilterByName(text)}
        />
        <TextInput
          style={styles.searchInputStyle}
          value={searchIngredients}
          placeholder="Search Here by Ingredients"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilterByIngredient(text)}
        />

        {isLoaded ? <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        /> : <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../assets/loading-spinner.json")}
          animationStyle={styles.lottie}
          speed={1}
        >
          <Text>Loading</Text>
        </AnimatedLoader>}


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
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  goBackButton: {
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

  orderBox: {},
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  foodBox: {
    backgroundColor: "rgba(233,233,195, 0.7)",
    marginVertical: 10,
    width: "100%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  foodName: {
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "italic"
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodIngredients: {
    alignSelf: "center",
    fontSize: 16,
  },
  foodImage: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  searchInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  lottie: {
    height: 200,
    width: 200,
  },
});
