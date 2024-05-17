"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared";

// const Navbar = () => {
//   const pathname = usePathname(); 
  
//   const [isShowNav, setIsShowNav] = useState(false);

//   const handleClose = ()=>{
//     setIsShowNav(false);
//   }
//   console.log(isShowNav);
  

//   return (
//     <>
//       <ul className={`font-satoshi font-normal w-full md:flex-center gap-20 hidden`}>
//         {NAV_LINKS.map(({ id, link, title }) => (
//           <li
//             key={id}
//             className={`cursor-pointer capitalize font-medium text-sm
//             ${pathname === `/${link}` ? 'text-primary-blue-light' : 'text-primary-blue'}`}
//           >
//             <Link href={link}>{title}</Link>
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={handleClose}
//         className="cursor-pointer z-50 text-secondary-blue md:hidden p-4"
//       >
//         {isShowNav ? (
//           <FaTimes size={30} className="text-primary-green" />
//         ) : (
//           <FaBars size={30} className="text-primary-green"/>
//         )}
//       </div>

//       {/* Mobile Navigation */}
//       {isShowNav && (
//         <ul className="md:hidden flex flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-primary-green-light to-primary-green text-white">
//           {NAV_LINKS.map(({ id, link, title }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-3xl"
//             >
//               <Link onClick={() => setIsShowNav(!isShowNav)} href={link}>
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center px-2 py-3 md:px-30 md:py-10 font-satoshi text-primary-blue text-sm font-medium'>
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {NAV_LINKS.map(item => (
          <li
            key={item.id}
            className='flex-center gap-12 p-2 hover:bg-primary-green hover:text-white rounded-xl m-2 cursor-pointer duration-300'
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden text-primary-green'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="mt-3">
        <Logo />
        </div>

        {/* Mobile Navigation Items */}
        <div className="mt-3">
        {NAV_LINKS.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-primary-green duration-300 hover:text-white cursor-pointer border-gray-200'
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
