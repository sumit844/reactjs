import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [countryFrom, setCountryFrom] = useState<number>(0);
  const [countryTo, setCountryTo] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number>();
  const [originalValue, setOriginalValue] = useState(0);

  const getSelectedValueFrom = (e: any) => {
    setCountryFrom(e.target.value);
  };
  const getSelectedValueTo = (e: any) => {
    setCountryTo(e.target.value);
  };

  const calculateConvertedValue = () => {
    let totalValueFrom = originalValue * countryFrom;
    totalValueFrom = totalValueFrom / countryTo;
    console.log(totalValueFrom);
    setConvertedValue(totalValueFrom);
  };
  const originalAmount = (e: any) => {
    setOriginalValue(parseInt(e.target.value));
  };
  return (
    <>
      <h1>Currency Convertor</h1>
      <div className="row">
        <input type="number" className="my-2 p-2" placeholder="please enter amount" onChange={originalAmount} />
      </div>
      <div className="row my-4">
        <div className="col-sm-12 col-md-6">
          <select
            id="options"
            name="options"
            className="my-2 p-2"
            onChange={(e) => {
              getSelectedValueFrom(e);
            }}
          >
            <option value="india">Please Select Country From</option>
            <option value="1">India</option>
            <option value="80">America</option>
            <option value=".63">Nepal</option>
            <option value="61">Canada</option>
            <option value="101">UK</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
          <select
            id="options"
            name="options"
            className="my-2 p-2"
            onChange={(e) => {
              getSelectedValueTo(e);
            }}
          >
            <option value="india">Please Select Country To</option>
            <option value="1">India</option>
            <option value="80">America</option>
            <option value=".63">Nepal</option>
            <option value="61">Canada</option>
            <option value="101">UK</option>
          </select>
        </div>
        <div className="row">
          {convertedValue && <h2 className="mt-2 pt-2">Converted Value: {convertedValue.toFixed(2)}</h2>}
          <button
            className="btn btn-primary my-4 p-2"
            onClick={() => {
              calculateConvertedValue();
            }}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
