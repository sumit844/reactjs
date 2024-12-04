import React from "react";


type EMIDataProps={

  principleAmount:number,
  interestRate:number,
  tenure:number,
}
const EmiData = (props:any) => {

let {principleAmount, interestRate, tenure}:EMIDataProps = props.EMIData;
principleAmount=Number(principleAmount)
let totalinterest:number= (interestRate*Number((principleAmount))*tenure)/100;

totalinterest=parseFloat(totalinterest.toFixed(2));

let totalAmount:number=(principleAmount+totalinterest);

let monthlyEmi=parseFloat((totalAmount/12).toFixed(2));
  return (
    <div className="my-4">
      <h2>EMI Detail</h2>
      <p>Monthly EMI: {monthlyEmi} </p>
      <p>Principle Amount : {principleAmount} </p>
      <p>Total Interest: {totalinterest} </p>
      <p>Total Amount : {totalAmount}</p>
      
    </div>
  );
};

export default EmiData;