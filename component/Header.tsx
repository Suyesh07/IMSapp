"use client";

import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between text-red-600 items-center h-12 px-3 fixed top-0 left-0 right-0 bg-white z-50">
        <p>Logo</p>
        <div className="flex flex-row gap-8">
          <p>Dashboard</p>
          <p>Search</p>
          <p>Bell</p>
          <p>Profile</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
