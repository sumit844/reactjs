import React from "react";
import { Form } from "react-bootstrap";

const InterestRate = (props:any) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <p>Please enter Interest Rate</p>
        </div>
        <div className="col">
          <input
            type="number"
            value={props.InterestRate}
            onChange={(event) => {
              props.ChangeInterestRate(event);
            }}
          />
        </div>
      </div>
      <div className="row">
        {" "}
        <Form.Range
          min="1"
          max="20"
          value={props.InterestRate}
          onChange={(event) => {
            props.ChangeInterestRate(event);
          }}
        />
      </div>
    </div>
  );
};

export default InterestRate;