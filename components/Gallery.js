import React from "react";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import colors from "../const/colors";

export default function Gallery(props) {
  return (
    <View style={styles.cnt}>
      <View style={styles.imgcnt}>
        <SliderBox
          sliderBoxHeight={400}
          images={props.imgs}
          dotColor={colors.primary}
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={styles.img}
          imageLoadingColor={colors.primary}
          resizeMode="contain"
          resizeMethod={"resize"}
          autoplay
          /// circleLoop
          dotStyle={styles.dotStyle}
          paginationBoxStyle={styles.paginationCnt}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cnt: {
    width: "100%",
    height: "30%",
    //flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgcnt: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 8,
    backgroundColor: "#fff",
  },
  img: {
    // flex: 1,
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").height / 4.2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //resizeMode: "center",
    //  marginTop: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    //marginHorizontal: 15,
    marginTop: 5,
    padding: 0,
    margin: 0,
  },
  paginationCnt: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
});
