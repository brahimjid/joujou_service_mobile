import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Card, Image } from "react-native-elements";
import colors from "../const/colors";
import axios from "../const/api";

const CategoryItem = (props) => {
  return (
    <View style={styles.categoryItem}>
      <TouchableHighlight
        underlayColor={colors.bgwhite}
        onPress={props.categoryDetail}
      >
        <View style={styles.categoriesContainer}>
          <Card containerStyle={styles.card}>
            <Image
              style={styles.img}
              resizeMode="contain"
              source={{ uri: `${axios.defaults.baseURL}${props.photo}` }}
              // source={require("../assets/case.jpg")}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.imgContainer}>
              <View style={styles.detail}>
                <Text style={styles.categoryName}>{props.name}</Text>
                <Text style={styles.categoryPrice}>{props.prix} MRU</Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoriesContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    //borderRadius: 10,
    borderColor: colors.bgwhite,
    // backgroundColor: "#F6F6F6",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 0.5,
  },
  img: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5.5,
  },
  imgContainer: {
    flexDirection: "row",
  },
  categoryName: {
    marginTop: 10,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    paddingTop: 5,
    //fontWeight: "bold",
    textAlign: "center",
  },
  categoryPrice: {
    marginTop: 10,
    flex: 1,
    flexWrap: "wrap",
    // flexDirection: "column",
    //paddingTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  detail: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
