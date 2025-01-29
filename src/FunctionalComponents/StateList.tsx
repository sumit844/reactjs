import React, { useState } from "react";
import withFilter from "./HOC/withFilter";

const stateList = ["Bihar", "UP", "MP", "Karnataka", "Delhi", "Gujrat"];
const StateList = (props: any) => {
  return (
    <>
      <h1>This is the list of the state</h1>
      <div>
        {props.filterListData?.map((item: string, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </>
  );
};

export default withFilter(StateList, stateList);
