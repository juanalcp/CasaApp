import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  appContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
  globalContainer: {
    flex: 1,
    alignItems: "center",
  },
  globalTextStyle: {
    color: "white",
  },
});

export default styles;
