import React, { useEffect, useState } from "react";
import axios from "../const/api";
import { StyleSheet, View, ScrollView } from "react-native";

import Gallery from "../components/Gallery";
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
        const gallery = photos.reduce(
          (r, k) => r.concat(`${axios.defaults.baseURL}` + res.data[k]),
          []
        );

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
          //backgroundColor: "#939799",
        }}
      >
        <Spinner visible={true} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Gallery imgs={imgs} />
      <View style={{ flex: 1 }}>
        {/* contentContainerStyle={{ flex: 1, flexGrow: 1 }} */}
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
    //height: "100%",
  },
});
