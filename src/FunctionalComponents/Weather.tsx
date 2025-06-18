import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

export interface Welcome {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: Country;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: any[];
  DataSets: string[];
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

export interface Country {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export interface GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: Elevation;
}

export interface Elevation {
  Metric: Imperial;
  Imperial: Imperial;
}

export interface Imperial {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface TimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: null;
}

function Weather() {
  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    console.log("weewwwww", data);
    fetch("https://dataservice.accuweather.com/locations/v1/topcities/50?apikey=h9fe5wkAfGBx1eXx0yomT9UUKNTohrjU")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("welco", data);
        setData(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/190390?apikey=h9fe5wkAfGBx1eXx0yomT9UUKNTohrjU&details=true&metric=true`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("weeather on key", data);
    //     setWeatherData({ ...data?.DailyForecasts[0], CityName: item.Country.EnglishName });
    //     //setData(data);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  }, []);

  const openWeatherModel = (item: any) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${item.Key}?apikey=h9fe5wkAfGBx1eXx0yomT9UUKNTohrjU&details=true&metric=true`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("weeather on key", data);
        setWeatherData({ ...data?.DailyForecasts[0], CityName: item.Country.EnglishName, OpenModel: true });
        //setData(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <WeatherCard weatherData={weatherData} />
      <h1>Please get the details of locations</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Key</th>
            <th>English Name</th>
            <th>Id</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: Welcome) => {
            return (
              <tr
                key={item.Key}
                style={{ border: "2px black solid", marginBottom: "8px", padding: "5px" }}
                onClick={() => {
                  openWeatherModel(item);
                }}
              >
                <td>{item?.Key}</td>
                <td>{item?.Country.EnglishName}</td>
                <td>{item?.Region.ID}</td>
                <td>{item?.GeoPosition.Latitude}</td>
                <td>{item?.GeoPosition.Longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Weather;
