import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";
import axios from 'axios';

const Action = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJiaGF0IiwibWlkZGxlX25hbWUiOm51bGwsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoiYmhoYXR0dEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR3Nklrb1ZoVU5xdm91dUx0M0cyNXVPWW15bGpvVnR1L2NYSnd0aFFIVTlOYXpRUlFhRDJCaSIsInJvbGVfaWQiOjEsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjI3OjU1Ljc5NloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjoyNzo1NS43OTZaIiwiaWF0IjoxNzIyNDg5Nzg4fQ.7aum0tjT_Jmas0L6esbuOD4Omw6HT8NB9iV1kjSjIzA";
  const router = useRouter();
  const deleteCustomer = async () => {
    try {
      const response = await axios.delete("http://localhost:8000/customers/1", {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-6 flex flex-row gap-3 text-lg items-center mt-4">
      <RiEdit2Fill
        onClick={() => router.push("/customer/add")}
        className="border-black"
      />
      <MdDeleteForever className="border-black" onClick={deleteCustomer} />
    </div>
  );
}

export default Action
