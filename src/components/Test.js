import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Images from "./Images";

const Test = (state) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location.state.name); // result: 'some_value'
  }, [location]);

  return (
    <>
      {location.state.name} <br />
      {location.state.url}
      <Images value={location.state.name} />
    </>
  );
};

export default Test;
