"use client";
import { useEffect, useRef, useState } from "react";
import ClickOutside from "./ClickOutside";
import Button from "../button/Button";

const Dropdown = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => (!prev));
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useEffect(()=>{
    if(props.close){
      toggleDropdown();
    }
  },[props.close])

  return (
    <>
      <div className="relative w-full" ref={ref}>
        {/* Dropdown button */}
        <Button
          id="dropdownDelayButton"
          className={`w-full text-center inline-flex items-center text-sm ${props.buttonClass}`}
          type="button"
          onClick={toggleDropdown}
        >
          <div className="relative w-full">
            <div className="flex gap-1 capitalize">
              {!props.selectedOption ? props.buttonText : props.selectedOption}
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
        {isOpen && ( children )}

        <ClickOutside ref={ref} onClickOutside={handleClickOutside} />
      </div>
    </>
  );
};

export default Dropdown;
