import React from "react";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import styles from "./styles";

const SquaredButton = ({
  image,
  text,
  style,
  onPress,
  disabled = false,
  isWide,
}) => {
  const { width } = Dimensions.get("window");
  const buttonWidth = width * 0.8;
  const squaredButtonStyle = [
    styles.buttonContainer,
    style,
    isWide ? { width: buttonWidth } : undefined,
  ];
  return (
    <View style={{ opacity: disabled ? 0.2 : 1 }}>
      <TouchableOpacity
        style={squaredButtonStyle}
        onPress={onPress}
        disabled={disabled}
      >
        {image}
        <View
          style={{
            width: "100%",
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.buttonTitle}> {text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SquaredButton;
