"use client";
import { useRef, useState } from "react";
import ClickOutside from "./ClickOutside";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(props.options);
  const [selectedOption, setSelectedOption] = useState(props.buttonText || props.options[0]);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
    setOptions(props.options);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateData({ [props.name]: option.toLowerCase() });
    handleClickOutside();
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
      <div className="relative">
        {/* Dropdown button */}
        <Button
          id="dropdownDelayButton"
          className={`w-full 2xl:min-h-[52px] text-center inline-flex items-center text-sm ${props.buttonClass}`}
          type="button"
          onClick={toggleDropdown}
        >
          <div className="relative w-full">
            <div className="flex gap-1 capitalize">
              {props.icon && props.icon}
              {/* {props.buttonText} */}
              {!selectedOption
                ? props.buttonText
                : selectedOption}
            </div>
            <div className="absolute -top-[15px] right-[-13px]">
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
            ref={ref}
            id="dropdownDelay"
            className="absolute w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg"
          >
            {/* Dropdown search */}
            <Input
              type="text"
              name="dropdown-search"
              className="w-full mx-3 my-2 p-3 rounded-lg border-[1px] focus:outline-gray-200"
              aria-controls="none"
              placeholder="Search..."
              id="dropdown-search"
              onChange={handleSearch}
            />

            {/* Dropdown menu */}
            <ul className="py-2 text-sm" aria-labelledby="dropdownDelayButton">
              {options.length < 1 ? (
                <li className="p-2 text-center">No results found</li>
              ) : (
                options.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`${selectedOption === item ? 'bg-secondary-blue text-white' : ''} capitalize block px-4 py-2 hover:bg-secondary-blue hover:text-white w-full text-left`}
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

        <ClickOutside ref={ref} onClickOutside={handleClickOutside} />
      </div>

      {/* {selectedOption && (
        <p className="mt-2 text-sm text-secondary-blue">{selectedOption}</p>
      )} */}
    </>
  );
};

export default Dropdown;
