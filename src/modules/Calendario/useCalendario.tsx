import React, { useState, useEffect } from "react";
import axios from "axios";

const useCalendario = () => {
  const [meals, setMeals] = useState<[]>([]);

  useEffect(() => {
    axios
      .get("http://vps-574f0f93.vps.ovh.net:1337/meals")
      .then((response: any) => {
        setMeals(response.data.data);
      })
      .catch(err => console.log(err));
  }, [setMeals]);

  return {
    meals
  };
};
export default useCalendario;
