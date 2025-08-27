'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';



const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/about' },
    { name: 'Industries', href: '/services' },
    { name: 'Partners & Integrations', href: '/portfolio' },
    { name: 'Why Us', href: '/blog' },
    { name: 'About', href: '/blog' },
    { name: 'Join Us', href: '/blog' },
  ];

  return (
    <nav className="bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/name.png"
                alt="Daniyal Tech Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Contact Us Button */}
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Contact Us <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Mobile menu button - Right side */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 ml-3 mr-3 space-y-1 sm:px-3 bg-blue-950 shadow-lg">
          {/* Navigation Items - Column layout */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Contact Us Button - Column layout */}
          <button className="flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 mt-2">
            Contact Us <FaArrowRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;