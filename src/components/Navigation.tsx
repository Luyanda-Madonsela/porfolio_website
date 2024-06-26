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
    <div className="flex h-20 md:h-32 w-full pr-10 pl-6 md:pl-14 md:pt-6 mb-5 md:mb-10 font-poppins-500 md:text-md lg:text-lg xl:text-xl relative z-50 justify-between md:justify-normal">
      <div className='mt-2 md:mt-0 md:mr-10 relative w-32 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48'>
        <Link href="/">
          <Image src={logo} layout="fill" objectFit="contain" alt="Personal Logo" />
        </Link>
      </div>



      {/* Menu */}
      <div className={`flex relative mt-8 w-28 h-40 z-50 bg-sky-50 sm:h-20 sm:w-4/6 flex-col md:flex-row justify-start items-center content-center md:pl-4 lg:pl-16 custom:pl-44 md:mt-4 lg:mt-6 xl:pl-56 2xl:pl-96 xl:mt-10 gap-5 md:gap-2 lg:gap-5 xl:gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:flex `}>
        <ul className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12 xl:gap-16 mr-3 text-blue-900">
          <li>
            <Link className="hover:text-lime-400" href="/">home</Link>
          </li>
          <li>
            <Link className="hover:text-lime-400" href="/about">about</Link>
          </li>
          <li>
            <Link className="hover:text-lime-400" href="/portfolio">projects</Link>
          </li>
        </ul>

        <Button text="contact" href="/contact" target='' height="h-10" width="w-28"/>
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500 ">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
 );
};

export default Navigation;
