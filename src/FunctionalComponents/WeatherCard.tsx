import React, { useState } from "react";

export default function WeatherCard(props: any) {
  console.log("Props new", props);
  return (
    <>
      {
        <div>
          <div className="weatherCards">
            <h3>{props?.weatherData?.CityName}</h3>
            <p>Temp Max: {props?.weatherData.Temperature?.Maximum?.Value} </p>
            <p>Temp Min: {props?.weatherData.Temperature?.Minimum?.Value} </p>
            <p>Rain RainProbability: {props?.weatherData?.Day?.RainProbability}</p>
            <p>Air Quality: {props?.weatherData?.AirAndPollen?.length > 0 && props?.weatherData?.AirAndPollen[0]?.Category}</p>
            <p>Sun Rise: {props?.weatherData?.Sun?.Rise}</p>
            <p>Sun Set: {props?.weatherData?.Sun?.Set}</p>
          </div>
        </div>
      }
    </>
  );
}
