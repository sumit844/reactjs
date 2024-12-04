import React, { useState } from "react";
import ChildAcceptingFunction from "./ChildAcceptingFunction";


const PassingFunctionParent=()=>{
const [state, setState]=useState(0);

const updateFunction=()=>{

setState(state+1)
}
return (<>
<h1>Passing Function from Parent to Child</h1>
<p>{state}</p>
<button onClick={()=>{
   updateFunction()
}} className="btn btn-primary m-2 p-2">Increment</button>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<ChildAcceptingFunction updateFunction={updateFunction}  />
</>)
}

export default PassingFunctionParent;