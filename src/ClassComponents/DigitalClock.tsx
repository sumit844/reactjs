import React, { Component } from "react";

class DigitalClock extends Component {
  state: any;
  intervalId: any;
  constructor(props: any) {
    super(props);
    this.state = {
      mydate: new Date(),
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        mydate: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.intervalId);
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <>
        <h1>Digital Clock</h1>
        <h2>
          <p>Current Time is: </p>
          {this?.state?.mydate?.toString()}
        </h2>
      </>
    );
  }
}

export default DigitalClock;
