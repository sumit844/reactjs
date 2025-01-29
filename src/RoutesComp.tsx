import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./FunctionalComponents/PageNotFound";
import ExpanseTracker from "./FunctionalComponents/Expanse/ExpanseTracker";
import CurrencyConvertor from "./FunctionalComponents/CurrencyConvertor";
import CountryList from "./ClassComponents/CountryList";
import StateList from "./FunctionalComponents/StateList";
import Contacts from "./FunctionalComponents/Contacts";
import { useContext, useEffect, useState } from "react";
import { AppDataContext } from "./FunctionalComponents/AppData";
import RefClass from "./ClassComponents/refClass";
import RefFunction from "./FunctionalComponents/RefFunction";
import PassingFunctionParent from "./FunctionalComponents/PassingFunctionParent";
import DigitalClock from "./ClassComponents/DigitalClock";
import EmiCalculator from "./ClassComponents/EmiCaculator";
import SignUp from "./FunctionalComponents/Forms/SignUp";
import ParentComp from "./ClassComponents/ReactContext/ParentComp";
import Github from "./FunctionalComponents/Github";
import Countries from "./FunctionalComponents/Product";
import Todo from "./ClassComponents/Todo";
import Counter from "./ClassComponents/Counter";
import ProtectedCom from "./FunctionalComponents/ProtectedCom";
import Weather from "./FunctionalComponents/Weather";
import Login from "./FunctionalComponents/Forms/Login";
import Accounts from "./FunctionalComponents/Secure/Accounts";
import UseLayoutEffectHook from "./FunctionalComponents/Hooks/UseLayoutEffectHook";
import UseMemoHook from "./FunctionalComponents/Hooks/UseMemoHook";
import ColorApp from "./FunctionalComponents/ColorApp";
export default function RoutesComp() {
  const AppContextData1: any = useContext(AppDataContext);
  console.log("hi", AppContextData1);
  console.log("hii", AppContextData1.appData.loginStatus);
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/Countries" element={<Countries />} />
      <Route path="/Github" element={<Github />} />
      <Route path="/refClass" element={<RefClass />} />
      <Route path="/refFunc" element={<RefFunction />} />
      <Route path="/PassingFunctionParent" element={<PassingFunctionParent />} />
      <Route path="/DigitalClock" element={<DigitalClock />} />
      <Route path="/EmiCalculator" element={<EmiCalculator />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUpWithParams/:id" element={<SignUp />} />
      <Route path="/ParentComp" element={<ParentComp />} />
      <Route path="/ExpanseTracker" element={<ExpanseTracker />} />
      <Route path="/CurrencyConvertor" element={<CurrencyConvertor />} />
      <Route path="/countrylist" element={<CountryList />} />
      <Route path="/uselayoutEffectHook" element={<UseLayoutEffectHook />} />
      <Route path="/usememohook" element={<UseMemoHook />} />
      <Route path="/ColorApp" element={<ColorApp />} />

      {<Route path="/login" element={<Login />} />}
      <Route path="/statelist" element={<StateList />} />
      {AppContextData1.appData.loginStatus ? <Route path="/statelistnew" element={<StateList />} /> : <Route path="/statelistnew" element={<CountryList />} />}
      <Route
        path="/weather"
        element={
          <ProtectedCom>
            <Weather />
          </ProtectedCom>
        }
      />
      <Route
        path="/accounts"
        element={
          <ProtectedCom>
            <Accounts />
          </ProtectedCom>
        }
      />
      <Route path="statelist">
        <Route path="countrylist" element={<CountryList />} />
      </Route>
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
