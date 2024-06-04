"use client";
import React, { useState } from "react";
import { DropDown } from "../shared";

const PropertyTypeDropDown = ({ ...props }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateSearchData({ 'property_type_id': option.id });
  };

  return (
    <DropDown
      buttonText="Property Type"
      buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
      selectedOption={selectedOption?.name_en || ""}
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
                <li key={item.id} className="border-b-[1px]" value={item.id}>
                  <button
                    className={`${
                      selectedOption?.id === item?.id
                        ? "bg-primary-green text-white"
                        : ""
                    } capitalize block px-4 py-2 hover:bg-primary-green hover:text-white w-full text-left`}
                    onClick={() => handleOptionClick(item)}
                  >
                    {item.name_en}
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
