import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Image } from "react-native-elements";
import colors from "../const/colors";

const CategoryItem = (props) => {
  return (
    <View style={styles.categoryItem}>
      <TouchableHighlight underlayColor={"none"} onPress={props.showItem}>
        <View style={styles.categoriesContainer}>
          <View style={styles.card}>
            <Image
              style={styles.img}
              resizeMode="contain"
              source={{ uri: props.photo }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.imgContainer}>
              <View style={styles.detail}>
                <Text style={styles.categoryName}>{props.name}</Text>

                <Text style={styles.categoryPrice}>{props.prix}</Text>
              </View>
            </View>
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
    justifyContent: "center",
    overflow: "hidden",
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // marginLeft: 25,
  },
  card: {
    borderColor: colors.bgwhite,
    borderWidth: 1,
    backgroundColor: "#FFF",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
    marginVertical: 20,
  },
  imgContainer: {
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  img: {
    width: Dimensions.get("window").width / 2.2,
    height: Dimensions.get("window").height / 6.2,
    marginTop: 2,
  },

  categoryName: {
    marginTop: 5,
    paddingTop: 5,
    textAlign: "center",
  },
  categoryPrice: {
    paddingVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  detail: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
