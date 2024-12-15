import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:w-auto h-[100px] bg-biscuit px-4">
      <div className="flex flex-col md:flex-row justify-center items-center h-full space-y-4 md:space-y-0">
        
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-8 items-center text-sblack font-normal text-[16px] leading-[24px] font-poppins">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Icons */}
        <div className="flex space-x-6 items-center ml-40">
          <UserIcon className="h-6 w-6 text-sblack cursor-pointer" />
          <HeartIcon className="h-6 w-6 text-sblack cursor-pointer" />
          <ShoppingCartIcon className="h-6 w-6 text-sblack cursor-pointer" />
          <MagnifyingGlassIcon className="h-6 w-6 text-sblack cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
