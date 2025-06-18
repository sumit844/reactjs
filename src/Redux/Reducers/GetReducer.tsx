import { ALLPRODUCTS, PRODUCTDETAIL, ADDITEMTOCART, REMOVEITEMFROMCART, CHECKOUTITEMS, CLEARCART, DELETEITEMFROMCATY } from "../Constant/ActionTypeConstant";

const intialState = [
  {
    id: "123",
    title: "Mohan",
  },
  {
    id: "1234",
    title: "Mohan4",
  },
  {
    id: "1235",
    title: "Mohan5",
  },
  {
    id: "1236",
    title: "Mohan6",
  },
  {
    id: "1237",
    title: "Mohan7",
  },
];
export const GetProducts = (states: any = intialState, action: any) => {
  switch (action.type) {
    case ALLPRODUCTS: {
      return [...action.payload];
    }
    default: {
      return states;
    }
  }
};
export const GetProduct = (states: any = {}, action: any) => {
  switch (action.type) {
    case PRODUCTDETAIL: {
      return { ...action.payload };
    }
    default: {
      return states;
    }
  }
};
const isProductAddedIntheList = (data: any, payload: any) => {
  console.log("data", data);
  console.log("payload", payload);
  for (let item of data) {
    if (item.id === payload.id) {
      return true;
    }
  }

  return false;
};
export const AddItemToCart = (state: any = [], action: any) => {
  switch (action.type) {
    case ADDITEMTOCART: {
      const isExists = isProductAddedIntheList(state, action.payload);

      if (isExists) {
        const productList = state?.map((item: any) => {
          if (item.id === action.payload.id) {
            item.productCount = item.productCount + 1;
          }
          return item;
        });

        return productList;
      } else {
        return [...state, action.payload];
      }
    }
    case REMOVEITEMFROMCART: {
      const isExists = isProductAddedIntheList(state, action.payload);
      if (isExists) {
        const productList = state?.map((item: any) => {
          if (item.id === action.payload.id) {
            item.productCount = item.productCount - 1;
          }
          return item;
        });

        return productList.filter((item: any) => {
          return item.productCount !== 0;
        });
      } else {
        return state;
      }
    }
    case CLEARCART: {
      return [];
    }
    case DELETEITEMFROMCATY: {
      let tempItems = state.filter((item: any) => item.id !== action.payload.id);
      console.log("tempItems", tempItems);
      return [...tempItems];
    }
    default: {
      return state;
    }
  }
};

export const CheckOutItemsFromCart = (state: any = [], action: any) => {
  switch (action.type) {
    case CHECKOUTITEMS: {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
};
