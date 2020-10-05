import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeSecreen from "../screens/HomeSecreen";
import CategoryDetailSecreen from "../screens/CategoryDetailSecreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../const/colors";
import { Button, StatusBar } from "react-native";
import { Icon } from "react-native-elements";
// import { color } from "react-native-reanimated";

const Stack = createStackNavigator();
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          statusBarStyle: "light",
          headerRight: () => (
            <Icon
              // reverse
              name="md-cart"
              containerStyle={{ marginRight: 15, overflow: "hidden" }}
              type="ionicon"
              size={26}
              color={"#fff"}
              onPress={() => alert(5)}
            />
          ),
        }}
      >
        <Stack.Screen component={HomeSecreen} name="JS" />
        <Stack.Screen
          component={CategoryDetailSecreen}
          name="catDetail"
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailsScreen}
          // options={{
          //   // headerTitle: props => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Icon
          //       reverse
          //       name="md-cart"
          //       containerStyle={{ backgroundColor: "red" }}
          //       type="ionicon"
          //       size={26}
          //       color={colors.primary}
          //       onPress={() => alert(5)}
          //     />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
