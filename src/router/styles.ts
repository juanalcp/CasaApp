import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  appContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
    marginTop: 40
  },
  globalContainer: {
    flex: 1,
    alignItems: "center"
  },
  globalTextStyle: {
    color: "white"
  },
  backArrow: {
    width: 35,
    height: 35,
    marginLeft: 20
  }
});

export default styles;
