import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import useCalendario from "./useCalendario";
import { DAYS } from "../../constants/lists";
import DayMeals from "../../components/DayMeals";
import styles from "./styles";

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
        <View style={styles.header}>
          <Text style={styles.headerText}>Calendario</Text>
        </View>
        <View style={styles.container}>
          <Text style={{}}>{calendarMeals}</Text>
        </View>
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
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
};

export default Calendario;
