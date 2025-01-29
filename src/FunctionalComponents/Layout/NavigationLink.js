import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { AppDataContext } from "../AppData";

const NavigationLink = () => {
  const AppDataContextnew = useContext(AppDataContext);
  useEffect(() => { }, [AppDataContextnew.appData.loginStatus])
  return (
    <Navbar className={`headerclass bg-secondary ${AppDataContextnew?.appData?.darkTheme ? "bg-black text-white" : " "}`} >
      <nav class="navbar">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Home
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 justify-content-between">
              <li class="nav-item ml-auto flex-fill">
                <Link to="/todo" className="nav-link active text-white" >
                  To Do
                </Link>
              </li>
              <li class="nav-item ml-auto flex-fill">
                <Link to="/Countries" className="nav-link text-white">
                  Countries
                </Link>
              </li>
              <li class="nav-item ml-auto flex-fill">
                <Link to="/weather" className="nav-link text-white">
                  Weather
                </Link>
              </li>
              <li class="nav-item ml-auto">
                <Link to="/accounts" className="nav-link text-white">
                  Accounts{" "}
                </Link>
              </li>
              <li class="nav-item ml-auto"> <Link to="/EmiCalculator" className="nav-link text-white">
                EmiCalculator{" "}
              </Link></li>
              <li className="nav-item ml-auto">
                <Link to="/ExpanseTracker" className="nav-link text-white">
                  ExpanseTracker{" "}
                </Link></li>
              <li className="nav-item ml-auto">
                {!AppDataContextnew?.appData.loginStatus ? (<Link to="/login" className="nav-link text-white">
                  Login{" "}
                </Link>) : (<button onClick={AppDataContextnew.logout_user} className="nav-link text-white">
                  logout{" "}
                </button>)}
              </li>
              <li className="nav-item dropdown flex-fill col">
                <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Insights
                </a>
                <ul className="dropdown-menu col">
                  <li><a className="dropdown-item" href="/">Action</a>

                    <Link to="/DigitalClock" className="dropdown-item">
                      DigitalClock{" "}
                    </Link></li>

                  <li><Link to="/SignUp" className="dropdown-item">
                    SignUp{" "}
                  </Link></li>
                  <li><Link to="/ParentComp" className="dropdown-item" >
                    ParentContext{" "}
                  </Link>
                  </li>

                  <li>
                    <Link to="/refClass" className="dropdown-item" >
                      Ref Class{" "}
                    </Link>
                  </li>
                  <li >
                    <Link to="/refFunc" className="dropdown-item" >
                      Ref Function{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/PassingFunctionParent" className="dropdown-item">
                      Passing Function Parent{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/countrylist" className="dropdown-item">
                      CountryList
                    </Link>
                  </li>
                  <li>
                    <Link to="/statelist" className="dropdown-item">
                      StateList
                    </Link>
                  </li>
                  <li>
                    <Link to="/statelistnew" className="dropdown-item">
                      StateListNew
                    </Link>
                  </li>
                  <li>
                    <Link to="/SignUpWithParams" className="dropdown-item">
                      SignUpWithParams
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacts" className="dropdown-item">
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link to="/CurrencyConvertor" className="nav-link text-white">
                      CurrencyConvertor{" "}
                    </Link>
                  </li>
                  <li><Link to="/Github" className="nav-link text-white">
                    GitHub Issues{" "}
                  </Link></li>

                </ul>
              </li>
            </ul>
            <form className="d-flex col float-end" role="search">
              {/* <input className="form-control me-2 float-end" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn btn-dark" type="submit">Search</button>

            </form>
            <button className="btn btn-dark pl-1" onClick={() => {
              console.log("button cickc", AppDataContextnew)
              AppDataContextnew.enableDarkTheme(!AppDataContextnew.appData.darkTheme)

            }}>Dark Theme</button>
          </div>
        </div>
      </nav>
    </Navbar >
  );
};

export default NavigationLink;
