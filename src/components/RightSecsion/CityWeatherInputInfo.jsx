import {
  UilSearch,
  UilLocationPoint,
  // UilClouds,
  // UilRaindrops,
  UilWind,
  // uilFeelsLike,
  UilTemperatureThreeQuarter,
  UilTemperatureEmpty,
  UilThermometer,
} from "@iconscout/react-unicons";
import React from "react";
import { useState, useEffect } from "react";
// import getDoneWeatherData from "../weatherServices/services";

function CityWeatherInputInfo() {
  const API_KEY = "fe56017491bae986aa66dcda1a982ef0";
  // import DateTime from './../../../node_modules/luxon/src/datetime';
  const BASE_URL = "https://api.openweathermap.org/data/2.5";
  // import { DateTime } from "luxon";

  const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(
      BASE_URL +
        "/" +
        infoType +
        "?q=" +
        searchParams +
        "&units=metric" +
        "&appid=" +
        API_KEY
    );
    const getData = await fetch(url);
    const saveData = await getData.json();
    return saveData;
  };

  const formatCurrentWeather = (data) => {
    // console.log(data);
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,

      wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      speed,
      details,
      icon,
    };
  };

  const getDoneWeatherData = async (searchParams) => {
    const formatedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrentWeather);

    return formatedCurrentWeather;
  };
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  useEffect(() => {
    const getDataFormCity = async () => {
      if (input) {
      } else {
        console.log("no input");
      }
      const getData = await getDoneWeatherData(`${search}`);
      console.log(getData);
      if (getData) {
        setWeatherInfo(
          <div>
            <div className="md:flex flex flex-col space-y-3 justify-center items-center">
              <h1 className="md:flex flex flex-row ic font-bold text-3xl text-black   ">
                {getData.name}
                <h1 className="md:flex font-light text-black  text-lg">
                  {getData.country}
                </h1>
              </h1>

              <p className="font-light text-xl">{getData.details}</p>
              <h1 className="md:flex font-bold text-3xl text-orange-500 py-3 my-3">
                {getData.temp}°c
              </h1>

              <div className="md:flex flex flex-col space-y-3 justify-center items-start py-6">
                <div className=" md:flex  flex flex-row space-x-2">
                  <UilTemperatureThreeQuarter
                    size={24}
                    className="md:flex  text-black"
                  />
                  <p className=" md:flex  font-light text-md text-black">
                    Temp_max : {getData.temp_max}
                  </p>
                </div>
                <div className=" md:flex flex flex-row space-x-2">
                  <UilTemperatureEmpty
                    size={24}
                    className="md:flex text-black"
                  />
                  <p className="font-light text-md md:flex  text-black">
                    Temp_min: {getData.temp_min}
                  </p>
                </div>

                <div className=" md:flex flex flex-row space-x-2">
                  <UilThermometer size={24} className="md:flex text-black" />
                  <p className="font-light text-md md:flex  text-black">
                    Feels like: {getData.feels_like}
                  </p>
                </div>

                <div className=" md:flex flex flex-row space-x-2">
                  <UilWind size={24} className="md:flex text-black" />
                  <p className="font-light text-md md:flex  text-black">
                    Wind: {getData.speed} Km/h
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        console.log("abc");
      }
    };
    getDataFormCity();
  }, [search]);

  const handleSearchButton = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };

  const handleLocationButton = (e) => {
    e.preventDefault();
    setSearch("Ho Chi Minh");
    setInput("");
  };
  // getDoneWeatherData("Ho chi minh");

  return (
    <div className="md:flex absolute  px-6    h-fit py-3  w-1/4   rounded-3xl   flex flex-col justify-around items-center bg-white">
      <div className="md:flex py-3   flex flex-row w-full space-x-3    justify-center items-center">
        <UilSearch
          onClick={handleSearchButton}
          className="md:flex transition  ease-out hover:scale-125 text-black hover:scale-120"
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" md:flex text-black w-full justify-center items-center rounded-md   outline-none capitalize  "
          placeholder="Search city name ..."
        ></input>
        <UilLocationPoint
          onClick={handleLocationButton}
          className="md:flex transition ease-out hover:scale-125 text-black"
        />
      </div>
      {weatherInfo}
    </div>
  );
}

export default CityWeatherInputInfo;
