import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationLink = () => {
  return (
    <Navbar className="headerclass bg-secondary">
      <nav class="navbar navbar-expand-lg">
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
              <li class="nav-item ml-auto">
                <Link to="/Github" className="nav-link text-white">
                  GitHub Issues{" "}
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
                <Link to="/CurrencyConvertor" className="nav-link text-white">
                  CurrencyConvertor{" "}
                </Link></li>
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

                </ul>
              </li>
            </ul>
            <form className="d-flex col float-end" role="search">
              <input className="form-control me-2 float-end" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </Navbar>
  );
};

export default NavigationLink;
