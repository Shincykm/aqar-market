"use client"
import Input from "@/components/shared/input/Input";
import React, { useEffect, useRef, useState } from "react";

const CounterInput = ({maxCounter=9, name, updateSearchData}) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = ()=>{
    setCounter(count => (Number(count) + 1));
    
    if(counter >= maxCounter){
      reset();
    }

  }

  const handleDecrement = ()=>{
    setCounter(count => Number(count) - 1);
    
    if(counter <= 1){
      reset();
    }
    
  }

  const handleChangeInput = (e)=>{
    let value = e.target.value;
    if(!Number(value)){
      return;
    }

    if(value.length > 1){
      value = value.slice(-1);
    }

    setCounter(count => count = Number(value));
  }

  const reset = () =>{
    setCounter(count => count = 0);
  }

  useEffect(()=>{
    updateSearchData({ [name]: counter });

  },[counter])


  return (
    <>
      <div className="relative flex items-center max-w-30">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="bedrooms-input"
          className="p-4"
          onClick={handleDecrement}
        >
          <svg
            className="w-3 h-3 text-primary-green"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <Input
          type="text"
          id={name}
          name={name}
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max={maxCounter}
          aria-describedby="helper-text-explanation"
          className="h-11 w-full text-center border-[1px] rounded-lg"
          onChange={handleChangeInput}
          value={counter}
        />
        
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="bedrooms-input"
          className="p-4"
          onClick={handleIncrement}
        >
          <svg
            className="w-3 h-3 text-primary-green"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CounterInput;
