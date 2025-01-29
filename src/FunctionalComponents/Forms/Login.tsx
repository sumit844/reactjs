import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppDataContext } from "../AppData";

const Login = () => {
  const { id } = useParams();
  const tempAppConstext: any = useContext(AppDataContext);
  const [formData, setFormData] = useState({ userName: "", passWord: "" });
  const [formValidataError, setFormValidationError] = useState({ userNameError: "", passWordError: "" });

  const changeFormFieldValue = (event: any) => {
    let templObj: any = {};
    templObj[event.target.name] = event.target.value;
    setFormData((prevFormData) => {
      return { ...prevFormData, ...templObj };
    });
  };
  const validateForm = (formData1: { userName: string; passWord: string }) => {
    let tempObject = { userNameError: "", passWordError: "" };
    if (formData1.userName === "") {
      console.log("log in");
      tempObject.userNameError = "Username can not be empty";
    }
    if (formData1.passWord === "") {
      tempObject.passWordError = "Password can not be empty";
    }

    if (formData1.passWord !== "") {
      if (formData1.passWord.length < 5) tempObject.passWordError = "Password can not be less than 5 charact";
    }
    setFormValidationError({ ...formValidataError, ...tempObject });
  };

  useEffect(() => {
    console.log(formData);
    console.log(formValidataError);
    console.log("Temp Data", tempAppConstext);
  }, [formData, formValidataError]);

  const hasUserLogin = (event: any) => {
    event.preventDefault();
    validateForm(formData);
    tempAppConstext.login_user();
  };

  return (
    <>
      <h1>Enter Details to Login</h1>
      <form>
        <Row>
          <Col sm={3}>
            <label className="mt-4">UserName: </label>
          </Col>
          <Col sm={9}>
            <input
              className="my-4 py-2"
              width={100}
              type="text"
              name="userName"
              placeholder="please enter your name"
              onChange={(event: any) => {
                changeFormFieldValue(event);
              }}
            />
            {formValidataError.userNameError && <p className="text-danger">{formValidataError.userNameError}</p>}
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <label className="mt-4">Password: </label>
          </Col>
          <Col sm={9}>
            <input
              className="my-4 py-2"
              type="password"
              name="passWord"
              placeholder="please enter Password"
              onChange={(event: any) => {
                changeFormFieldValue(event);
              }}
            />
            {formValidataError.passWordError && <p className="text-danger">{formValidataError.passWordError}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              className="btn btn-primary"
              type="button"
              onClick={(event) => {
                hasUserLogin(event);
              }}
            >
              Login
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default Login;
