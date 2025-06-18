import React from "react";
import { useReducer, useEffect } from "react";

const UseReducerHook = () => {
  const intialobject = {
    noOfTransact: 0,
    showBalance: false,
    balance: 1000,
  };
  const reducer = (state: any, action: any) => {
    console.log("Reducer is being called", action);
    switch (action.type) {
      case "SHOW_BALANCE": {
        return { ...state, showBalance: true, noOfTransact: state.noOfTransact + 1 };
      }
      case "ADD_5000": {
        return { ...state, balance: state.balance + 5000, noOfTransact: state.noOfTransact + 1 };
      }
      case "WITHDRAW_3000": {
        return { ...state, balance: state.balance - 3000, noOfTransact: state.noOfTransact + 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispath] = useReducer(reducer, intialobject);

  useEffect(() => {
    console.log("state", state);
  }, [state]);
  return (
    <>
      <h1>Welcome to the UseReducer Hook</h1>
      <p>Welcome to India</p>
      {state.showBalance && <h1>Amount: {state.balance}</h1>}
      <p>no of transaction: {state.noOfTransact}</p>
      <p>Show Balance: {state.showBalance ? "true" : "false"}</p>
      <button
        onClick={() => {
          console.log("wecpme");
          dispath({ type: "ADD_5000" });
        }}
      >
        Add 5000
      </button>
      <button
        onClick={() => {
          dispath({ type: "WITHDRAW_3000" });
        }}
      >
        Withdraw 3000
      </button>
      <button
        onClick={() => {
          dispath({ type: "SHOW_BALANCE" });
        }}
      >
        SHOW_BALANCE
      </button>
    </>
  );
};

export default UseReducerHook;
