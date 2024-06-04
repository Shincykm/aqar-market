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
  const options = cityData;

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
            className="border-gray-border w-full focus:outline-0 text-sm placeholder:text-gray-400 placeholder:text-primary-blue"
        />

        {options.length > 0 && <div className="flex">
            <div className={`absolute w-full bg-white mt-4 border-t-[1px]`}>
                klrjehkherjkt
            </div>
        </div>}
    </div>
  );
};

export default SearchInput;
