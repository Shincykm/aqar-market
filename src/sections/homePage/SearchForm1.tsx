"use client";
import React, { useState } from "react";
import Input from "@/components/shared/input/Input";
// import { FaLocationDot } from "react-icons/fa6";
// import Dropdown1 from "../../shared/DropDown1";
import { Button, DropDown1 } from "@/components/shared";
import { FaArrowDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const SearchForm1 = ({ type: string }) => {
  const INITIAL_SEARCH_DATA = {
    location: "",
    type: "",
    priceRange: "",
    beds: "",
    baths: "",
  };
  const [searchData, setSearchData] = useState(INITIAL_SEARCH_DATA);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const updateSearchData = (data: any) => {
    setSearchData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleLocationInputChange = (e: any) => {
    const { name, value } = e.target;
    updateSearchData({ [name]: value.toLowerCase() });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (Object.values(searchData).filter((item) => item !== "").length < 1) {
      return;
    }
    console.log(searchData);

    // Post - Filtered data from backend
    // Redirect to other page if needed
  };

  const handleOptionClick = (option) => {
  };

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div className="bg-white text-primary-blue px-5 rounded-3xl">
        <div className="relative p-5 grid grid-cols-5 gap-8">
          <div className="flex justify-center flex-1 flex-col gap-2">
            <label htmlFor="type" className="search-label">
              Location
            </label>
            <Input
              type="text"
              name="location"
              id="location"
              // icons={<FaLocationDot className="text-secondary-blue" />}
              placeholder="Downtown..."
              value={searchData.location}
              onChange={handleLocationInputChange}
              className="border-gray-border w-full focus:outline-0 text-sm placeholder:text-primary-blue"
            />
          </div>

          <div className="flex justify-center flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Test
            </label>
            <DropDown1
              buttonText="Residential"
              buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
              name="propertyType"
              options={["Residential", "Villa", "TownHouse"]}
              updateData={updateSearchData}
            >
              <div className="absolute bg-white p-3 mt-7 rounded-lg min-w-[450px]">
              <ul className="py-2 text-sm" aria-labelledby="dropdownDelayButton">
                <li>
                        <button
                          className={`${selectedOption === "item" ? 'bg-secondary-blue text-white' : ''} capitalize block px-4 py-2 hover:bg-secondary-blue hover:text-white w-full text-left`}
                          onClick={() => handleOptionClick("item")}
                        >
                          {"item"}
                        </button>
                      </li>
              </ul>
              </div>
            </DropDown1>
          </div>

          <div className="flex justify-center flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Price
            </label>
            {/* <DropDown1
              buttonText="0,0000 - 20,0000 AED"
              buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
              name="price"
              options={[
                "0,0000 - 10,0000 AED",
                "10,0000 - 20,0000 AED",
                "30,0000 - 40,0000 AED",
                "40,0000 - 50,0000 AED",
              ]}
              updateData={updateSearchData}
            /> */}
          </div>

          <div className="flex justify-center flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Beds and Baths
            </label>
            {/* <DropDown1
              buttonText="Beds 0 - Baths 0"
              buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
              name="bedsAndBaths"
              options={[
                "0,0000 - 10,0000 AED",
                "10,0000 - 20,0000 AED",
                "30,0000 - 40,0000 AED",
                "40,0000 - 50,0000 AED",
              ]}
              updateData={updateSearchData}
            /> */}
          </div>

          <Button
            className="flex justify-center items-center bg-primary-green w-full px-9 py-3 rounded-3xl"
            onClick={() => {}}
          >
            <img src="/icons/ic_search.svg" width={32} height={32} />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm1;
