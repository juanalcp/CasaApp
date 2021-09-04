import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height / 10;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    padding: 10,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default styles;
