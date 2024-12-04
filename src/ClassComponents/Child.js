import React, { Component, Fragment } from "react";
import ConditonalComponent from "./ConditionalComponent";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { stateCount } = this.props;

    return (
      <Fragment>
        <h1>Welcome to props Object</h1>
        <p>this is a child={stateCount}</p>
        <ConditonalComponent />
      </Fragment>
    );
  }
}

export default Child;
