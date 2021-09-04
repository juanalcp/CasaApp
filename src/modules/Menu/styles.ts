import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height / 10;
const windowWidth = Dimensions.get("window").width;

const SIDE = 50;

const styles = StyleSheet.create({
  houseImage: {
    width: 120,
    height: 120,
    marginBottom: 60,
    marginTop: 30,
  },

  squaredButtonImage: {
    width: SIDE,
    height: SIDE,
  },
  squaredButton: {
    margin: 10,
  },
  title: { fontSize: 30, marginTop: windowHeight },
  grid: {
    marginLeft: windowWidth / 14,
  },
});

export default styles;
