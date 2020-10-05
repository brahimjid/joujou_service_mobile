import React, { useEffect, useState } from "react";
import axios from "../const/api";
import { StyleSheet, View, ScrollView } from "react-native";
import { SliderBox } from "../components/Ga";
import AddToCard from "../components/AddToCard";
import ProductDetails from "../components/ProductDetails";
import colors from "../const/colors";
import Spinner from "react-native-loading-spinner-overlay";
export default function ProductDetailsScreen({ route }) {
  const [product, setProduct] = useState({});
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = route.params;
  useEffect(() => {
    setLoading(true);
    axios("/products/" + slug)
      .then((res) => {
        setProduct(res.data);
        const photos = Object.keys(res.data).filter((key) => {
          if (key.startsWith("photo")) {
            if (res.data[key] != null) {
              return res.data[key];
            }
          }
        });
        const gallery = photos.reduce((r, k) => r.concat(res.data[k]), []);

        setImgs(gallery);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [route]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
      >
        <Spinner visible={true} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.cnt}>
        <View style={styles.imgcnt}>
          <SliderBox images={imgs} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ProductDetails
            code={product.code_ref}
            time={product.delai}
            vendor={product.vendeur}
            name={product.nom}
            prix={product.prix}
            details={product.description}
          />
        </ScrollView>
      </View>
      <AddToCard productNom={product.nom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cnt: {
    width: "100%",
    height: "30%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  imgcnt: {
    justifyContent: "center",
    alignItems: "center",
    height: "94%",
    marginTop: 8,
    backgroundColor: "#fff",
  },
});
