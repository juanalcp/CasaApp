import React, { FC } from "react";
import { ScrollView, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

interface GridProps {
  style: any;
}
const Grid: FC<GridProps> = ({ children, style }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        {
          flexDirection: "row",
          alignContent: "space-around",
          flexWrap: "wrap",
          width: windowWidth,
        },
        style,
      ]}
    >
      {children}
    </ScrollView>
  );
};

export default Grid;
