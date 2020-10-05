import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../const/colors";
import { ListItem, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductDetails(props) {
  return (
    <View style={styles.cnt}>
      <View style={styles.infoCnt}>
        <Text style={styles.categoryName}>{props.name}</Text>
        <ListItem
          contentContainerStyle={{ flex: 1 }}
          title={"Code"}
          leftIcon={
            <Icon name="qrcode" color={colors.primary} type="font-awesome" />
          }
          bottomDivider
          rightElement={<Text style={styles.categoryPrice}>{props.code}</Text>}
        />
        <ListItem
          title={"Prix"}
          leftIcon={
            <Icon name="money" color={colors.primary} type="font-awesome" />
          }
          bottomDivider
          rightElement={
            <Text style={styles.categoryPrice}>{props.prix} MRU</Text>
          }
        />
        <ListItem
          title={"Delai"}
          leftIcon={
            <Icon name="clock-o" color={colors.primary} type="font-awesome" />
          }
          bottomDivider
          rightElement={<Text style={styles.categoryPrice}>{props.time}</Text>}
        />
        <ListItem
          title={"Vendeur"}
          leftIcon={
            <Icon name="user" color={colors.primary} type="font-awesome" />
          }
          bottomDivider
          rightElement={
            <Text style={styles.categoryPrice}>{props.vendor}</Text>
          }
        />
        {/* </ScrollView> */}
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.descHeader}>Description</Text>
        <View style={styles.descBorder} />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Text style={(styles.descText, styles.descWrapper)}>
            {props.details}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cnt: {
    width: "100%",
    height: "87%",
    maxHeight: "87%",
    overflow: "hidden",
  },
  infoCnt: {
    marginTop: 10,
    backgroundColor: colors.bgwhite,
    flex: 1,
  },
  descContainer: {
    backgroundColor: colors.bgwhite,
    marginVertical: 10,
    height: "37%",
    maxHeight: "38%",
  },

  categoryName: {
    marginTop: 10,
    flexWrap: "wrap",
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  categoryPrice: {
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
  descWrapper: {
    marginTop: 2,
    marginLeft: 10,
  },
  descHeader: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
    borderBottomColor: colors.bgGrey,
  },
  descBorder: {
    borderBottomWidth: 2,
    borderBottomColor: colors.bgGrey,
    padding: 0,
    margin: 0,
  },
  descText: {
    flexWrap: "wrap",
  },
});
