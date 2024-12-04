import React, { useEffect, useState,useContext } from "react";
import ThreeColumnComponent from "./ThreeColumnComponent";
import { AppDataContext } from "./AppData";

const Countries = () => {
  const [getData, setData] = useState([]);
const AppDataContext1=useContext(AppDataContext)
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
       <button onClick={AppDataContext1.login}>{AppDataContext1.loginStatus?"Logout":"login"}</button>
      <ThreeColumnComponent data={getData} />
    </div>
  );
};

export default Countries;
