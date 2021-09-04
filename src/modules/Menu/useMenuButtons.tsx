import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-native";
import styles from "./styles";
/*interface buttonInterface {
  title: string;
  onPress: () => void;
  image: any;
}*/

const useMenuButtons = () => {
  const history = useHistory();

  const getButtonImage = (source: any) => (
    <Image style={styles.squaredButtonImage} source={source} />
  );

  const BaseButtonImage = getButtonImage(
    require("../../../assets/app/house.png")
  );

  return [
    {
      title: "Limpieza",
      onPress: () => history.push("/limpieza"),
      image: getButtonImage(require("../../../assets/app/cleaning.png")),
      disabled: false,
      color: "#b3ecff",
      isWide: false,
    },
    {
      title: "Comidas",
      onPress: () => history.push("/comidas"),
      image: getButtonImage(require("../../../assets/app/meals.png")),
      disabled: false,
      color: "#b3ffb3",
      isWide: false,
    },
    {
      title: "Calendario",
      onPress: () => history.push("/calendario"),
      image: getButtonImage(require("../../../assets/app/calendar.png")),
      disabled: false,
      color: "#ccb3ff",
      isWide: false,
    },
    {
      title: "Plex",
      onPress: () => history.push("/plex"),
      image: getButtonImage(require("../../../assets/app/film.png")),
      disabled: true,
      color: "#ffeb99",
      isWide: false,
    },
  ];
};
export default useMenuButtons;
