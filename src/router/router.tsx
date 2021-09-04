import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import styles from "./styles";
import ROUTES from "./routes";
import Button from "../components/Button";
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

  return (
    <View style={styles.appContainer}>
      {!isRoot ? (
        <Button title={"Back"} onPress={() => history.push("/")} />
      ) : null}
      <View style={styles.globalContainer}>{getRoutes()}</View>
    </View>
  );
};

export default Router;
