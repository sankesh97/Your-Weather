import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import yourWeatherLogo from './assets/Your-Weather.svg';
import './assets/css/weather-icons.min.css';
import WeatherInput from './components/WeatherInput/WeatherInput';
import WeatherOutput from './components/WeatherOutput/WeatherOutput';
import WeatherIcon from './components/WeatherIcon/WeatherIcon';

const App = (props) => {
  const [weather, weatherHandler] = useState(null);
  const [error, errorHandler] = useState(null);

  const onLoading = (ele) => {
    Axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        ele +
        '&appid=' +
        process.env.REACT_APP_OPEN_WEATHER_KEY +
        '&units=metric'
    )
      .then((response) => {
        errorHandler(null);
        weatherHandler(response.data);
        window.location.assign('#2');
      })
      .catch((response) => {
        errorHandler('404');
        window.location.assign('#2');
      });
  };

  let weather_out = '';
  let weather_icon_out = '';

  if (weather && !error) {
    weather_icon_out = (
      <WeatherIcon
        isitnight={
          weather.sys.sunset < weather.dt || weather.sys.sunrise > weather.dt
            ? true
            : false
        }
        weathercond={weather.weather[0].id}
      ></WeatherIcon>
    );
  } else if (error) {
    weather_icon_out = <p>No Data = No Image</p>;
  }

  if (weather && !error) {
    weather_out = <WeatherOutput weather={weather}></WeatherOutput>;
  } else if (error) {
    weather_out = <p>Do you even know how to spell the city's name ?</p>;
  }

  return (
    <div>
      <div className="section container text-center" id="1">
        <div className="row">
          <div className="col-sm-6 p-5">
            <img src={yourWeatherLogo} alt="Rain" className="img-fluid"></img>
          </div>
          <div className="col-sm-6 d-flex flex-column justify-content-center">
            <WeatherInput btnclick={(ele) => onLoading(ele)}></WeatherInput>
          </div>
        </div>
      </div>
      <div className="section container text-center" id="2">
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center align-items-center p-5">
            {weather_icon_out}
          </div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-center p-5">
              {weather_out}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
