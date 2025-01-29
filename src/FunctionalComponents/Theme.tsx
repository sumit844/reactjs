import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { AppDataContext } from "./AppData";

const Theme = (props: any) => {
  const AppDataContextnew: any = useContext(AppDataContext);
  return (
    <div className={`${AppDataContextnew?.appData?.darkTheme ? "bg-black text-white !important" : " "}`} style={{ backgroundColor: `${AppDataContextnew.appData.themeColor}` }}>
      {props.children}
    </div>
  );
};

export default Theme;
