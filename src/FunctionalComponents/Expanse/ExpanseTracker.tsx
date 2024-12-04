import React, { useContext } from "react";
import Expanse from "./Expanse";
import Income from "./Income";
import { AppDataContext } from "../AppData";

const ExpanseTracker = () => {
  let tempAppData: any = useContext(AppDataContext);
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h1>Expanse Tracker</h1>
        </div>
        <div className="col-sm-12 col-md-6">
          <h1>Available Amount: {tempAppData.appData.amountInBank}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Income />
        </div>
        <div className="col-sm-12 col-md-6">
          <Expanse />
        </div>
      </div>
    </div>
  );
};

export default ExpanseTracker;
