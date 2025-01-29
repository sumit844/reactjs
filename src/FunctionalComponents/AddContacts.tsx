import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const AddContacts = (props: any) => {
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
      tempObject.userNameError = "Name can not be empty";
    }
    if (formData1.passWord === "") {
      tempObject.passWordError = "Mobile Number can not be empty";
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
    const obj = {
      id: Math.floor(Math.random() * 100000),
      name: formData.userName,
      Email: formData.email,
      Mobile: formData.passWord,
    };
    fetch("http://localhost:3006/constacts", {
      method: "POST",
      body: JSON.stringify(obj),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        setFormData({ userName: "", passWord: "", email: "" });
        props.updateData();
      }
    });
  };
  return (
    <>
      <h1>Please Add New Contacts</h1>
      <form>
        <Row>
          <Col sm={3}>
            <label className="mt-4">Name: </label>
          </Col>
          <Col sm={9}>
            <input
              className="my-4 py-2"
              width={100}
              type="text"
              name="userName"
              value={formData.userName}
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
            <label className="mt-4">Mobile: </label>
          </Col>
          <Col sm={9}>
            <input
              className="my-4 py-2"
              type="number"
              name="passWord"
              value={formData.passWord}
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
              value={formData.email}
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

export default AddContacts;
