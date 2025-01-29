import React, { createContext, useState } from "react";

export const AppDataContext = createContext({});

type userData = {
  loginStatus: boolean;
  useName: string;
  amountInBank: number;
  darkTheme: boolean;
  themeColor: string;
};
const AppData = (props: any) => {
  let intialObj: userData = {
    loginStatus: false,
    useName: "user 1",
    amountInBank: 0,
    darkTheme: false,
    themeColor: "",
  };
  const [appData, setAppData] = useState<userData>(intialObj);

  const login = () => {
    setAppData({ ...appData, loginStatus: !appData.loginStatus });
  };
  const login_user = () => {
    setAppData({ ...appData, loginStatus: true });
  };
  const logout_user = () => {
    setAppData({ ...appData, loginStatus: false });
  };
  const update_themeColor = (color: string) => {
    setAppData({ ...appData, themeColor: color });
  };
  const creditMountToBank = (amount: number) => {
    setAppData({ ...appData, amountInBank: appData.amountInBank + amount });
  };
  const debitMountToBank = (amount: any) => {
    setAppData({ ...appData, amountInBank: appData.amountInBank - amount });
  };
  const enableDarkTheme = (theme: any) => {
    setAppData({ ...appData, darkTheme: theme });
  };

  return <AppDataContext.Provider value={{ appData, login, creditMountToBank, debitMountToBank, enableDarkTheme, login_user, logout_user, update_themeColor }}>{props.children}</AppDataContext.Provider>;
};

export default AppData;
