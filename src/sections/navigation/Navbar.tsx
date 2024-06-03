"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared";

const Navbar = () => {
  // State to manage the navbar's visibility
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center px-2 py-3 lg:px-30 md:py-6 font-satoshi text-sm font-medium'>
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {NAV_LINKS.map(item => (
          <li
            key={item.id}
            className={`flex-center gap-12 px-2 py-1 hover:text-primary-green rounded-xl m-2 cursor-pointer duration-300 ${pathname === item.link ? 'text-primary-green' : 'text-primary-blue'}`}
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
            ? 'z-[999] fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
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
            className='p-4 border-b hover:bg-primary-green duration-300 hover:text-white cursor-pointer border-gray-200'
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
