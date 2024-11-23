import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap"

const App = () => {

  const [city, setCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [cityClicked, setCityClicked] = useState();
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompleteURL = `https://api.weatherapi.com/v1/search.json?key=beea7515e1b14e7687052019242211&q=${city}`

  const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=beea7515e1b14e7687052019242211&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(
    () => {
      if (city && city.length > 3) {
        fetchAutoCompAPI();
      }

    }, [city]
  )

  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompleteURL);
      const resp = await response.data;
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`
      })
      setCitySuggestion(cityData);
    }
    catch (e) {
      console.log("error", e);
    }
  }

  const handleSelectedCity = async (city) => {
    fetchWeatherAPI(city);
    setCityClicked(city)
    setCitySuggestion([]);
  }

  const fetchWeatherAPI = async (city) => {
    try {
      const response = await axios.get(weatherURL(city));
      const resp = response.data;
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
    }
    catch (e) {
      console.log("Weather API error", e);
    }

  }

  return (
    <>
      <div className="container bg-success my-5 px-5 pb-5 pt-2 rounded">
        <div className="text-white text-center mb-3">
          <h2>Weather App</h2>
        </div>

        <div className="mx-5">
          <input type="text" className="form-control" value={cityClicked} placeholder="Enter City Name" onChange={(e) => {
            setCity(e.target.value);
            if (e.target.value === "") {
              setCurrent();
              setForecast();
              setLocation();
              setCityClicked();

            }
          }} />
        </div>

        {citySuggestion && citySuggestion.map((city, index) => {
          return (
            <>


              <div key={index} className="text-center bg-info bg-opacity-10 rounded p-1 border border-info border-opacity-25 text-white mx-5" style={{ cursor: "pointer" }} onClick={() => { handleSelectedCity(city) }}>{city}</div>


            </>
          )
        })}
        {currentWeather && <Current currentWeather={currentWeather} location={location} />}
        {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location} />}
      </div>
    </>
  )
}

export default App;