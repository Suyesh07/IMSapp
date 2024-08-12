
"use client"

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-1/5 bg-slate-600 text-white flex flex-col flex-wrap gap-6">
        <h1>SideBar</h1>
        <aside className="flex flex-col">
          <Link href="DashBoard">DashBoard</Link>
          <Link href="Sales">Sales</Link>
          <Link href="Item">Item</Link>
          <Link href="Role">Role</Link>
          <Link href="Customer">Customer</Link>
          <Link href="User">User</Link>
          <Link href="Setting">Setting</Link>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
