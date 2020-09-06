import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../const/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: "25%",
    marginVertical: 10,
  },
});
