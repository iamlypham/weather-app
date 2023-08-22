import React from "react";
import FirstDetails from "./FirstDetails";

function DetailsOfWeather() {
  return (
    <div className="h-4/5 pb-2">
      <div>
        <h1 className="py-6 top-0 h-fit  pl-9 relative  bg-white  font-bold py-0  text-lg pb-0 ">
          Today's Highlights
        </h1>
      </div>
      <div className="md:flex py-10 bg-white pb-0 relative flex flex-row justify-between items-center rounded-b-3xl ">
        <div>
          <FirstDetails />
        </div>
      </div>
    </div>
  );
}

export default DetailsOfWeather;
