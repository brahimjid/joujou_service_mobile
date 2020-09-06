import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "../const/api";
import CategoriesDetails from "../components/CategoriesDetails";

export default function CategoryDetailSecreen({ route, navigation }) {
  const { catId } = route.params;
  const { name } = route.params;
  const [items, setItems] = useState([[]]);
  useEffect(() => {
    // console.log("usedd");
    axios
      .get("/categories/" + name)
      .then((res) => {
        setItems(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <View style={styles.conatiner}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id + "js"}
        numColumns={1}
        renderItem={({ item }) => (
          <CategoriesDetails
            photo={item.photo_1}
            prix={item.prix}
            name={item.nom}
            key={item.id}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
