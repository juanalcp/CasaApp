import React from "react";
import { View, Text, Dimensions } from "react-native";
interface DayMeals {
  day: string;
  comida: string;
  cena: string;
}

const DayMeals: React.FC<DayMeals> = ({ day, comida, cena }) => {
  const width: number = Dimensions.get("window").width;
  const height: number = Dimensions.get("window").height;
  return (
    <View
      style={{
        height: height / 8,
        width: width,
        alignItems: "center",
        padding: 20
      }}
    >
      <View style={{ marginBottom: 5 }}>
        <Text>{day}</Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          width: "100%",
          height: "100%",
          borderTopColor: "black",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "space-around"
        }}
      >
        <Text>{comida}</Text>
        <View
          style={{
            borderLeftColor: "black",
            borderLeftWidth: 1
          }}
        />
        <Text>{cena}</Text>
      </View>
    </View>
  );
};

export default DayMeals;
