import React from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { useState } from "react";

const Calendario = () => {
  const [comida, setComida] = useState();
  const [cena, setCena] = useState();
  axios.get('http://vps-574f0f93.vps.ovh.net:1337/comida').then((response: AxiosResponse) => {
    console.log(response.data);
    setComida(response.data)
   })
   axios.get('http://vps-574f0f93.vps.ovh.net:1337/cena').then((response: AxiosResponse) => {
    console.log(response.data);
    setCena(response.data)
   })
  return (
    <View>
      <Text style={{}}>Prueba calendario</Text>
    </View>
  );
};

export default Calendario;
