'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AngleArrow } from '../Icons';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
      label: 'Destinations',
      dropdown: true,
      items: [
        { label: 'Tiger Safari Tours', href: '/' },
        { label: 'Wxtended wildlife Excursion', href: '/' },
        { label: 'Customised Experience', href: '/' },
        { label: 'Birding Tours', href: '/' },
        { label: 'Luxury Overseas', href: '/' },
      ],
    },
    { label: 'Gallery', href: '/' },
    { label: 'Guide', href: '/' },
    { label: 'Contact Us', href: '/' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='text-white absolute w-full z-[999]'>
      <div className='container'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Image
                src='/images/logo/logo.svg'
                width={200}
                height={150}
                alt='Logo'
              />
            </Link>
          </div>
          <div className='hidden md:flex space-x-8 items-center'>
            {navLinks.map((link, index) =>
              !link.dropdown ? (
                <Link
                  key={index}
                  href={link.href || '#'}
                  className={`${
                    link.label === 'Contact Us'
                      ? 'border border-secondary px-3 py-1 rounded-full hover:bg-secondary hover:text-white transition-all'
                      : 'nav-link text-white opacity-1'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <div key={index} className='relative' ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='hover:text-gray-300 focus:outline-none flex items-center gap-2'
                  >
                    {link.label}{' '}
                    <div
                      className={`${
                        isDropdownOpen
                          ? 'rotate-180 transition-all'
                          : 'transition-all'
                      }`}
                    >
                      <AngleArrow />
                    </div>
                  </button>
                  {isDropdownOpen && (
                    <div className='absolute mt-6 p-3 bg-[#21232d] h-auto text-white rounded-md shadow-lg'>
                      <ul className='w-[max-content] flex flex-col gap-1'>
                        {link.items.map((item, idx) => (
                          <li
                            key={idx}
                            className={`p-2 hover:text-secondary rounded-md`}
                          >
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navLinks.map((link, index) =>
              !link.dropdown ? (
                <Link key={index} href={link.href || '#'}>
                  {link.label}
                </Link>
              ) : (
                <div key={index} className='relative' ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'
                  >
                    {link.label}
                  </button>
                  {isDropdownOpen && (
                    <div className='mt-2 bg-white text-black rounded-md shadow-lg'>
                      {link.items.map((item, idx) => (
                        <Link key={idx} href={item.href}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
