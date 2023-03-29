import React from "react";
import "../../assets/css/weather-icons.min.css";
import "../../assets/css/weather-icons-wind.min.css";

const WindDirection = (props) => {
  const direction = "wi wi-wind towards-" + props.direction + "-deg";
  return (
    <div>
      <i className={direction} style={{ fontSize: "1.2rem" }}></i>&ensp;Wind
      Speed : {props.speed} m/s
    </div>
  );
};

export default WindDirection;
