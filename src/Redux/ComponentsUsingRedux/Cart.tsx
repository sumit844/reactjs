import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart, RemoveItemFromCart, CheckOutItems, ClearCart, DeleteItemFromCart } from "../Actions/Actions";
import { useNavigate } from "react-router-dom";
import { PreviousUrlVisited } from "../Actions/LoginActions";

export default function Cart() {
  const navigate = useNavigate();
  const cartData: any = useSelector((state: any) => {
    return state.Cart;
  });
  const loginData: any = useSelector((state: any) => {
    return state.logindata;
  });
  const dispatch = useDispatch();
  let totalPrice = 0;
  useEffect(() => {
    if (!loginData.loginStatus) {
      dispatch(PreviousUrlVisited({ previousUrl: window.location.pathname }));
      navigate("/loginbyredux");
    }
  }, [loginData.loginStatus]);
  return (
    <div>
      {cartData.length == 0 && <h1>Your Cart is Empty</h1>}

      {cartData.length > 0 && (
        <>
          <h1>Welcome to your cart</h1>
          <p>You have selected {cartData.length} products</p>

          <table className="table">
            <thead>
              <tr>
                <th className="col-1">Sr. No.</th>
                <th className="col-3">Title</th>
                <th className="col-2">Price (USD)</th>
                <th className="col-2">Image</th>
                <th className="col-1">Quantity</th>
                <th className="col-1">Actions</th>
                <th className="col-1">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item: any, index: number) => {
                totalPrice = totalPrice + item.price;
                return (
                  <tr key={index + "wel"}>
                    <td className="col-1">{index + 1}</td>
                    <td className="col-3">{item.title}</td>
                    <td className="col-2">{item.price}</td>
                    <td className="col-2">
                      <img src={item.image} alt={item.title} style={{ width: "30%", height: "10%" }} />
                    </td>
                    <td className="col-1">{item.productCount}</td>
                    <td className="col-2">
                      {" "}
                      <button
                        className="p-2"
                        onClick={() => {
                          dispatch(AddItemToCart(item));
                        }}
                      >
                        +
                      </button>
                      <button
                        className="p-2"
                        onClick={() => {
                          dispatch(RemoveItemFromCart(item));
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="p-2"
                        onClick={() => {
                          dispatch(DeleteItemFromCart(item));
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <div>
        {cartData.length > 0 && (
          <>
            <h3>
              Total Price (USD):
              {cartData.reduce((acc: number, item: any, index: number) => {
                const totalValue = acc + item.price * item.productCount;

                return totalValue;
              }, 0)}
            </h3>
            <div className="row">
              <button
                className="col-4 bg-green bg-success p-3"
                onClick={() => {
                  dispatch(CheckOutItems(cartData));
                  
                  navigate("/checkout");
                }}
              >
                Proceed to checkout
              </button>
              <button
                className="col-4 bg-green bg-success m-auto p-3"
                onClick={() => {
                  navigate("/productlistingpage");
                }}
              >
                Continue Shopping....
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
