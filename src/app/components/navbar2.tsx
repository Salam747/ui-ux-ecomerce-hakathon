"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosRocket } from 'react-icons/io';  // Importing an example icon from react-icons
import { SiNike } from 'react-icons/si';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { HiOutlineShoppingBag, HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between h-[40px] px-6 bg-gray-100">
        {/* Icon */}
        <div className="flex-shrink-0">
          <IoIosRocket size={32} className="text-black" />  {/* Example icon */}
        </div>

        {/* Center - Skip to Main Content */}
        <div className="hidden md:flex justify-center flex-grow">
          <div className=" px-2 py-1 rounded-md mx-auto">
            <Link href="/" passHref>
              <span className="text-black cursor-pointer pl-48">Skip to Main Content</span>
            </Link>
          </div>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link href="/findstore" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer flex items-center">
              Find Store
              <div className="h-[20px] w-[1px] bg-gray-400 ml-2" />  {/* Vertical line */}
            </span>
          </Link>
          <Link href="/help" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer flex items-center">
              Help
              <div className="h-[20px] w-[1px] bg-gray-400 ml-2" />  {/* Vertical line */}
            </span>
          </Link>
          <Link href="/join-us" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer flex items-center">
              Join Us
              <div className="h-[20px] w-[1px] bg-gray-400 ml-2" />  {/* Vertical line */}
            </span>
          </Link>
          <Link href="/sign-in" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">
              Sign In
            </span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="flex items-center justify-between h-[50px] px-6 bg-white">
        {/* Nike Icon */}
        <div className="flex-shrink-0">
          <SiNike size={32} className="text-black" />  {/* Nike icon */}
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
          <Link href="/new-featured" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">New & Featured</span>
          </Link>
          <Link href="/men" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Men</span>
          </Link>
          <Link href="/women" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Women</span>
          </Link>
          <Link href="/kids" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Kids</span>
          </Link>
          <Link href="/sale" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Sale</span>
          </Link>
          <Link href="/snkrs" passHref target="_blank">
            <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">SNKRS</span>
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              className="bg-gray-100 py-1 pl-4 pr-8 rounded-full focus:outline-none w-32"
              placeholder="Search"
            />
            <CiSearch className="absolute right-2 text-gray-500" />
          </div>
          <CiHeart className="text-2xl text-gray-500 cursor-pointer" />
          <HiOutlineShoppingBag className="text-2xl text-gray-500 cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/findstore" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Find Store</span>
            </Link>
            <Link href="/help" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Help</span>
            </Link>
            <Link href="/join-us" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Join Us</span>
            </Link>
            <Link href="/sign-in" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Sign In</span>
            </Link>
            <Link href="/new-featured" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">New & Featured</span>
            </Link>
            <Link href="/men" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Men</span>
            </Link>
            <Link href="/women" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Women</span>
            </Link>
            <Link href="/kids" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Kids</span>
            </Link>
            <Link href="/sale" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">Sale</span>
            </Link>
            <Link href="/snkrs" passHref target="_blank">
              <span className="text-black hover:text-gray-500 hover:underline cursor-pointer">SNKRS</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
