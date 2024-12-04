import React, { useRef } from "react";


const ChildAcceptingFunction = (props:any) => {


  return (
    <>
      <h1>Welcome to child Component accepting the Function from Parent Component</h1>
      <button
        className="btn btn-primary m-2 p-2"
        onClick={() => {
          props.updateFunction()
        }}
      >
        Click to update the state of the parent component
      </button>
    </>
  );
};

export default ChildAcceptingFunction;