import React from "react";
import Router from "./src/router/router";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Router />
    </NativeRouter>
  );
}
