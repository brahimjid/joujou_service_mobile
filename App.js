import React from "react";
import AppNavigator from "./naviigation/AppNavigator";
import { StyleSheet } from "react-native";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
