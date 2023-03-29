import React from "react";
import WindDirection from "../WindDirection/WindDirection";

const WeatherOutput = (props) => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "2rem"}}>
          {props.weather.main.temp}
          &nbsp;<i className="wi wi-celsius"></i>
          <br></br>
          {props.weather.name}, {props.weather.sys.country}
        </h5>
        <p className="card-text">
          Feels like &nbsp;
          {props.weather.main.feels_like} °C.&nbsp;
          {props.weather.weather[0].main}.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <WindDirection
            speed={props.weather.wind.speed}
            direction={props.weather.wind.deg}
          ></WindDirection>
        </li>
        <li className="list-group-item">
          <i className="wi wi-humidity"></i>&nbsp; Humidity :{" "}
          {props.weather.main.humidity}%
        </li>
        <li className="list-group-item">
          Visibility : {parseInt(props.weather.visibility) / 1000} Km
        </li>
        <li className="list-group-item">
          Pressure : {props.weather.main.pressure}hPa
        </li>
        <li className="list-group-item">
          <i className="wi wi-sunrise"></i>&nbsp;{" "}
          {new Date(props.weather.sys.sunrise * 1000).toLocaleTimeString()}
          &emsp; | &emsp;
          <i className="wi wi-sunset"></i>
          &nbsp;{new Date(props.weather.sys.sunset * 1000).toLocaleTimeString()}
        </li>
      </ul>
    </div>
  );
};

export default WeatherOutput;
