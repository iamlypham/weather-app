import "./App.css";
import React from "react";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
// import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
// import { useState, useEffect } from "react";
// import getDoneWeatherData from "./components/weatherServices/services";

function App() {
  return (
    <div className="relative flex  items-center justify-center h-screen bg-gradient-to-bl to-orange-500  from-cyan-400   ">
      <CityWeatherInputInfo />
    </div>
  );
}

export default App;
