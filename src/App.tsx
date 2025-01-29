import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationLink from "./FunctionalComponents/Layout/NavigationLink";

import "./css/style.css";
import Footer from "./FunctionalComponents/Layout/Footer";

import AppData from "./FunctionalComponents/AppData";

import Theme from "./FunctionalComponents/Theme";
import RoutesComp from "./RoutesComp";
import ColorApp from "./FunctionalComponents/ColorApp";

const App = () => {
  return (
    <BrowserRouter>
      <AppData>
        <Theme>
          <div className={`container App`}>
            <div className="row m-2 p-2">
              <NavigationLink />
            </div>
            <div className="row">
              <div className="col-12 col-sm-2 col-md-1">
                <p>Left</p>
              </div>
              <div className="col-12 col-sm-8 col-md-10">
                <RoutesComp />
              </div>
              <div className="col-12 col-sm-2 col-md-1">
                <p>Right</p>
              </div>
            </div>
            <div className="row bg-secondary mt-4 p-2">
              <Footer />
            </div>
          </div>
        </Theme>
      </AppData>
    </BrowserRouter>
  );
};

export default App;
