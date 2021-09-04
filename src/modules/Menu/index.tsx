import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import SquaredButton from "../../components/SquaredButton";
import Grid from "../../components/Grid";
import useMenuButtons from "./useMenuButtons";
import styles from "./styles";

const Menu = () => {
  const menuButtonsProps = useMenuButtons();
  const menuTitle = "PISO GUACHI";

  const casita = (style: object, source: any) => (
    <Image style={style} source={source} />
  );

  const getMenuSquaredButton = (
    image: any,
    title: string,
    onPress: () => void,
    disabled?: boolean,
    backgroundColor?: string,
    isWide?: boolean,
    key?:number
  ) => (
    <SquaredButton
      image={image}
      text={title}
      style={[styles.squaredButton, { backgroundColor: backgroundColor }]}
      isWide={isWide}
      onPress={onPress}
      disabled={disabled}
      key={key}
    />
  );

  const menuButtons = menuButtonsProps.map((prop,index) =>
    getMenuSquaredButton(
      prop.image,
      prop.title,
      prop.onPress,
      prop.disabled,
      prop.color,
      prop.isWide,
      index
    )
  );

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>{menuTitle}</Text>
      {casita(styles.houseImage, require("../../../assets/app/house.png"))}
      <Grid style={styles.grid}>{menuButtons}</Grid>
    </View>
  );
};

export default Menu;
