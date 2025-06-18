import { LOGIN, LOGOUT, PREVIOUSVISITEDURL } from "../Constant/ActionTypeConstant";

export const LoginUserAction = (data: any) => {
  return {
    type: LOGIN,
    payload: data,
  };
};
export const LogOutUserAction = (data: any) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};
export const PreviousUrlVisited = (data: any) => {
  return {
    type: PREVIOUSVISITEDURL,
    payload: data,
  };
};
