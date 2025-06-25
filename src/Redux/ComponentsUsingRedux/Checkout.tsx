import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ClearCart } from "../Actions/Actions";



const Checkout = () => {
  const checkoutData: any = useSelector((state: any) => {
    return state.Order;
  });

  const dispatch = useDispatch();
  const loginData: any = useSelector((state: any) => {
    return state.logindata;
  });
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const navigate = useNavigate();
  let totalPrice = 0;

  const handleOnChange = (e: any) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };
  const placeOrder = async () => {
    const obj: any = {};
    obj.orderId = (Math.random() * 10000).toString();

    obj.orderDate = new Date().toString();
    obj.totalPrice = checkoutData.reduce(
      (acc: any, item: any) => acc + item.price,
      0
    );

    obj.customerName = loginData.userName;
    obj.PaymentMode = formData?.PaymentMode;
    obj.pincode = formData?.pincode;
    obj.orderAddress = formData?.address;
    obj.paymentStatus = formData?.paymentStatus;
    obj.mobileNumber = formData.mobileNumber;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/placeorder`,
        obj,
        {
          headers: {
            Authorization: loginData.jwtToken,
          },
          validateStatus: function (status) {
            return status === 201 || status === 404;
          },
        }
      );
      if (response.status == 201) {
        setOrderError(false);
        setOrderStatus(true);
        dispatch(ClearCart([]));
        navigate("/orders", { state: { orderId: response.data.orderId } });
      } else {
        setOrderError(true);
        setOrderStatus(false);
      }
    } catch (e) {
      setOrderError(true);
    }
  };

  useEffect(() => {
    console.log("orderError", orderError);
  }, [orderError]);


  
  return (
    <>
      {!orderStatus && !orderError ? (
        <div>
          <p>Here are the details of your order</p>
          <div className="Container">
            {checkoutData.length == 0 && <h1>Your Cart is Empty</h1>}
            <div className="Row" style={{ marginTop: "5rem" }}>
              <div className="col-12">
                {checkoutData.length > 0 && (
                  <>
                    <h1>Checkout Detail</h1>
                    <p>You have selected {checkoutData.length} products</p>

                    <table className="table">
                      <thead>
                        <tr>
                          <th className="col-1">Sr. No.</th>
                          <th className="col-3">Title</th>
                          <th className="col-2">Price (USD)</th>
                          <th className="col-2">Image</th>
                          <th className="col-1">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkoutData.map((item: any, index: number) => {
                          totalPrice = totalPrice + item.price;
                          return (
                            <tr key={index + "wel"}>
                              <td className="col-1">{index + 1}</td>
                              <td className="col-3">{item.title}</td>
                              <td className="col-2">{item.price}</td>
                              <td className="col-2">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  style={{ width: "30%", height: "10%" }}
                                />
                              </td>
                              <td className="col-1">{item.productCount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
            <div className="Row">
              <h1>Please fill below details</h1>
              Pincode:
              <input
                type="text"
                className="form-control"
                name="pincode"
                onChange={handleOnChange}
              />
              Address:
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={handleOnChange}
              />
              Mobile:
              <input
                type="text"
                className="form-control"
                name="mobileNumber"
                onChange={handleOnChange}
              />
            </div>
            <div className="Row">
              <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Payment Mode
              </h3>
              <select
                className="form-control"
                name="PaymentMode"
                onChange={handleOnChange}
              >
                <option value="">Please select a value</option>
                <option value="COD">COD</option>
                <option value="UPI">UPI</option>
                <option value="WALLET">Wallet</option>
                <option value="EMI">EMI</option>
              </select>
            </div>
            <div className="Row">
              <button
                className="btn btn-primary"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                onClick={() => {
                  setFormData({ ...formData, paymentStatus: true });
                }}
              >
                Mark payment as Done
              </button>
            </div>
            <div className="Row">
              <button
                onClick={() => {
                  placeOrder();
                }}
                className="btn btn-primary"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {orderStatus && <h1>Order Placed Successfully</h1>}
          {orderError && <h1>Order Placed Failed</h1>}
        </>
      )}
    </>
  );
};

export default Checkout;
