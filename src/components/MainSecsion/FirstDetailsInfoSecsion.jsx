import React, { useState } from "react";
import DetailsOfWeather from "./DetailsOfWeather";
import DailyInfo from "./DailyInfo";

function FirstDetailsInfoSecsion() {
  const [input, setInput] = useState("");
  // const handleSearchButton = () => {};

  return (
    // <div className="">
    <div className="md:flex h-full rounded-2xl py-6   flex flex-col absolute    w-4/5 right-3 pt-3 top-0 pl-9  ">
      <div className=" bg-white relative top-0 pt-3 rounded-t-3xl h-1/8  space-x-3 flex flex-row justify-center items-center">
        <div className="flex flex-row space-x-6 pb-8  items-center  ">
          <button className="text-md rounded-xl w-9  transition ease-out hover:scale-150 hover:bg-black hover:text-white ">
            °C
          </button>
          <button className="w-9 transition ease-out hover:scale-150">
            <img
              alt="#"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            />
          </button>
          <button className="text-md transition rounded-xl w-9 ease-out hover:scale-150 hover:bg-black hover:text-white">
            °F
          </button>
        </div>
      </div>

      <div>
        <DailyInfo />
        <DailyInfo />
      </div>

      <div>
        <DetailsOfWeather />
      </div>
    </div>
    // </div>
  );
}

export default FirstDetailsInfoSecsion;
