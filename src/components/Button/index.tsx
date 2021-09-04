import React from "react";
import { View, Button as ReactButton } from "react-native";
import styles from "./styles";

interface ButtonProperties {
  title: string;
  onPress: () => void;
}

const orangeColor = "#e37222";

const Button: React.FC<ButtonProperties> = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <ReactButton title={title} onPress={onPress} color={orangeColor} />
    </View>
  );
};

export default Button;
