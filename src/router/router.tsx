import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Route } from "react-router-native";
import styles from "./styles";
import ROUTES from "./routes";
import useCurrentLocation from "../hooks/useActualLocation";
import { useHistory } from "react-router";

const Router = () => {
  const { menu, comidas } = ROUTES;
  const { isRoot } = useCurrentLocation();
  const history = useHistory();

  const getRoutes: () => JSX.Element[] = () => {
    const routes = Object.entries(ROUTES);
    const renderRoutes = routes.map((value, index) => (
      <Route
        key={index}
        exact
        path={value[1].path}
        component={value[1].component}
      />
    ));
    return renderRoutes;
  };
  /*{!isRoot ? (
        <TouchableOpacity onPress={() => history.push("/")}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/app/back-button.png")}
          />
        </TouchableOpacity>
      ) : null}*/
  return (
    <View style={styles.appContainer}>
      <View style={styles.globalContainer}>{getRoutes()}</View>
    </View>
  );
};

export default Router;
