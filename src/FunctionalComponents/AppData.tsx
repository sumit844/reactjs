import React, { createContext, useState } from "react";

export const AppDataContext = createContext({});

type userData = {
  loginStatus: boolean;
  useName: string;
  amountInBank: number;
};
const AppData = (props: any) => {
  let intialObj: userData = {
    loginStatus: true,
    useName: "user 1",
    amountInBank: 0,
  };
  const [appData, setAppData] = useState<userData>(intialObj);

  const login = () => {
    setAppData({ ...appData, loginStatus: !appData.loginStatus });
  };
  const creditMountToBank = (amount: number) => {
    setAppData({ ...appData, amountInBank: appData.amountInBank + amount });
  };
  const debitMountToBank = (amount: any) => {
    setAppData({ ...appData, amountInBank: appData.amountInBank - amount });
  };

  return <AppDataContext.Provider value={{ appData, login, creditMountToBank, debitMountToBank }}>{props.children}</AppDataContext.Provider>;
};

export default AppData;
