import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import colors from "../const/colors";
import { Image } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.cnt}>
      <Image
        source={require("../assets/poster.png")}
        style={styles.img}
        resizeMode="stretch"
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cnt: {
    width: "100%",
    height: "19%",
    //marginTop: 1,
  },

  img: {
    // backgroundColor: colors.primary,
    height: "100%",
    width: "100%",
    // marginVertical: 10,
  },
});
