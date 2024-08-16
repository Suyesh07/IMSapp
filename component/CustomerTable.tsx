import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Action from "./Action";
import axios from "axios";

const CustomerTable = () => {
  const router = useRouter();
  const tableHeader = [
    "Name",
    "Email",
    "Phone Number",
    "Address",
    "IsVendor",
    "Actions",
  ];
  const data = [
    {
      name: "Prabhat",
      email: "bhat@gmail.com",
      phone: "1234567890",
      address: "Mahendrachowk, Brt, Koshi -56613",
      isVendor: "No",
    },
    {
      name: "Prabhat Bhattarai",
      email: "",
      phone: "",
      address: "",
      isVendor: "",
      action: "",
    },
    { name: "", email: "", phone: "", address: "", isVendor: "", action: "" },
    { name: "", email: "", phone: "", address: "", isVendor: "", action: "" },
  ];

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJiaGF0IiwibWlkZGxlX25hbWUiOm51bGwsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoiYmhoYXR0dEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR3Nklrb1ZoVU5xdm91dUx0M0cyNXVPWW15bGpvVnR1L2NYSnd0aFFIVTlOYXpRUlFhRDJCaSIsInJvbGVfaWQiOjEsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjI3OjU1Ljc5NloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjoyNzo1NS43OTZaIiwiaWF0IjoxNzIyNDg5Nzg4fQ.7aum0tjT_Jmas0L6esbuOD4Omw6HT8NB9iV1kjSjIzA";
  const postTable = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/customers",
        {
          name: "Test Bhattarai",
          is_vender: true,
          email: "prabhat@g.com",
          phone: 1234567,
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
  const deleteCustomer = async () => {
    const isVendor = "";
    try {
      const response = await axios.delete(
        "http://localhost:8000/customers/1",
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
    <div>
      <div className="relative overflow-x-auto mt-6 ml-10">
        <table className="w-[95%] text-sm text-left rtl:text-right border-b-slate-500">
          <thead className="text-xs text-gray-700 capatalize bg-gray-300 border-slate-700 font-semibold">
            <tr>
              {tableHeader.map((header) => (
                <th scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr className="bg-white border-b" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {value.name}
                </th>
                <td className="px-6">{value.email}</td>
                <td className="px-6">{value.phone}</td>
                <td className="px-6 text-wrap">{value.address}</td>
                <td className="px-6">{value.isVendor}</td>
                <td>
                  <Action />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
