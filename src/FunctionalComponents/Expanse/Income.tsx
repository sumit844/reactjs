import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { AppDataContext } from "../AppData";

interface IIncome {
  incomeName: string;
  incomeAmount: string;
  id: string;
}
const Income = () => {
  let tempAppData: any = useContext(AppDataContext);
  let formData1 = { incomeName: "", incomeAmount: "" };
  const [formData, setFormData] = useState(formData1);
  const [formValidataError, setFormValidationError] = useState({ incomeNameError: "", incomeAmountError: "" });
  const [incomeList, setIncomeList] = useState<IIncome[]>();

  const changeFormFieldValue = (event: any) => {
    let templObj: any = {};

    templObj[event.target.name] = event.target.value;

    setFormData((prevFormData) => {
      return { ...prevFormData, ...templObj };
    });
  };

  const validateForm = (formData1: { incomeName: string; incomeAmount: string }) => {
    let tempObject = { incomeNameError: "", incomeAmountError: "" };
    if (formData1.incomeName === "") {
      tempObject.incomeNameError = "IncomeName can not be empty";
    }
    if (formData1.incomeAmount === "") {
      tempObject.incomeAmountError = "IncomeAmount can not be empty";
    }
    if (formData1.incomeName !== "" && formData1.incomeAmount !== "") {
      let ids = Number(Math.random() * 100000);
      let tempObj: IIncome = {
        incomeName: formData1.incomeName,
        incomeAmount: formData1.incomeAmount,
        id: parseInt(ids.toString()).toString(),
      };
      setIncomeList((prevIncomeList) => {
        return prevIncomeList ? [...prevIncomeList, tempObj] : [tempObj];
      });
      tempAppData.creditMountToBank(parseInt(tempObj.incomeAmount));
    }
    setFormValidationError({ ...formValidataError, ...tempObject });
  };

  const hasFormSubmit = (event: any) => {
    event.preventDefault();
    validateForm(formData);
  };

  useEffect(() => {
    console.log(incomeList);
    setFormData((prev) => prev);
  }, [incomeList]);
  return (
    <div className="m-4">
      <h3>Income</h3>
      <div className="">
        <form>
          <Row>
            <Col sm={6}>
              <label className="mt-4">Income Name: </label>
            </Col>
            <Col sm={6}>
              <input
                className="my-4 py-2"
                width={100}
                type="text"
                name="incomeName"
                value={formData.incomeName}
                placeholder="income name..."
                onChange={(event: any) => {
                  changeFormFieldValue(event);
                }}
              />
              {formValidataError.incomeNameError && <p className="text-danger">{formValidataError.incomeNameError}</p>}
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <label className="mt-4">Income Amount: </label>
            </Col>
            <Col sm={6}>
              <input
                width="100vw"
                className="my-4 py-2"
                type="number"
                name="incomeAmount"
                value={formData.incomeAmount}
                placeholder="income amount..."
                onChange={(event: any) => {
                  changeFormFieldValue(event);
                }}
              />
              {formValidataError.incomeAmountError && <p className="text-danger">{formValidataError.incomeAmountError}</p>}
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
                Add Income
              </button>
            </Col>
          </Row>
        </form>
        <div className="row m-2">
          {incomeList &&
            incomeList.map((income) => {
              return (
                <div className="my-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {income.incomeName}-{income.incomeAmount}
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

export default Income;
