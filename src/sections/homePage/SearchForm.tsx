"use client";
import React, { useState } from "react";
import Input from "@/components/shared/input/Input";
// import { FaLocationDot } from "react-icons/fa6";
// import Dropdown from "../../shared/DropDown";
import { Button, DropDown, DropDown1 } from "@/components/shared";
import { FaArrowDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const SearchForm = ({ type: string }) => {
  const INITIAL_SEARCH_DATA = {
    location: "",
    residential: "",
    price: "",
    bed: "",
    baths: "",
  };
  const [searchData, setSearchData] = useState(INITIAL_SEARCH_DATA);

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

    // Post - Filtered data from backend
    // Redirect to other page if needed
  };

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div className="bg-white text-primary-blue px-5 rounded-3xl">
        <div className="p-5 grid grid-cols-5 gap-8">
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
              Type
            </label>
            <DropDown
            buttonText="Residential"
            buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
            name="propertyType"
            options={["Residential", "Villa", "TownHouse"]}
            updateData={updateSearchData}
          />
          </div> 

          <div className="flex justify-center flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Price
            </label>
            <DropDown
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
            />
          </div>

          <div className="flex justify-center flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Beds and Baths
            </label>
            <DropDown
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
            />
          </div>

          <Button
            className="flex justify-center items-center bg-primary-green w-full px-9 py-3 rounded-3xl"
            onClick={() => {}}
          >
            <img src="/icons/ic_search.svg" width={32} height={32} />
          </Button>
        </div>
      </div>
      {/* <Input
        type="text"
        name="location"
        id="location"
        // icons={<FaLocationDot className="text-secondary-blue" />}
        placeholder="Location"
        value={searchData.location}
        onChange={handleLocationInputChange}
        className="py-4 mr-1 border-gray-border w-full focus:outline-0 font-semibold font-base placeholder:text-black"
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mb-7 text-sm font-openSans">
        <div className="flex flex-col justify-center">
          <label className="font-normal">Residential</label>
          <Dropdown
            buttonText="Residential"
            buttonClass="text-gray-four mt-2 bg-white focus:outline-0 text-sm"
            name="residential"
            options={["Residential", "Villa", "TownHouse"]}
            updateData={updateSearchData}
          />
        </div>

        <div className="flex flex-col justify-center">
          <label className="font-normal">Beds/Bathrooms</label>
          <Dropdown
            buttonText="00 Bed/00 Baths"
            buttonClass="text-gray-four mt-2 bg-white focus:outline-0 text-sm"
            name="beds-baths"
            options={[
              "00 Bed / 00 Baths",
              "01 Bed / 03 Baths",
              "02 Bed / 00 Baths",
            ]}
            updateData={updateSearchData}
          />
        </div>

        <div className="flex flex-col justify-center">
          <label className="font-semibold">Price</label>
          <Dropdown
            buttonText="Price"
            buttonClass="text-gray-four mt-2 bg-white focus:outline-0 text-sm"
            name="price"
            options={["1200", "1400", "1500", "1700"]}
            updateData={updateSearchData}
          />
        </div>
      </div>

      <div className="flex justify-center mb-7">
        <button
          type="submit"
          className="btn w-1/3 text-white text-xs lg:text-base bg-secondary-blue"
       >
          Search Home +
        </button>
      </div> */}
    </form>
  );
};

export default SearchForm;
