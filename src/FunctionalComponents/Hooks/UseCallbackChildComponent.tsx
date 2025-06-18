import React, { useEffect } from "react";

export default function UseCallbackChildComponent(props: any) {
  useEffect(() => {
    console.log("Child Component re-rendered");
  }, [props.handleClick]);
  return (
    <div>
      <h1>Welcome to the Child Component</h1>
      <button onClick={props.handleClick}>Child Button</button>
    </div>
  );
}
