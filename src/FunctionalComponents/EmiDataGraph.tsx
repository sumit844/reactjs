import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

type EMIDataProps={

  principleAmount:number,
  interestRate:number,
  tenure:number,
}
const EmiDataGraph = (props:any) => {

  let {principleAmount, interestRate, tenure}:EMIDataProps = props.EMIData;
principleAmount=Number(principleAmount)
let totalinterest:number= (interestRate*Number((principleAmount))*tenure)/100;

totalinterest=parseFloat(totalinterest.toFixed(2));

let totalAmount:number=(principleAmount+totalinterest);

let monthlyEmi=parseFloat((totalAmount/12).toFixed(2));

  const options = {
    theme: "dark2",
    animationEnabled: true,
    
    title:{
      text: "EMI Calculator Chart"
    },
    data: [{
      type: "pie",
      
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}</strong>",
      indexLabel: "{y}",
      indexLabelPlacement: "outside",
      dataPoints: [
        { y: totalinterest, label: "Total Interest" },
        { y: totalAmount, label: "Total Amount" },
        { y: monthlyEmi, label: "Monthy EMI" },
        
      ]
    }]
  }
  return (
    <>
      <h1>EMI Graph</h1>
      
      <CanvasJSChart options = {options}
			/>
      
    </>
  );
};

export default EmiDataGraph;