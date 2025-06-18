import React from "react";
import { useNavigate } from "react-router-dom";

export default function UseNavigateHook() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact", { state: { id: "228828288", name: "mohan" } });
  };
  return (
    <>
      <h1>Welcome to the useNavigate hook</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Redirect to Contact Page
      </button>
    </>
  );
}
