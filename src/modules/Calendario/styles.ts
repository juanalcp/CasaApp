import { StyleSheet, Dimensions } from "react-native";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    height: height * 0.9
  },

  header: {
    height: height / 14,
    width: width,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    zIndex: -1,
    justifyContent: "center",
    marginTop: 10
  },
  headerText: {
    fontSize: 20,
    color: "#aa91dd"
  }
});

export default styles;
