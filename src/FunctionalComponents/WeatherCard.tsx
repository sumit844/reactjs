import React, { useState } from "react";

export default function WeatherCard(props: any) {
  const [showModel, setShowModel] = useState(props?.weatherData?.OpenModel);
  console.log("Props new", props);
  return (
    <>
      {showModel && (
        <div style={{ backgroundColor: "white", position: "fixed", width: "100%", height: "100%", top: "0", left: "0", zIndex: "1000" }}>
          <div className="weatherCards" style={{ backgroundColor: "gray", position: "relative", top: "30%", left: "40%", padding: "30px" }}>
            <h3>{props?.weatherData?.CityName}</h3>
            <p>Temp Max: {props?.weatherData.Temperature?.Maximum?.Value} </p>
            <p>Temp Min: {props?.weatherData.Temperature?.Minimum?.Value} </p>
            <p>Rain RainProbability: {props?.weatherData?.Day?.RainProbability}</p>
            <p>Air Quality: {props?.weatherData?.AirAndPollen?.length > 0 && props?.weatherData?.AirAndPollen[0]?.Category}</p>
            <p>Sun Rise: {props?.weatherData?.Sun?.Rise}</p>
            <p>Sun Set: {props?.weatherData?.Sun?.Set}</p>
            <p
              onClick={() => {
                setShowModel(false);
              }}
            >
              Clost it
            </p>
          </div>
        </div>
      )}
    </>
  );
}
