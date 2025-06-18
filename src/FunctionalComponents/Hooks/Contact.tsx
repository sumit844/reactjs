import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const data: any = useLocation();

  console.log(data);
  return (
    <div>
      Welcome to the contact page. ID={data.state.id}
      Name={data.state.name}
      Welcome
    </div>
  );
}
