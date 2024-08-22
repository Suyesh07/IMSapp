"use client";
import React, { useState } from "react";
import CustomInput from "../../component/CustomInput";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const token = response.data.token;
      Cookies.set("token", token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col m-8 items-center justify-center bg-slate-300 rounded-xl py-9 w-2/3 shadow-sm shadow-zinc-500">
      <CustomInput
        label="Email"
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <CustomInput
        label="Password"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        className="bg-blue-600 shadow-orange-300 text-white px-4 mt-4 w-44 h-8 rounded-xl"
        onClick={handleSubmit}
      >
        login
      </button>
    </div>
  );
};
export default Login;
