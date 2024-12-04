import React, { forwardRef } from "react";

const ChildRefFunc = (props:any,refs:any) => {
  const getRefValuefromParent = () => {

window.alert(refs.current.value);
  };
  return (
    <>
      <h1>Welcome to child ref</h1>
      <button
        className="btn btn-primary m-2 p-2"
        onClick={() => {
          getRefValuefromParent();
        }}
      >
        Click to get Ref Value from Parent
      </button>
    </>
  );
};

export default forwardRef(ChildRefFunc);
