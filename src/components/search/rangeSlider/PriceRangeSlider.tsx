"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./priceRangeSlider.css";
import { DropDown } from "../../shared";

const PriceRangeSlider = ({ ...props }) => {
  const [minMaxPrice, setMinMaxPrice] = useState([0, 100]);
  const [text, setText] = useState("");
  const [price, setPriceRange] = useState([10, 50]);

  const handlePriceChange = (value) => {
    setPriceRange((prev) => (prev = value));
    props.updateSearchData({ minPrice: value[0]*1000 });
    props.updateSearchData({ maxPrice: value[1]*1000 });
    setText(`${value[0]*1000} - ${value[1]*1000} AED`);
  };

  return (
    <DropDown
      buttonText="Min - Max AED"
      buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
      selectedOption={text}
      close={false}
    >
      <div className={`w-full md:w-[420px] lg:w-[420px] border-t-[1px]`}>
        <div className="p-6 w-full">
        <RangeSlider
          id="range-slider-blue"
          className="mb-4"
          min={minMaxPrice[0]}
          max={minMaxPrice[1]}
          step={1}
          value={price}
          onInput={handlePriceChange}
        />

        <span className="text-xs xl:text-sm text-black absolute start-3">{`${minMaxPrice[0]}K`}</span>
        <span className="text-xs xl:text-sm absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 text-secondary-blue">{`AED ${price[0]} to ${price[1]} K`}</span>
        <span className="text-xs xl:text-sm absolute end-3">{`${minMaxPrice[1]}K`}</span>
        </div>
      </div>
    </DropDown>
  );
};

export default PriceRangeSlider;
