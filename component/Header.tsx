"use client";

import React, { useState } from "react";

const Header = () => {
  const [dashboard, setDashboard]=useState()
  return (
    <nav className="flex h-16 justify-end px-4 text-white items-center w-[calc(100%-200px)] bg-slate-900 fixed">
      <div className="flex justify-between w-full">
        <p>Dashboard</p>
        <p>Search</p>
        <p>Bell</p>
        <p>Profile</p>
      </div>
    </nav>
  );
};

export default Header;