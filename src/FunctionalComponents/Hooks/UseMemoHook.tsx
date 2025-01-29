import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(5);
  const [Cars, setCars] = useState(["Toyoto", "Maruti", "BMW", "Audi"]);

  const getCarList: any = (Cars1: any) => {
    return Cars1?.map((item: string, index: Number) => {
      console.log("Welcome2" + index);
      return <p key={`${index}+idd`}>{item}</p>;
    });
  };
  const memorisedCarList: any = useMemo(() => {
    let x = getCarList(Cars);
    console.log(x);
    return x;
  }, [Cars]);
  return (
    <div>
      <h1>Welcome to Use Memo Hook {count}</h1>
      <>{memorisedCarList}</>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCars([...Cars, "WagonR"]);
        }}
      >
        Add NewCar
      </button>
    </div>
  );
};
export default UseMemoHook;
