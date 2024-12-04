import React, { Component } from "react";

class Home extends Component {

  constructor() {
    super();
    this.state={
      count:0
    }
  console.log("this is Constructor method from Mounting Stage of Class Component.")  
  }

  componentDidMount(){
    console.log("this is componentDidMount() method from Mounting Stage of Class Component.")  
  }
  componentDidUpdate(){
    console.log("this is componentDidUpdate method from Mounting Stage of Class Component.")  
  }
  increase=()=>{

    this.setState((prev)=>{
      return{
        count:prev.count+1
      }
    })
  }
  
  render() {
    console.log("this is Render method from Mounting Stage of Class Component.")  
    return (
      <div>
        <h1>Our First Class Component ={this.state.count}</h1>
        <button onClick={this.increase}>Click on IT</button>
      </div>
    );
  }
}

export default Home;

export class Home1 extends Component {
  constructor() {
    super();
   
   
  }


  render() {
    return (
      <div>
        <h1>Class 2 from Same File </h1>
       
      </div>
    );
  }
}
