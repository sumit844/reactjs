import React, { Component, createRef } from "react";

class RefClass extends Component {
  inputRef1: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.inputRef1 = createRef();
  }
  getInputValue() {
    console.log(this.inputRef1.current);
    console.log(this.inputRef1.current.value);
    window.alert(this.inputRef1.current.value);
  }
  render() {
    return (
      <>
        <h1>Welcome to the ref Concept in the Class Component</h1>
        <input type="text" className="m-2 p-2" placeholder="please enter some value...." ref={this.inputRef1} />
        <button
          className="btn btn-primary m-2 p-2"
          onClick={() => {
            this.getInputValue();
          }}
        >
          Get Input Value
        </button>
      </>
    );
  }
}

export default RefClass;
