"use client";
import React, { useState } from "react";
import Button from "../button/Button";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    React.Children.toArray(children)[0]?.props?.label
  );

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="mx-6 mt-20 flex max-w-max overflow-hidden rounded-t-lg bg-red-100">
        {React.Children.map(children, (child) => (
          <Button
            key={child.props?.label}
            className={`${
              activeTab === child.props.label
                ? "text-white bg-primary-green"
                : "text-primary-green bg-white"
            } flex-1 py-2 px-7 max-w-max`}
            onClick={(e) => handleClick(e, child.props?.label)}
          >
            {child.props?.label}
          </Button>
        ))}
      </div>

      
        {React.Children.map(children, (child) => {
          if (child.props.label === activeTab) {
            return (
              <div key={child.props.label} className={""}>
                {child.props.children}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};

export const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
