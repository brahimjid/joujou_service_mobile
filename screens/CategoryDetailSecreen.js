import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "../const/api";
import CategoriesDetails from "../components/CategoriesDetails";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../const/colors";

export default function CategoryDetailSecreen({ route, navigation }) {
  const { catId } = route.params;
  const { name } = route.params;
  const [items, setItems] = useState([[]]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("usedd");
    setLoading(true);
    axios
      .get("/categories/" + name)
      .then((res) => {
        // console.log(res.data.categ);
        setItems(res.data.products);
        setLoading(false);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((err) => setLoading(false));
  }, []);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
          //backgroundColor: "#939799",
        }}
      >
        <Spinner visible={true} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.conatiner}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id + "js"}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoriesDetails
            photo={item.photo_1}
            prix={item.prix + " MRU"}
            name={item.nom}
            key={item.id}
            showItem={() =>
              navigation.navigate("Details", {
                slug: item.slug,
              })
            }
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
