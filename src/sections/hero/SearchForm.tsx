"use client";
import React, { useState } from "react";
import Input from "@/components/shared/input/Input";
// import { FaLocationDot } from "react-icons/fa6";
// import Dropdown from "../../shared/DropDown";
import { Button } from "@/components/shared";

const SearchForm = () => {
  const INITIAL_SEARCH_DATA = {
    location: "",
    residential: "",
    price: "",
    "beds-baths": "",
  };
  const [searchData, setSearchData] = useState(INITIAL_SEARCH_DATA);

  const updateSearchData = (data :any ) => {
    setSearchData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleLocationInputChange = (e:any) => {
    const { name, value } = e.target;
    updateSearchData({ [name]: value.toLowerCase() });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (Object.values(searchData).filter((item) => item !== "").length < 1) {
      return;
    }
    console.log(searchData);

    // Post - Filtered data from backend
    // Redirect to other page if needed
  };

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div className="bg-white text-[#242436] px-5 rounded-3xl">
        <div className="p-5 grid grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="location" className="search-label">
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
              className="border-gray-border w-full focus:outline-0 font-base placeholder:text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="type" className="search-label">
              Type
            </label>
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="search-label">
              Price
            </label>
          </div>

          <div className="flex flex-col">
            <label htmlFor="beds" className="search-label">
              Beds & Baths
            </label>
          </div>

          <div className="flex justify-center items-center">
            <Button
              className="flex justify-center items-center bg-primary-green w-full px-9 py-3 rounded-3xl"
              onClick={() => {}}
            >
              <img src="/icons/ic_search.svg" width={32} height={32} />
            </Button>
          </div>
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
