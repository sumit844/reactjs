import React from "react";
import {Form} from "react-bootstrap";

const Tenure = (props:any) => {
  return (
    <div>
    <div className="row">
      <div className="col">
        <p>Please enter Interest Rate</p>
      </div>
      <div className="col">
        <input
          type="number"
          value={props.TenureValue}
          onChange={(event) => {
            props.ChangeTenure(event);
          }}
        />
      </div>
    </div>
    <div className="row">
      {" "}
      <Form.Range
        min="1"
        max="30"
        value={props.TenureValue}
        onChange={(event) => {
          props.ChangeTenure(event);
        }}
      />
    </div>
  </div>
  );
};

export default Tenure;