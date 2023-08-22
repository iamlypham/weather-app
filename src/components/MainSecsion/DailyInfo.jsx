import React from "react";
// import DetailsOfWeather from "./DetailsOfWeather";

function DailyInfo() {
  const dailyInfo = [
    {
      id: 1,
      day: "Mon",
      from: "30°",
      to: "15°",
    },
    {
      id: 2,
      day: "Tues",
      from: "25°",
      to: "15°",
    },
    {
      id: 3,
      day: "Thurs",
      from: "26°",
      to: "15°",
    },
    {
      id: 4,
      day: "Wed",
      from: "27°",
      to: "15°",
    },
    {
      id: 5,
      day: "Fri",
      from: "28°",
      to: "15°",
    },
    {
      id: 6,
      day: "Satur",
      from: "29°",
      to: "15°",
    },
    {
      id: 7,
      day: "Sun",
      from: "33°",
      to: "15°",
    },
  ];

  return (
    <div>
      <div className=" bg-white h-1/5 space-x-6 flex flex-row justify-center items-center px-9 top-0 relative">
        {dailyInfo.map((daily) => (
          <div className="md:flex w-1/4 py-2 mb-3 bg-gradient-to-tr from-gray-100  to-gray-200 rounded-3xl flex flex-col items-center justify-center pr  ">
            <h1 className="font-light ">{daily.day}</h1>
            <img
              className="w-3/4"
              src="https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png"
              alt="#"
            />
            <div className="flex space-x-1">
              <p className="font-bold opacity-90">{daily.from}</p>
              <p>-</p>
              <p className="font-light opacity-60">{daily.to}</p>
            </div>
          </div>
        ))}
        {/* <div><DetailsOfWeather /></div> */}
      </div>
    </div>
  );
}

export default DailyInfo;
