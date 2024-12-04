import React, { useRef } from "react";
import ChildRefFunc from "./ChildRefFunc";

const RefFunction=()=>{
let inputref1:any=useRef();

const fetchInputUsingzRef=()=>{
    window.alert(inputref1?.current?.value);
}
    return(<>
    <h1>Ref Concept with the elment of Function Component</h1>
    <input type="text" className="m-2 p-2" placeholder="please enter some value...."  ref={inputref1} />
    <button onClick={()=>{ fetchInputUsingzRef()
    }} className="btn btn-primary m-2 p-2">Get Input Text</button>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <ChildRefFunc  ref={inputref1} />
    </>
    
)

}

export default RefFunction;