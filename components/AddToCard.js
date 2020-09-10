import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../const/colors";

export default function AddToCard(props) {
  return (
    <View style={styles.buyCnt}>
      <Button
        onPress={() => {
          Linking.openURL(`tel:32008600`);
        }}
        buttonStyle={{ marginRight: 5, backgroundColor: colors.phone }}
        icon={<Ionicons name="md-call" size={28} color="white" />}
      />
      <Button
        buttonStyle={styles.addToCardBtn}
        icon={
          <FontAwesome5
            name="cart-plus"
            style={{ marginRight: 10 }}
            size={24}
            color="white"
          />
        }
        title="Ajouter au panier"
      />

      <Button
        onPress={() => {
          Linking.openURL(
            `https://wa.me/+22226032424?text=Hello%20Joujou%20Services%20${props.productNom}`
          );
        }}
        buttonStyle={{ marginLeft: 5, backgroundColor: colors.phone }}
        icon={<FontAwesome5 name="whatsapp" size={24} color="white" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buyCnt: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    // backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCardBtn: {
    width: "100%",
    backgroundColor: colors.primary,
  },
});
