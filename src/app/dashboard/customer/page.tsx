"use client";

import React from "react";
import CustomerTable from "@/component/CustomerTable";
import { useRouter } from "next/navigation";

const Customer = () => {
  const router = useRouter();
  return (
    <div className=" h-full overflow-hidden flex items-center flex-col">
      <div className="flex justify-between w-[95%] px-4 py-4 shadow-lg shadow-orange-600  border-black bg-slate-500 rounded-xl text-white">
        <p className="text-2xl">Customer/ Vendor</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.push("/customer/add");
          }}
          className="rounded-xl w-28 h-8 bg-slate-900 text-white"
        >
          + Customer
        </button>
      </div>
      <CustomerTable />
    </div>
  );
};

export default Customer;
