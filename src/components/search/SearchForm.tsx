"use client";
import React, { useState } from "react";
import Input from "@/components/shared/input/Input";
import { Button, DropDown } from "@/components/shared";
import PriceRangeSlider from "@/components/search/rangeSlider/PriceRangeSlider";
import PropertyTypeDropDown from "./PropertyTypeDropDown";
import BedsBathsDropDown from "./bedsBaths/BedsBathsDropDown";
import SearchInput from "./SearchInput";

const SearchForm = ({ type: string }) => {
  const INITIAL_SEARCH_DATA = {
    "city_id": "",
    "property_type_id": "",
    minPrice: 0,
    maxPrice: 0,
    beds: 0,
    baths: 0,
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

    console.log(searchData);
    
    // Post - Filtered data from backend
    // Redirect to other page if needed
  };

  return (
    <form
      name="search"
      onSubmit={handleSubmit}
      className="overflow-visible shadow-2xl rounded-lg max-w-[1440px]"
    >
      <div className="bg-white text-primary-blue px-1 lg:px-5 rounded-3xl py-4 lg:py-0">
        <div className="p-3 lg:px-0 grid lg:grid-cols-5 gap-8">
          <div className="flex justify-center gap-1 flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Location
            </label>
            {/* <Input
              type="text"
              name="location"
              id="location"
              // icons={<FaLocationDot className="text-secondary-blue" />}
              placeholder="Downtown..."
              value={searchData.location}
              onChange={handleLocationInputChange}
              className="border-gray-border w-full focus:outline-0 text-sm placeholder:text-primary-blue"
            /> */}
            <SearchInput />
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Type
            </label>
            <PropertyTypeDropDown
              name="propertyType"
              buttonText="Property Type"
              updateSearchData={updateSearchData}
              options={["Residential", "Villa", "TownHouse"]}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Price
            </label>
            <PriceRangeSlider
              name="price"
              updateSearchData={updateSearchData}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="type" className="search-label">
              Beds and Baths
            </label>
            <BedsBathsDropDown 
              updateSearchData={updateSearchData}
              searchData = {searchData}
            />
          </div>

          <Button
            className="flex-center bg-primary-green px-9 py-3 rounded-3xl justify-self-center lg:justify-self-end"
            onClick={() => {}}
          >
            <img src="/icons/ic_search.svg" className="w-4 h-4 lg:w-6 lg:h-6" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
