"use client";

import React, { useState, ReactNode, MouseEvent, ReactElement, useEffect } from "react";
import Button from "../button/Button";
import { useMediaQuery } from "react-responsive";

interface TabsProps {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
}

interface TabProps {
  label: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const childArray = React.Children.toArray(children) as ReactElement<TabProps>[];
  const [activeTab, setActiveTab] = useState(childArray[0]?.props?.label);



  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  // useEffect(()=>{
  //   if(!isSmallScreen){
  //     setActiveTab(childArray[0]?.props?.label)
  //   }
  // },[activeTab]);

  return (
    <>
      <div className="mx-6 mt-2 lg:mt-20 flex max-w-max rounded-t-lg overflow-hidden">
        {childArray.map((child,index) => (
          <Button
            key={index || child.props?.label}
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

      {childArray.map((child,index) => {
        if (child.props.label === activeTab) {
          return (
            <div key={index} className="w-full">
              {child.props.children}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div data-label={label} className="hidden">
      {children}
    </div>
  );
};

