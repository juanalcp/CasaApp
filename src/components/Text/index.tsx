import React, { FC } from "react";
import { Text as ReactNativeText } from "react-native";
import styles from "./styles";

interface TextProps {
  style: any;
}

const Text: FC<TextProps> = ({ children, ...props }) => {
  return (
    <ReactNativeText {...props} style={[props.style, styles.text]}>
      {children}
    </ReactNativeText>
  );
};

export default Text;
