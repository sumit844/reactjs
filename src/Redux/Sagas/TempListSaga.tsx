import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import {SAVEDATEFROMSAGAMIDDLEWARE} from '../Constant/ActionTypeConstant'

function FetchDataFromAPI(){
  return new Promise((resolve,reject)=>{
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((resData) => {
      console.log(resData);
      resolve(resData)
      }).catch((error)=>{
      reject(error)
      })
  })    
};

function* fetchTempList():Generator<any,any> {
try{
 console.log("Welcome to the saga middleware function");
 const data=yield call(FetchDataFromAPI);
 yield put({type:SAVEDATEFROMSAGAMIDDLEWARE,payload:data});
console.log("data",data)
}catch(e){
    console.log("Welcome",e)
    
  }  
}
export default function* TempListSaga() {
yield takeEvery("TempList", fetchTempList);
}
