"use client";

import React, { useState } from "react";
import CustomInput from "../../../../component/CustomInput";
import axios from "axios";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const token =
    "eyJpZCI6MTIsImZpcnN0X25hbWUiOiJiaGF0IiwibWlkZGxlX25hbWUiOm51bGwsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoiYmhoYXR0dEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR3Nklrb1ZoVU5xdm91dUx0M0cyNXVPWW15bGpvVnR1L2NYSnd0aFFIVTlOYXpRUlFhRDJCaSIsInJvbGVfaWQiOjEsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjI3OjU1Ljc5NloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjoyNzo1NS43OTZaIiwiaWF0IjoxNzIyNDg5Nzg4fQ";

  const createCustomer = async () => {
    const isVendor=""
    try {
      const response = await axios.post(
        "http://localhost:8000/customers",
        {
          name: `${firstName} ${lastName}`,
          is_vender: isVendor,
          email: email,
          phone: phone,
          street_address: "brt",
          city: "brt",
          province: "koshi",
          zip_code: 45678,
        },
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const updateCustomer = async () => {
    const isVendor = "";
    try {
      const response = await axios.patch(
        "http://localhost:8000/customers",
        {
          name: `${firstName} ${lastName}`,
          is_vender: isVendor,
          email: email,
          phone: phone,
          street_address: "brt",
          city: "brt",
          province: "koshi",
          zip_code: 45678,
        },
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
          onClick={createCustomer}
          className="mt-12 border-none w-40 p-1 rounded-lg bg-blue-600 text-white"
        ></input>
      </form>
    </div>
  );
};

export default Add;
