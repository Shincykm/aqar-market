"use client";
import React, { useState } from "react";
import { DropDown } from "../shared";
import { useMediaQuery } from "react-responsive";

const PropertyTypeDropDown = ({ ...props }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateSearchData({ [props.name]: option.toLowerCase() });
  };

  

  return (
    <>
      <label htmlFor="type" className="search-label">
        Type
      </label>
      <DropDown
        buttonText="Residential"
        buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
        selectedOption={selectedOption}
        close={true}
      >
        <div
          id="dropdownDelay"
          className={`bg-white z-[999] overflow-y-scroll scroll-smooth mt-2 lg:mt-4 xl:mt-3 w-full max-h-[150px] ${
            !isSmallScreen ? "rounded-b-lg shadow-lg absolute" : "relative"
          } `}
        >
          <ul
            className="px-2 text-sm border-t-[1px]"
            aria-labelledby="dropdownDelayButton"
          >
            {props.options.length < 1 ? (
              <li className="p-2 text-center">No results found</li>
            ) : (
              props.options.map((item, index) => (
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
              ))
            )}
          </ul>
        </div>
      </DropDown>
    </>
  );
};

export default PropertyTypeDropDown;
