"use client";

import React from "react";
const Input = ({ ...props }) => {
  return (
    <div className="rounded-[6px] bg-white flex items-center gap-2">
      {props.icons && <label htmlFor={props.id} className="pl-6">
        {props.icons}
      </label>}
      <input
        {...props}
      />
    </div>
  );
};

export default Input;
