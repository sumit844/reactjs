import React, { Component, Suspense, lazy } from "react";
// import Child from "./Child";

// import LoginCounter from "../FunctionalComponents/LoginCounter";
// import ColorApp from "../FunctionalComponents/ColorApp";
import { MyButton,H1 } from "../FunctionalComponents/StyledComponents/ButtonStyleComponent";
const Child = lazy(() => { return import("./Child") });
const LoginCounter = lazy(() => { return import("../FunctionalComponents/LoginCounter") });
const ColorApp = lazy(() => { return import("../FunctionalComponents/ColorApp") });

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
      <div style={{ textAlign: "left" }}>
        <h1>Our Counter</h1>
        <h2 >Count Value is ={this.state.count}</h2>
        <H1 color="green">Welcome to my styled Component</H1>
        <H1 color="blue">Welcome to my styled Component</H1>
        <H1 color="red">Welcome to my styled Component</H1>
        <MyButton>Welcome to my Styled Component button</MyButton>
        <Suspense fallback={<h1 style={{ color: "red" }}>Content is fetching for u</h1>}>
          <ColorApp />
          <LoginCounter />
        </Suspense>

        <button style={{ padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "black", color: "white" }}
          onClick={() => {
            this.increament();
          }}
        >
          Increment
        </button>
        <button style={{ padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "black", color: "white" }}
          onClick={() => {
            this.Decreament();
          }}
        >
          Decrement
        </button>
        <Suspense fallback={<h1 style={{ color: "red" }}>Content is fetching for u</h1>}>
          <ColorApp />
          <LoginCounter />
          <Child stateCount={this.state.count} />
        </Suspense >

      </div >
    );
  }
}

export default Counter;
