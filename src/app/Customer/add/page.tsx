"use client";

import React, { useState } from "react";
import CustomInput from "../../../../component/CustomInput";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");

  return (
    <div className="bg-slate-200 w-full flex items-center justify-center my-3">
      <form
        action="html"
        className="rounded-lg w-[600px] py-6 bg-white text-sm font-light flex justify-center flex-col items-center "
      >
        <CustomInput
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <br />
        <CustomInput
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <br />
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <br />
        <CustomInput
          label="Phone no."
          placeholder="Enter your phone no."
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}
        />
        <br />
        <CustomInput
          label="Province"
          placeholder="Enter your province"
          value={province}
          onChange={(e: any) => setProvince(e.target.value)}
        />
        <br />
        <CustomInput
          label="City"
          placeholder="Enter your city"
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
        />
        <br />
        <CustomInput
          label="Street"
          placeholder="Enter your street address"
          value={street}
          onChange={(e: any) => setStreet(e.target.value)}
        />
        <br />
        <CustomInput
          label="Zip code"
          placeholder="Enter your zip code"
          value={zip}
          onChange={(e: any) => setZip(e.target.value)}
        />
        <br />
        <div className="w-[70%] justify-start">
          <label htmlFor="street" className=" mt-4 mr-4">
            IsVendor:
          </label>
          <input
            type="checkbox"
            id="no"
            name="fav_language"
            defaultValue="no"
            className="mt-4 "
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-12 border-none w-40 p-1 rounded-lg bg-blue-600 text-white"
        ></input>
      </form>
    </div>
  );
};

export default Add;
