"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-full w-full bg-slate-600 text-white flex flex-col justify-between">
        <aside className="flex flex-col gap-6">
          <p className="h-16 py-6 w-full px-8">Logo</p>
          <Link
            className={`w-full px-8 link ${
              pathname === "/dashboard" ? "active" : ""
            }`}
            href="/dashboard"
          >
            DashBoard
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/sales" ? "active" : ""
            }`}
            href="/sales"
          >
            Sales
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/item" ? "active" : ""
            }`}
            href="/item"
          >
            Item
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/role" ? "active" : ""
            }`}
            href="/role"
          >
            Role
          </Link>
          <Link
            className={`w-full px-8 link ${
              pathname === "/customer" ? "active" : ""
            }`}
            href="/customer"
          >
            Customer
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/user" ? "active" : ""
            }`}
            href="/user"
          >
            User
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/setting" ? "active" : ""
            }`}
            href="/setting"
          >
            Setting
          </Link>
        </aside>
        <div className="py-6 w-full px-8">Log Out</div>
      </div>
    </>
  );
};

export default Sidebar;
