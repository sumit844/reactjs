import Countries from "./FunctionalComponents/Product";
import Todo from "./ClassComponents/Todo";
import Counter from "./FunctionalComponents/counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationLink from "./FunctionalComponents/Layout/NavigationLink";
import Github from "./FunctionalComponents/Github";
import "./css/style.css";
import Footer from "./FunctionalComponents/Layout/Footer";
import RefClass from "./ClassComponents/refClass";
import RefFunction from "./FunctionalComponents/RefFunction";
import PassingFunctionParent from "./FunctionalComponents/PassingFunctionParent";
import DigitalClock from "./ClassComponents/DigitalClock";
import EmiCalculator from "./ClassComponents/EmiCaculator";
import SignUp from "./FunctionalComponents/Forms/SignUp";
import ParentComp from "./ClassComponents/ReactContext/ParentComp";
import AppData from "./FunctionalComponents/AppData";
import ExpanseTracker from "./FunctionalComponents/Expanse/ExpanseTracker";
import CurrencyConvertor from "./FunctionalComponents/CurrencyConvertor";

const App = () => {
  return (
    <BrowserRouter>
      <AppData>
        <div className="container App ">
          <div className="row m-2 p-2">
            <NavigationLink />
          </div>
          <div className="row">
            <div className="col-12 col-sm-2 col-md-1">
              <p>Left</p>
            </div>
            <div className="col-12 col-sm-8 col-md-10">
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
                <Route path="/ParentComp" element={<ParentComp />} />
                <Route path="/ExpanseTracker" element={<ExpanseTracker />} />
                <Route path="/CurrencyConvertor" element={<CurrencyConvertor />} />
              </Routes>
            </div>
            <div className="col-12 col-sm-2 col-md-1">
              <p>Right</p>
            </div>
          </div>
          <div className="row bg-secondary mt-4 p-2">
            <Footer />
          </div>
        </div>
      </AppData>
    </BrowserRouter>
  );
};

export default App;
