"use client"
import React from "react";

function CustomInput(props: any) {
  return (
    <div className="flex flex-col w-[70%] gap-2">
      <label htmlFor="form">{props.label}</label>
      <input
        className="rounded pl-2 bg-gray-100 h-9"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default CustomInput;
