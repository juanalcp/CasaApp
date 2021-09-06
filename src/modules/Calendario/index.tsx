import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import useCalendario from "./useCalendario";
import { DAYS } from "../../constants/lists";
import DayMeals from "../../components/DayMeals";

const Calendario = () => {
  const { meals } = useCalendario();

  if (meals.length !== 0) {
    const calendarMeals = DAYS.map((dia, index) => {
      const mealsKeys = Object.keys(meals);
      return (
        <DayMeals
          day={dia}
          comida={meals[mealsKeys[index]].comida}
          cena={meals[mealsKeys[index]].cena}
          key={index}
        />
      );
    });

    return (
      <View style={{ flex: 1 }}>
        <Text style={{}}>{calendarMeals}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
};

export default Calendario;
