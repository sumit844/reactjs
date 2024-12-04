import React, { useContext } from "react";
import { weatherContext } from "./ParentComp";

const ChildComp5 = () => {
  const contextData = useContext(weatherContext);
  return (
    <div>
      <h2>Child Component 5</h2>
      <h1>{contextData.val}</h1>
      <button
        onClick={() => {
          contextData.setVal();
        }}
      >
        add Prefix by component 5
      </button>
    </div>
  );
};

export default ChildComp5;
