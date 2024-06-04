"use client";
import React, { useState } from "react";
import { DropDown } from "../shared";
import { useMediaQuery } from "react-responsive";
import Input from "../shared/input/Input";

// --------------------------------------------------------------------------
const cityData = [
  {
    id: 8,
    name_en: "deira dubai",
    name_ar: null,
    country_id: "1",
    state_province_id: "2",
    active: "1",
    is_capital: "0",
    is_featured: "0",
    timezone: null,
    latitude: "25.266666",
    longitude: "55.316666",
  },
  {
    id: 7,
    name_en: "abudhabi city",
    name_ar: null,
    country_id: "1",
    state_province_id: "1",
    active: "1",
    is_capital: "0",
    is_featured: "0",
    timezone: null,
    latitude: "25.266666",
    longitude: "55.316666",
  },
  {
    id: 6,
    name_en: "deira, dubai",
    name_ar: null,
    country_id: "1",
    state_province_id: "2",
    active: "1",
    is_capital: "0",
    is_featured: "0",
    timezone: null,
    latitude: "25.266666",
    longitude: "55.316666",
  },
];
// ---------------------------------------------------------------------------

const SearchInput = ({ ...props }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const options = [];

  const [selectedOption, setSelectedOption] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // props.updateSearchData({ city_id: option.toLowerCase() });
  };

  const handleLocationInputChange = (e: any) => {
    const { name, value } = e.target;
    setSearchText(value);
    
    // props.updateSearchData({ 'city_id': value });
  };

  return (
    <div className="relative w-full">
        <Input
            type="text"
            name="location"
            id="location"
            // icons={<FaLocationDot className="text-secondary-blue" />}
            placeholder="City..."
            value={props?.searchData?.city_id}
            onChange={handleLocationInputChange}
            className="border-gray-border w-full focus:outline-0 text-sm placeholder:text-gray-400"
        />

        {options.length > 0 && <div className="flex">
        <div
              id="dropdownDelay"
              className={`bg-white z-[999] overflow-y-scroll scroll-smooth mt-2 lg:mt-3 xl:mt-3 max-h-[250px] ${
                !isSmallScreen ? "rounded-b-lg shadow-lg absolute" : "relative"
              } `}
            >
              <div className={`w-full md:w-[120px] lg:w-[220px] border-t-[1px]`}>
        <ul
          className="px-2 text-sm border-t-[1px]"
          aria-labelledby="dropdownDelayButton"
        >
          {options?.length < 1 ? (
            <li className="p-2 text-center">No results found</li>
          ) : (
            <>
              {options?.map((item, index) => (
                <li key={index} className="border-b-[1px]">
                  <button
                    className={`${
                      selectedOption === item.name_en
                        ? "bg-primary-green text-white"
                        : ""
                    } capitalize block px-4 py-2 hover:bg-primary-green hover:text-white w-full text-left`}
                    onClick={() => handleOptionClick(item.id)}
                  >
                    {item?.name_en}
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
            </div>
        </div>}
    </div>
  );
};

export default SearchInput;
