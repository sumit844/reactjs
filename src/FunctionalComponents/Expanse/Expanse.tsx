import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { AppDataContext } from "../AppData";
interface Iexpanse {
  expanseName: string;
  expanseAmount: string;
  id: string;
}
const Expanse = () => {
  let tempAppData: any = useContext(AppDataContext);
  let formData1 = { expanseName: "", expanseAmount: "" };
  const [formData, setFormData] = useState(formData1);
  const [formValidataError, setFormValidationError] = useState({ expanseNameError: "", expanseAmountError: "" });
  const [expanseList, setExpanseList] = useState<Iexpanse[]>();

  const changeFormFieldValue = (event: any) => {
    let templObj: any = {};

    templObj[event.target.name] = event.target.value;

    setFormData((prevFormData) => {
      return { ...prevFormData, ...templObj };
    });
  };

  const validateForm = (formData1: { expanseName: string; expanseAmount: string }) => {
    let tempObject = { expanseNameError: "", expanseAmountError: "" };
    if (formData1.expanseName === "") {
      tempObject.expanseNameError = "expanseName can not be empty";
    }
    if (formData1.expanseAmount === "") {
      tempObject.expanseAmountError = "expanseAmount can not be empty";
    }
    if (formData1.expanseName !== "" && formData1.expanseAmount !== "") {
      let ids = Number(Math.random() * 100000);
      let tempObj: Iexpanse = {
        expanseName: formData1.expanseName,
        expanseAmount: formData1.expanseAmount,
        id: parseInt(ids.toString()).toString(),
      };
      setExpanseList((prevexpanseList) => {
        return prevexpanseList ? [...prevexpanseList, tempObj] : [tempObj];
      });
      tempAppData.debitMountToBank(parseInt(tempObj.expanseAmount));
    }
    setFormValidationError({ ...formValidataError, ...tempObject });
  };

  const hasFormSubmit = (event: any) => {
    event.preventDefault();
    validateForm(formData);
  };

  useEffect(() => {
    console.log(expanseList);
    setFormData(formData1);
  }, [expanseList]);
  return (
    <div className="m-4">
      <h3>Expanse</h3>
      <div className="">
        <form>
          <Row>
            <Col sm={6}>
              <label className="mt-4">Expanse Name: </label>
            </Col>
            <Col sm={6}>
              <input
                className="my-4 py-2"
                width={100}
                type="text"
                name="expanseName"
                value={formData.expanseName}
                placeholder="expanse name..."
                onChange={(event: any) => {
                  changeFormFieldValue(event);
                }}
              />
              {formValidataError.expanseNameError && <p className="text-danger">{formValidataError.expanseNameError}</p>}
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <label className="mt-4">Expanse Amount: </label>
            </Col>
            <Col sm={6}>
              <input
                width="100vw"
                className="my-4 py-2"
                type="number"
                name="expanseAmount"
                value={formData.expanseAmount}
                placeholder="Expanse amount..."
                onChange={(event: any) => {
                  changeFormFieldValue(event);
                }}
              />
              {formValidataError.expanseAmountError && <p className="text-danger">{formValidataError.expanseAmountError}</p>}
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
                Add expanse
              </button>
            </Col>
          </Row>
        </form>
        <div className="row m-2">
          {expanseList &&
            expanseList.map((expanse) => {
              return (
                <div className="my-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {expanse.expanseName}-{expanse.expanseAmount}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Expanse;
