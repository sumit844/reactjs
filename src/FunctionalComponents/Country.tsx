import React, { useState } from "react";

const Country = () => {
  const [countryList, setCountryList] = useState(["India", "America", "Nepal", "Canada", "China,", "UK", "Russia", "France"]);
  return (
    <>
      <h1>Country</h1>
      {countryList?.map((item, index) => {
        return <div key={`HI+${index}`}>{item}</div>;
      })}
    </>
  );
};

export default Country;
