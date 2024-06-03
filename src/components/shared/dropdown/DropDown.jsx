"use client";
import { useRef, useState } from "react";
import ClickOutside from "./ClickOutside";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaAngleDown } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Dropdown = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(props.options);
  // const [selectedOption, setSelectedOption] = useState(props.buttonText || props.options[0]);
  const [selectedOption, setSelectedOption] = useState("");
  const ref = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const toggleDropdown = () => {
    setIsOpen((prev) => (!prev));
  };

  const handleClickOutside = () => {
    setIsOpen(false);
    setOptions(props.options);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateData({ [props.name]: option.toLowerCase() });
    // handleClickOutside();
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (!value) {
      setOptions((prev) => props.options);
    }

    setOptions((prev) =>
      prev.filter((opt) => opt.toLowerCase().includes(value))
    );
  };

  return (
    <>
      <div className="relative w-full">
        {/* Dropdown button */}
        <Button
          id="dropdownDelayButton"
          className={`w-full text-center inline-flex items-center text-sm ${props.buttonClass}`}
          type="button"
          onClick={toggleDropdown}
        >
          <div className="relative w-full">
            <div className="flex gap-1 capitalize">
              {props.icon && props.icon}
              {/* {props.buttonText} */}
              {Array.isArray(options) && !selectedOption ? props.buttonText : selectedOption}
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
            className={`bg-white z-[999] overflow-y-scroll scroll-smooth mt-2 lg:mt-4 xl:mt-3 w-full max-h-[150px] ${
              !isSmallScreen ? "rounded-b-lg shadow-lg absolute" : "relative"
            } `}
          >
            {/* Dropdown search */}
            {/* <Input
              type="text"
              name="dropdown-search"
              className="w-full mx-3 my-2 p-3 rounded-lg border-[1px] focus:outline-gray-200"
              aria-controls="none"
              placeholder="Search..."
              id="dropdown-search"
              onChange={handleSearch}
            /> */}

            {/* Dropdown menu */}
            <ul
              className="px-2 text-sm border-t-[1px]"
              aria-labelledby="dropdownDelayButton"
            >
              {options.length < 1 ? (
                <li className="p-2 text-center">No results found</li>
              ) : (
                options.map((item, index) => (
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
        )}

        {/* <ClickOutside ref={ref} onClickOutside={handleClickOutside} /> */}
      </div>

      {/* {selectedOption && (
        <p className="mt-2 text-sm text-secondary-blue">{selectedOption}</p>
      )} */}
    </>
  );
};

export default Dropdown;
