import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({ userName: "", passWord: "", email: "" });
  const [formValidataError, setFormValidationError] = useState({ userNameError: "", passWordError: "", emailError: "" });

  const changeFormFieldValue = (event: any) => {
    let templObj: any = {};

    templObj[event.target.name] = event.target.value;

    setFormData((prevFormData) => {
      return { ...prevFormData, ...templObj };
    });
  };

  const validateForm = (formData1: { userName: string; passWord: string; email: string }) => {
    let tempObject = { userNameError: "", passWordError: "", emailError: "" };
    if (formData1.userName === "") {
      console.log("log in");
      tempObject.userNameError = "Username can not be empty";
    }
    if (formData1.passWord === "") {
      tempObject.passWordError = "Password can not be empty";
    }
    if (formData1.email === "") {
      tempObject.emailError = "Email can not be empty";
    }

    if (formData1.passWord !== "") {
      if (formData1.passWord.length < 5) tempObject.passWordError = "Password can not be less than 5 charact";
    }

    setFormValidationError({ ...formValidataError, ...tempObject });
  };

  useEffect(() => {
    console.log(formData);
    console.log(formValidataError);
  }, [formData, formValidataError]);

  const hasFormSubmit = (event: any) => {
    event.preventDefault();
    validateForm(formData);
  };
  return (
    <>
      <h1>Please Register Yourself</h1>
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
          <Col sm={3}>
            <label className="mt-4">Email: </label>
          </Col>
          <Col sm={9}>
            <input
              width="100vw"
              className="my-4 py-2"
              type="email"
              name="email"
              placeholder="please enter Email"
              onChange={(event: any) => {
                changeFormFieldValue(event);
              }}
            />
            {formValidataError.emailError && <p className="text-danger">{formValidataError.emailError}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              className="btn btn-primary"
              type="button"
              onClick={(event) => {
                hasFormSubmit(event);
              }}
            >
              Register
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default SignUp;
