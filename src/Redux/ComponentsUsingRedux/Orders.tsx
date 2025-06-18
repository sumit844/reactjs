import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PreviousUrlVisited } from "../Actions/LoginActions";
import axios from "axios";

export default function Orders() {
  const orderData: any = useSelector((state: any) => {
    return state.Order;
  });

  const [currentOrder, setCurrentOrder] = useState<any>({});
  const [allOrder, setAllOrder] = useState<any>([]);

  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData: any = useSelector((state: any) => {
    return state.logindata;
  });


  useEffect(() => {
    if (!loginData.loginStatus) {
      dispatch(PreviousUrlVisited({ previousUrl: window.location.pathname }));
      navigate("/loginbyredux");
    }
  }, [loginData.loginStatus]);
  const orderId = state?.orderId;

  const fetchAllOrdersofThisUser = async () => {
    const userName = loginData.userName;
    try {
      const response = await axios.get(
        `http://localhost:3400/order/getorder/${userName}`
      );
      if (response.status == 200) {
        setAllOrder(response.data);
      }
    } catch (error) {
      console.log("eror", error);
    }
  };

  const fetchPreviousOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3400/order/getorderbyid/${orderId}`
      );
      if (response.status == 200) {
        setCurrentOrder(response.data);
      }
    } catch (error) {
      console.log("eror", error);
    }
  };

  useEffect(() => {
    fetchPreviousOrder();
    fetchAllOrdersofThisUser();
  }, [orderId]);

  let data: any = new Date();
  return (
    <div>
      <div className="m-auto pb-5">
        <h1>Current Order Details</h1>
        <div key={"wel"}>
          <p className="col-3">orderId: {currentOrder?.orderId}</p>
          <p className="col-2">orderDate: {currentOrder?.orderDate}</p>
          <p className="col-3">totalPrice: {currentOrder?.totalPrice}</p>
          <p className="col-2">orderStatus: {currentOrder?.orderStatus}</p>
          <p className="col-3">orderAddress: {currentOrder?.orderAddress}</p>
          <p className="col-2">paymentStatus: {currentOrder?.paymentStatus}</p>
          <p className="col-3">mobileNumber: {currentOrder?.mobileNumber}</p>
          <p className="col-2">pincode: {currentOrder?.pincode}</p>
        </div>
      </div>
      <h1>Previous Order Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="col-1">Order Id</th>
            <th className="col-3">Order Date</th>
            <th className="col-2">Total Pprice</th>
            <th className="col-2">OrderStatus</th>
            <th className="col-1">Order Address</th>
            <th className="col-1">Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {allOrder?.reverse()?.map((item: any, index: number) => {
            return (
              <tr key={index + "wel"}>
                <td className="col-3">{item?.orderId}</td>
                <td className="col-2">{item?.orderDate}</td>

                <td className="col-1">{item.totalPrice}</td>
                <td className="col-3">{item?.orderStatus?"Paid":"Pending"}</td>
                <td className="col-2">{item?.orderAddress}</td>

                <td className="col-1">{item.mobileNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="col-4 bg-green bg-success m-auto p-3"
        onClick={() => {
          navigate("/productlistingpage");
        }}
      >
        Continue Shopping....
      </button>
    </div>
  );
}
