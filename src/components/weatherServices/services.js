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
  console.log(saveData);
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
  // console.log(formatedCurrentWeather.name);
};

export default getDoneWeatherData;
