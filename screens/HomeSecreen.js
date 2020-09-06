import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { Text } from "react-native-elements";
import axios from "../const/api";
import colors from "../const/colors";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";

export default function HomeSecreen(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/categories/")
      .then((res) => {
        //  console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.conatiner}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <CategoryItem
            photo={item.photo}
            titre={item.titre}
            categoryDetail={() => {
              props.navigation.navigate("catDetail", {
                catId: item.id,
                name: item.titre,
              });
              //Alert.alert("id: " + item.id);
            }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.bgwhite,
  },
});
