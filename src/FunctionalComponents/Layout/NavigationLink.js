import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { AppDataContext } from "../AppData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { LogOutUserAction } from "../../Redux/Actions/LoginActions";

const NavigationLink = () => {
  const AppDataContextnew = useContext(AppDataContext);
  useEffect(() => { }, [AppDataContextnew.appData.loginStatus])
  const loginData = useSelector((state) => state.logindata);
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(LogOutUserAction({ userName: '', loginStatus: false }))
  }
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
              <li class="nav-item ml-auto"> <Link to="/EmiCalculator" className="nav-link text-white">
                EmiCalculator{" "}
              </Link></li>
              <li class="nav-item ml-auto"><Link to="/productlistingpage" className="nav-link text-white">
                productlistingpage{" "}
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
                    <Link to="/CurrencyConvertor" className="dropdown-item">
                      CurrencyConvertor{" "}
                    </Link>
                  </li>
                  <li><Link to="/Github" className="dropdown-item">
                    GitHub Issues{" "}
                  </Link></li>
                  <li><Link to="/useimperativehandlerhook" className="dropdown-item">
                    useimperativehandlerhook{" "}
                  </Link></li>
                  <li><Link to="/uselayoutEffectHook" className="dropdown-item">
                    uselayoutEffectHook{" "}
                  </Link></li>
                  <li><Link to="/usememohook" className="dropdown-item">
                    usememohook{" "}
                  </Link></li>
                  <li><Link to="/usecallback" className="dropdown-item">
                    usecallback{" "}
                  </Link></li>
                  <li><Link to="/usenavigatehook" className="dropdown-item">
                    usenavigatehook{" "}
                  </Link></li>
                  <li><Link to="/contact" className="dropdown-item">
                    contact{" "}
                  </Link></li>
                  <li><Link to="/usereducerhook" className="dropdown-item">
                    usereducerhook{" "}
                  </Link></li>
                  <li><Link to="/productlistingpage" className="dropdown-item">
                    productlistingpage{" "}
                  </Link></li>
                  <li><Link to="/productdetail" className="dropdown-item">
                    productdetail{" "}
                  </Link></li>
                  <li>
                    <Link to="/ExpanseTracker" className="dropdown-item">
                      ExpanseTracker{" "}
                    </Link></li>
                  <li>
                    <Link to="/orders" className="dropdown-item">
                      Order History{" "}
                    </Link></li>
                  <li>
                    <Link to="/accounts" className="dropdown-item">
                      Accounts{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/matchball" className="dropdown-item">
                      Match Ball{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/snakegame" className="dropdown-item">
                      Snake Game{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/templist" className="dropdown-item">
                      Temp List{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/addproducts" className="dropdown-item">
                    Add Products{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex col float-end" role="search">
              {/* <input className="form-control me-2 float-end" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn btn-dark mr-2 mymargin" type="submit">Search</button>

            </form>
            <button className="btn btn-dark ml-2 mymargin" onClick={() => {
              console.log("button cickc", AppDataContextnew)
              AppDataContextnew.enableDarkTheme(!AppDataContextnew.appData.darkTheme)

            }}>Dark Theme</button>

            {!loginData?.loginStatus ? (<Link to="/loginbyredux" className="ml-4 ml-auto text-end text-white">
              Login2{" "}
            </Link>) : (<><Link to="/Cart" className="nav-item ml-auto">
              <FontAwesomeIcon icon={faCartShopping} size="2x" className="text-white" />
            </Link><button onClick={() => { userLogout() }} className="btn ml-4 ml-auto text-end text-white">
                LogOut{" "}
              </button></>)}



          </div>
        </div>
      </nav>
    </Navbar >
  );
};

export default NavigationLink;
