import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "../const/api";
import colors from "../const/colors";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Spinner from "react-native-loading-spinner-overlay";

export default function HomeSecreen(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/categories/")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
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
        }}
      >
        <Spinner visible={true} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.conatiner}>
      <Header />
      <View
        style={{
          marginTop: 50,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Nos categories
        </Text>
        <View
          style={{
            height: 2,
            marginTop: 5,
            borderBottomWidth: 4,
            borderColor: "red",
            width: "33%",
            marginLeft: "33%",
          }}
        />
      </View>
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
  ca: {
    height: "15%",
    width: "20%",
    elevation: 4,
    borderRadius: 10,
    borderColor: "white",
    overflow: "hidden",
  },
});
