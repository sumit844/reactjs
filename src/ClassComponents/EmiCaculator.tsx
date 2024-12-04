import React, { Component } from "react";
import PrincipleAmount from "../FunctionalComponents/PrincipleAmount";
import InterestRate from "../FunctionalComponents/InterestRate";
import Tenure from "../FunctionalComponents/Tenure";
import EmiData from "../FunctionalComponents/EmiData";
import EmiDataGraph from "../FunctionalComponents/EmiDataGraph";

class EmiCalculator extends Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      principleAmount: 1000,
      interestRate: 7,
      tenure: 1,
    };
  }

  changePrincipleAmount=(event:any) =>{
    console.log("welcome");
    this.setState({...this.state, principleAmount: event.target.value, });
  }
  changeInterestRate=(event:any)=>{
this.setState({...this.state, interestRate: event.target.value, }); 
  }
  changeTenure=(event:any)=>{
    this.setState({...this.state, tenure: event.target.value, }); 
      }
  render() {
    return (
      <>
        <h1>Welcome to EMI Calculator</h1>
        <PrincipleAmount PrincipleAmountVal={this.state.principleAmount} ChangePrincipleAmount={this.changePrincipleAmount} />
        <InterestRate InterestRate={this.state.interestRate} ChangeInterestRate={this.changeInterestRate} />
        <Tenure TenureValue={this.state.tenure} ChangeTenure={this.changeTenure} />
        <div className="row my-4 py-4">
        <div className="col col-sm-6">
        <EmiData EMIData={this.state} />
        </div>
        <div className="col col-sm-6">
        <EmiDataGraph EMIData={this.state} />
        </div>
        </div>
      </>
    );
  }
}

export default EmiCalculator;
