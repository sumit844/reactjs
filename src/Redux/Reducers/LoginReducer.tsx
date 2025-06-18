import { LOGIN } from "../Constant/ActionTypeConstant";
import { LOGOUT, PREVIOUSVISITEDURL } from "../Constant/ActionTypeConstant";

export const LoginReducer = (state: any = {}, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case LOGIN: {
      return { ...state, ...payload };
    }
    case LOGOUT: {
      return { ...state, ...payload };
    }
    case PREVIOUSVISITEDURL: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
