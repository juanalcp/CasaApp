import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  appContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white"
  },
  globalContainer: {
    flex: 1,
    alignItems: "center"
  },
  globalTextStyle: {
    color: "white"
  },
  backArrow: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 30
  }
});

export default styles;
