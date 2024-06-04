"use client";
import React, { useState } from "react";
import { DropDown } from "../shared";
import { useMediaQuery } from "react-responsive";

const PropertyTypeDropDown = ({ ...props }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateSearchData({ property_type_id: option.toLowerCase() });
  };

  return (
    <DropDown
      buttonText="Property Type"
      buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
      selectedOption={selectedOption}
      close={true}
    >
      <div className={`w-full md:w-[120px] lg:w-[220px] border-t-[1px]`}>
        <ul
          className="px-2 text-sm border-t-[1px]"
          aria-labelledby="dropdownDelayButton"
        >
          {props.options.length < 1 ? (
            <li className="p-2 text-center">No results found</li>
          ) : (
            <>
              <li className="border-b-[1px]">
                <button
                  className={`${
                    selectedOption === "Property Type"
                      ? "bg-primary-green text-white"
                      : "bg-gray-200"
                  } capitalize block px-4 py-2 hover:bg-primary-green hover:text-white w-full text-left`}
                  onClick={() => handleOptionClick("")}
                >
                  Property Type
                </button>
              </li>
              {props.options.map((item, index) => (
                <li key={index} className="border-b-[1px]">
                  <button
                    className={`${
                      selectedOption === item
                        ? "bg-primary-green text-white"
                        : ""
                    } capitalize block px-4 py-2 hover:bg-primary-green hover:text-white w-full text-left`}
                    onClick={() => handleOptionClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </DropDown>
  );
};

export default PropertyTypeDropDown;
