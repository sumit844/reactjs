import React, { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppDataContext } from "./AppData";

export default function ProtectedCom(props: any) {
  const temData: any = useContext(AppDataContext);
  console.log("TempData", temData);
  if (!temData.appData.loginStatus) {
    return <Navigate to="/login" replace />;
  }
  return <>{props.children}</>;
}
