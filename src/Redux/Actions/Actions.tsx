import { ALLPRODUCTS, PRODUCTDETAIL, ADDITEMTOCART, REMOVEITEMFROMCART, CHECKOUTITEMS, CLEARCART, DELETEITEMFROMCATY } from "../Constant/ActionTypeConstant";

export const GETALLPRODCUTS = (data: any) => {
  return {
    type: ALLPRODUCTS,
    payload: data,
  };
};

export const AddItemToCart = (data: any) => {
  console.log("Data recieve in the action method", data);
  return {
    type: ADDITEMTOCART,
    payload: data,
  };
};
export const RemoveItemFromCart = (data: any) => {
  console.log("Data recieve in the action method", data);
  return {
    type: REMOVEITEMFROMCART,
    payload: data,
  };
};
export const DeleteItemFromCart = (data: any) => {
  console.log("Data recieve in the action method", data);
  return {
    type: DELETEITEMFROMCATY,
    payload: data,
  };
};

export const ClearCart = (data: any) => {
  console.log("Data recieve in the action method", data);
  return {
    type: CLEARCART,
    payload: [],
  };
};
export const CheckOutItems = (data: []) => {
  console.log("Data recieve in the action method", data);
  return {
    type: CHECKOUTITEMS,
    payload: data,
  };
};

export const GETPRODCUT = (data: any) => {
  return { type: PRODUCTDETAIL, payload: data };
};
