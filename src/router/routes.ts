import React from "react";
import Menu from "../modules/Menu";
import Comidas from "../modules/Comidas";
import Calendario from "../modules/Calendario";
import Limpieza from "../modules/Limpieza";

interface routesObject {
  path: string;
  title: string;
  component: React.FC;
}

const createRoute: (
  path: string,
  title: string,
  component: React.FC
) => routesObject = (path, title, component) => {
  return {
    path,
    title,
    component,
  };
};

const ROUTES = {
  menu: createRoute("/", "Menú", Menu),
  calendario: createRoute("/calendario", "Calendario", Calendario),
  comidas: createRoute("/comidas", "Comidas", Comidas),
  limpieza: createRoute("/limpieza", "Limpieza", Limpieza),
};

console.log(ROUTES);

export default ROUTES;
