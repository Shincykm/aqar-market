"use client"
import { DropDown } from '@/components/shared'
import React, { useEffect, useState } from 'react'
import CounterInput from './CounterInput';

const BedsBathsDropDown = ({ ...props }) => {
  const [text, setText] = useState("");

  const handleChangeText = () => {
    setText(prev => prev = `Beds ${props?.searchData?.beds || ""} - Baths ${props?.searchData?.baths || ""}`)
  };


  useEffect(()=>{
    handleChangeText()
  },[props.searchData.beds,props.searchData.baths]);

  return (
    <DropDown
      buttonText="Beds - Baths"
      buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
      selectedOption={(props.searchData?.beds !== 0 || props.searchData?.beds !== 0) && text}
      close={false}
    >
      <div className={`w-full md:w-[120px] lg:w-[220px] border-t-[1px]`} >
        <div className="flex-center gap-10 p-3 border-b-[1px]">
          <label htmlFor="beds" className="">
            Beds
          </label>
          <CounterInput 
            maxCounter={9} 
            name="beds" 
            updateSearchData={props.updateSearchData} 
          />
        </div>
        <div className="flex-center gap-10 p-3">
          <label htmlFor="beds" className="">
            Baths
          </label>
          <CounterInput 
            maxCounter={7} 
            name="baths" 
            updateSearchData={props.updateSearchData} 
          />
        </div>
      </div>

        
    </DropDown>
  );

}

export default BedsBathsDropDown