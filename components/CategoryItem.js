import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const CategoryItem = (props) => {
  return (
    <View>
      <View style={styles.categoryItem}>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={props.categoryDetail}
        >
          <ImageBackground
            source={{ uri: props.photo }}
            style={styles.img}
          ></ImageBackground>
        </TouchableHighlight>
      </View>
      <View style={styles.catTitle}>
        <Text style={styles.categoryName}>{props.titre}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2.5,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  categoriesContainer: {
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
    padding: 0,
    backgroundColor: "green",
  },

  img: {
    flex: 1,
    width: Dimensions.get("window").width / 3.5,
    height: Dimensions.get("window").height / 10,
    resizeMode: "cover",
    justifyContent: "center",
  },
  catTitle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryName: {
    flex: 1,
    flexWrap: "wrap",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
});
