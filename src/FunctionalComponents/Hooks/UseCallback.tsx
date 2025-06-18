import React, { useCallback, useState } from "react";
import UseCallbackChildComponent from "./UseCallbackChildComponent";

export default function UseCallback() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => {
    console.log("Welcomeee" + show);
    console.log("count", count);
    setCount((pre) => pre + 1);
  }, [count]);

  return (
    <div>
      <h1>Welcome to the UseCallback hook{count}</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        change show
      </button>
      <UseCallbackChildComponent handleClick={handleClick} />
    </div>
  );
}
