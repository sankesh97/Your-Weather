import React from "react";

const WeatherIcon = (props) => {
  const theicon =
    "wi wi-owm-" +
    (props.isitnight ? "night" : "day") +
    "-" +
    props.weathercond +
    " mt-3";
  return (
    <div>
      <i className={theicon} style={{ fontSize: "8rem", color: props.isitnight==="night" ? "black" : "white" }}></i>
    </div>
  );
};

export default WeatherIcon;
