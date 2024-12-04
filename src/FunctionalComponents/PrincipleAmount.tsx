import React, { useState } from "react";
import { Form } from "react-bootstrap";

const PrincipleAmount = (props: any) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <p>Please enter Principle Amount</p>
        </div>
        <div className="col">
          <input
            type="number"
            value={props.PrincipleAmountVal}
            onChange={(event) => {
              props.ChangePrincipleAmount(event);
            }}
          />
        </div>
      </div>
      <div className="row">
        {" "}
        <Form.Range
          min="1000"
          max="1000000000"
          value={props.PrincipleAmountVal}
          onChange={(event) => {
            props.ChangePrincipleAmount(event);
          }}
        />
      </div>
    </div>
  );
};

export default PrincipleAmount;
