import React, { useState } from 'react';

import axios from 'axios';

export default function Search() {
  let [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  if (temperature) {
    return (
      <h4>
        City: {city} <br />
        Temperature: {Math.round(temperature)}°C <br />
        Description: {description} <br />
        Humidity: {humidity} % <br />
        Wind: {wind} km/h <br />
      </h4>
    );
  }
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  function showDescription(response) {
    setDescription(response.data.weather[0].description);
  }

  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }

  function showWind(response) {
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21de711a93f4b833469cf486a6d6e74e&units=metric`;
    axios.get(url).then(showTemperature);
    axios.get(url).then(showDescription);
    axios.get(url).then(showHumidity);
    axios.get(url).then(showWind);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
