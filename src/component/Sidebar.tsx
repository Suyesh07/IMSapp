"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

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
              pathname === "/dashboard/sales" ? "active" : ""
            }`}
            href="/dashboard/sales"
          >
            Sales
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/dashboard/item" ? "active" : ""
            }`}
            href="/dashboard/item"
          >
            Item
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/dashboard/role" ? "active" : ""
            }`}
            href="/dashboard/role"
          >
            Role
          </Link>
          <Link
            className={`w-full px-8 link ${
              pathname === "/dashboard/customer" ? "active" : ""
            }`}
            href="/dashboard/customer"
          >
            Customer
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/dashboard/user" ? "active" : ""
            }`}
            href="/dashboard/user"
          >
            User
          </Link>
          <Link
            className={`link w-full px-8 ${
              pathname === "/dashboard/setting" ? "active" : ""
            }`}
            href="/dashboard/setting"
          >
            Setting
          </Link>
        </aside>
        <p className="py-6 w-full px-8 cursor-pointer" onClick={logout}>
          Log Out
        </p>
      </div>
    </>
  );
};

export default Sidebar;
