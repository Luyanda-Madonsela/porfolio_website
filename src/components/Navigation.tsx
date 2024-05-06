"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.png';
import Button from '../components/Button';

const Navigation = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 return (
    <div className="flex  h-20 md:h-32 w-full pr-10 pl-6 md:pl-14 md:pt-6 mb-5 md:mb-10 font-poppins-500 md:text-md lg:text-lg xl:text-xl relative z-50 justify-between md:justify-normal">
      <div className='md:mr-10 relative w-32 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48'>
        <Link href="/">
          <Image src={logo} layout="fill" objectFit="contain" alt="Personal Logo" />
        </Link>
      </div>



      {/* Menu */}
      <div className={`flex mt-32 flex-col md:flex-row justify-center items-center content-center lg:ml-20 lg:mt-6 xl:ml-48 2xl:ml-72 xl:mt-10 gap-5 md:gap-2 lg:gap-5 xl:gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <ul className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12 xl:gap-16 mr-3 text-blue-900">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Projects</Link>
          </li>
        </ul>

        <Button text="Contact" href="/contact" target='' height="h-10" width="w-28"/>
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
 );
};

export default Navigation;
