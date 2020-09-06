import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeSecreen from "../screens/HomeSecreen";
import CategoryDetailSecreen from "../screens/CategoryDetailSecreen";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../const/colors";

const Stack = createStackNavigator();
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          statusBar: {
            backgroundColor: "white",
            style: "white",
          },
        }}
      >
        <Stack.Screen component={HomeSecreen} name="Home"></Stack.Screen>
        <Stack.Screen
          component={CategoryDetailSecreen}
          name="catDetail"
          options={({ route }) => ({ title: route.params.name })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
