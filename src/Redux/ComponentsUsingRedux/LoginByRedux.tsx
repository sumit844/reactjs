import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { LoginUserAction } from "../Actions/LoginActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginByRedux() {
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const loginData = useSelector((state: any) => state.logindata);
  const navigate = useNavigate();
  const inputRef2: any = useRef();
  const errorRef: any = useRef();
  const dispath = useDispatch();
  if (loginData.loginStatus) {
    if (loginData.previousUrl) {
      navigate(loginData.previousUrl);
    } else {
      navigate("/productlistingpage");
    }
  }

  const checkuserLogin = async (username: string, password: string) => {
    const data = { username: username, password: password };

    try {
      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/loginuser`,
        data
      );

      console.log("myresponse", response.data);
      if (response.status == 200) {
        dispath(
          LoginUserAction({
            userName: response?.data?.username,
            jwtToken: response?.data?.token,
            loginStatus: true,
          })
        );
        navigate("/productlistingpage");
      } else {
        errorRef.current.innerHTML = "Your Username or password is wrong";
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  const loginUser = () => {
    const userName = inputRef1?.current?.value;
    const password = inputRef2?.current?.value;

    if (userName !== "" && password !== "") {
      if (userName === "mohan" && password === "12345") {
        checkuserLogin(userName, password);
        // dispath(LoginUserAction({ userName: userName, loginStatus: true }));
        // errorRef.current.innerHTML = "";
      } else {
        errorRef.current.innerHTML = "Your Username or password is wrong";
      }
    } else {
      errorRef.current.innerHTML = "Please enter value in all fields";
    }
  };
  return (
    <div>
      <div className="p-4">
        <span> User Name:</span>
        <input type="text" ref={inputRef1} value="mohan" />
      </div>
      <div className="p-4">
        <span>User Password:</span>
        <input type="password" ref={inputRef2} value="12345" />
      </div>
      <div ref={errorRef} className="bg-danger mb-3"></div>
      <div>
        <button
          className="btn bg-success p-2"
          onClick={() => {
            loginUser();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
