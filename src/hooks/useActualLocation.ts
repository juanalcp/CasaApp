import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useCurrentLocation: () => { path: string; isRoot: boolean } = () => {
  const location = useLocation();
  let path: string = location.pathname;
  let isRoot: boolean = location.pathname.split("/")[1] === "";

  useEffect(() => {
    if (location) {
      path = location.pathname;
      isRoot = location.pathname.split("/")[1] === "";
    }
  }, [location.pathname]);

  return { path, isRoot };
};

export default useCurrentLocation;
