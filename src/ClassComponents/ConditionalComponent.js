import React, { Component } from "react";

class ConditonalComponent extends Component {
  constructor() {
    super();

    this.state = {
      loginStatus: false
    }
  }

  checkLogin () {
    this.setState({ loginStatus: !(this.state.loginStatus) })
  }

  render() {

    
    return (
      <>
      <h1>Welcome to Conditional Statement inside Return section</h1>
      <div>
        <h2>Using && operator</h2>
        {!(this.state.loginStatus) && <button onClick={()=>{this.checkLogin()}} style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}>Login</button>}
        {this.state.loginStatus && <button onClick={()=>{this.checkLogin()}} style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}>LogOut</button>}
        </div>
        <div>
        <h2>Using Ternary Operator ? :</h2>
        {!(this.state.loginStatus)? <button onClick={()=>{this.checkLogin()}} style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}>Login</button>:<button onClick={()=>{this.checkLogin()}} style={{padding: "10px", margin: "10px",borderRadius: "10px",backgroundColor:"black",color:"white"}}>LogOut</button>}
        </div>
      </>
    );
  }
}

export default ConditonalComponent;
