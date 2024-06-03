"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./priceRangeSlider.css";
import Button from "../button/Button";
import { useMediaQuery } from "react-responsive";

const PriceRangeSlider = ({ ...props }) => {
  const [minMaxPrice, setMinMaxPrice] = useState([0, 100]);
  const [text, setText] = useState("");
  const [price, setPriceRange] = useState([10, 50]);
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const handlePriceChange = (value) => {
    setPriceRange((prev) => (prev = value));
    props.updateSearchData({ minPrice: value[0] });
    props.updateSearchData({ maxPrice: value[1] });
    setText(`${value[0]}K - ${value[1]}K`);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-full">
        {/* Dropdown button */}
        <Button
          className={`w-full text-center inline-flex items-center text-sm ${props.buttonClass}`}
          type="button"
          onClick={toggleDropdown}
        >
          <div className="relative w-full">
            <div className="flex gap-1 capitalize">
              <span>{text || "min-max AED"}</span>
            </div>
            <div
              className={`${
                isOpen ? "rotate-180 translate-x-[11px]" : ""
              } absolute -top-[15px] right-3 lg:right-[10px] transition-transform origin-center duration-300`}
            >
              <svg
                className="5 h-2.5 ms-3 justify-self-end"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#002E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
          </div>
        </Button>

        {/* Dropdown Body */}
        {isOpen && (
          <div
            id="dropdownDelay"
            className={`lg:rounded-b-xl border-y-[1px] bg-white z-[999] overflow-y-scroll scroll-smooth mt-2 lg:mt-3 xl:mt-3 w-full px-4${
              !isSmallScreen
                ? "rounded-b-lg shadow-lg absolute lg:min-w-[550px]"
                : "relative"
            } `}
          >
            {/* Dropdown menu */}
            <div className="p-6 w-full">
              <RangeSlider
                id="range-slider-blue"
                className="mb-[13px]"
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
        )}
      </div>
    </>
  );
};

export default PriceRangeSlider;
