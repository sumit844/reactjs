import React, { useEffect } from "react";
import { useDispatch,connect } from "react-redux";
import { useSelector } from "react-redux";

function TempList(props:any) {
  // const dispatch = useDispatch();
  // const data=useSelector((state:any)=>{return state.DataBySaga})
  // useEffect(()=>{
  //   console.log("data",data)
  // })
const {data, myfunc}=props
  function* myGenerator(){

    yield 1;
    console.log("welcome")
    const yourname:unknown = yield "Wehat is your name";
    yield console.log("Welcome"+yourname)
  }

  const myiteratorObject=myGenerator();
  
  console.log("myiteratorObject 1",myiteratorObject.next())
  console.log("myiteratorObject 2",myiteratorObject.next().value)
  console.log("myiteratorObject 3",myiteratorObject.next("Rohan").value)

  return (
    <div>
      <h1>Welcome to the Product List page whose data is comming from Redux Sage Middleware</h1>
      <button
        onClick={() => {
          console.log("I have triggered Templist Action");
          myfunc();
        }}
      >
        FetchProdcutListUsingReduxSagaMiddlerware
      </button>
      {data && data.map((item:any)=>{

        return (<>
        <h4>{item.title}</h4></>)
      })}
    </div>
  );
}

const useStatetoProps=(state:any)=>{return {data:state.DataBySaga}};
const useDispatchToProps=(dispatch:any)=>{
  return {myfunc:()=>{dispatch({ type: "TempList" })}}}

export default connect(useStatetoProps,useDispatchToProps)(TempList);
