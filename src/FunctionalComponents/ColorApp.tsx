import React, { useContext, useState } from "react";
import { AppDataContext } from "./AppData";

const ColorApp = () => {
  const tempContext: any = useContext(AppDataContext);
  const [activeColor, setActiveColor] = useState("#ff00ff");
  const colors: any = [
    {
      name: "red",
      colorcode: "#ff0000",
      label: "Red",
    },
    {
      name: "green",
      colorcode: "#00ff00",
      label: "Green",
    },
    {
      name: "blue",
      colorcode: "#0000ff",
      label: "Blue",
    },
    {
      name: "gray",
      colorcode: "#808080",
      label: "Gray",
    },
    {
      name: "white",
      colorcode: "#ffffff",
      label: "White",
    },
  ];
  return (
    <div style={{ backgroundColor: `${activeColor}` }}>
      {colors?.map((item: any, index: number) => {
        return (
          <span
            className="tile"
            key={`${item?.name}index`}
            style={{ backgroundColor: `${item?.colorcode}` }}
            onClick={() => {
              console.log("HI Color", item.colorcode);
              setActiveColor(item?.colorcode);
              tempContext?.update_themeColor(item?.colorcode);
            }}
          ></span>
        );
      })}
      <h1>Selected color</h1>
      <span className="tile" style={{ backgroundColor: `${activeColor}` }}></span>
    </div>
  );
};
export default ColorApp;
