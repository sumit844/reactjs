import React, { Component } from "react";
import Child from "./Child";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increament = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  Decreament = () => {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  };

  render() {
    return (
      <div style={{textAlign:"left"}}>
        <h1>Our Counter</h1>
        <h2 >Count Value is ={this.state.count}</h2>
        <button style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}
          onClick={() => {
            this.increament();
          }}
        >
          Increment
        </button>
        <button style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}
          onClick={() => {
            this.Decreament();
          }}
        >
          Decrement
        </button>
        <Child stateCount={this.state.count}/>
      </div>
    );
  }
}

export default Counter;
