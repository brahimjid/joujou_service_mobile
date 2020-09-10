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
              resizeMode="center"
              source={{ uri: `${axios.defaults.baseURL}${props.photo}` }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </Card>
          <View style={styles.imgContainer}>
            <Text style={styles.categoryName}>{props.titre}</Text>
          </View>
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
    borderRadius: 10,
    borderColor: colors.bgwhite,
    // backgroundColor: "#F6F6F6",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  img: {
    width: Dimensions.get("window").width / 6,
    height: Dimensions.get("window").width / 5.5,
  },
  imgContainer: {
    flexDirection: "row",
  },
  categoryName: {
    marginTop: 10,
    flex: 1,
    flexWrap: "wrap",
    paddingTop: 5,
    textAlign: "center",
  },
});
