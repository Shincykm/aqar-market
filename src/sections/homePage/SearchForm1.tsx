// "use client";
// import React, { useState } from "react";
// import Input from "@/components/shared/input/Input";
// // import { FaLocationDot } from "react-icons/fa6";
// // import Dropdown1 from "../../shared/DropDown1";
// import { Button, DropDown1 } from "@/components/shared";
// import { FaArrowDown } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa";

// const SearchForm1 = ({ type: string }) => {
//   const INITIAL_SEARCH_DATA = {
//     location: "",
//     type: "",
//     priceRange: "",
//     beds: "",
//     baths: "",
//   };
//   const [searchData, setSearchData] = useState(INITIAL_SEARCH_DATA);
//   const [isOpen, setIsOpen] = useState(false);
//   const [options, setOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const updateSearchData = (data: any) => {
//     setSearchData((prev) => ({
//       ...prev,
//       ...data,
//     }));
//   };

//   const handleLocationInputChange = (e: any) => {
//     const { name, value } = e.target;
//     updateSearchData({ [name]: value.toLowerCase() });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (Object.values(searchData).filter((item) => item !== "").length < 1) {
//       return;
//     }
//     console.log(searchData);

//     // Post - Filtered data from backend
//     // Redirect to other page if needed
//   };

//   const handleOptionClick = (option) => {
//   };

//   return (
//     <form name="search" onSubmit={handleSubmit}>
//       <div className="bg-white text-primary-blue px-5 rounded-3xl">
//         <div className="relative p-5 grid grid-cols-5 gap-8">
//           <div className="flex justify-center flex-1 flex-col gap-2">
//             <label htmlFor="type" className="search-label">
//               Location
//             </label>
//             <Input
//               type="text"
//               name="location"
//               id="location"
//               // icons={<FaLocationDot className="text-secondary-blue" />}
//               placeholder="Downtown..."
//               value={searchData.location}
//               onChange={handleLocationInputChange}
//               className="border-gray-border w-full focus:outline-0 text-sm placeholder:text-primary-blue"
//             />
//           </div>

//           <div className="flex justify-center flex-1 flex-col">
//             <label htmlFor="type" className="search-label">
//               Test
//             </label>
//             <DropDown1
//               buttonText="Residential"
//               buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
//               name="propertyType"
//               options={["Residential", "Villa", "TownHouse"]}
//               updateData={updateSearchData}
//             >
//               <div className="absolute bg-white p-3 mt-7 rounded-lg min-w-[450px]">
//               <ul className="py-2 text-sm" aria-labelledby="dropdownDelayButton">
//                 <li>
//                         <button
//                           className={`${selectedOption === "item" ? 'bg-secondary-blue text-white' : ''} capitalize block px-4 py-2 hover:bg-secondary-blue hover:text-white w-full text-left`}
//                           onClick={() => handleOptionClick("item")}
//                         >
//                           {"item"}
//                         </button>
//                       </li>
//               </ul>
//               </div>
//             </DropDown1>
//           </div>

//           <div className="flex justify-center flex-1 flex-col">
//             <label htmlFor="type" className="search-label">
//               Price
//             </label>
            
//           </div>

//           <div className="flex justify-center flex-1 flex-col">
//             <label htmlFor="type" className="search-label">
//               Beds and Baths
//             </label>
//             {/* <DropDown1
//               buttonText="Beds 0 - Baths 0"
//               buttonClass="text-primary-blue mt-2 bg-white focus:outline-0"
//               name="bedsAndBaths"
//               options={[
//                 "0,0000 - 10,0000 AED",
//                 "10,0000 - 20,0000 AED",
//                 "30,0000 - 40,0000 AED",
//                 "40,0000 - 50,0000 AED",
//               ]}
//               updateData={updateSearchData}
//             /> */}
//           </div>

//           <Button
//             className="flex justify-center items-center bg-primary-green w-full px-9 py-3 rounded-3xl"
//             onClick={() => {}}
//           >
//             <img src="/icons/ic_search.svg" width={32} height={32} />
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default SearchForm1;


// src/components/SearchForm.js

'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const SearchForm1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative p-4 bg-white shadow-md rounded-md">
      <form className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter location" />
        </div>
        <div className="flex-1">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range</label>
          <input type="text" id="price" name="price" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter price range" />
        </div>
        <div className="flex-1">
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <input type="number" id="bedrooms" name="bedrooms" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Number of bedrooms" />
        </div>
        <div className="flex-1">
          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <input type="number" id="bathrooms" name="bathrooms" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Number of bathrooms" />
        </div>
        <div className="flex items-end">
          <button type="button" onClick={toggleDropdown} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            More Options
          </button>
        </div>
      </form>
      {isDropdownOpen && (
        <div className={`mt-4 p-4 bg-white border border-gray-300 rounded-md shadow-md ${isSmallScreen ? 'w-full' : 'absolute top-full mt-2 w-full'}`}>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
              <select id="propertyType" name="propertyType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>
            <div>
              <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700">Year Built</label>
              <input type="number" id="yearBuilt" name="yearBuilt" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter year" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchForm1;
