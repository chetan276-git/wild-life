import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Email, Phone } from '../Icons';

const Links = [
  { link: '#', linkName: 'Home' },
  { link: '#', linkName: 'About Us' },
  { link: '#', linkName: 'Gallery' },
  { link: '#', linkName: 'Guide' },
  { link: '#', linkName: 'Contact Us' },
];

const Footer = () => {
  return (
    <footer className='bg-[#14151b]'>
      {/* bg-[#f7bf39]  */}
      <div className='container relative'>
        <div className='news-latter-wrapper bg-secondary rounded-3xl'>
          <div className='aspect-[1.5] absolute w-[35%] bottom-0'>
            <Image
              src='/images/effects/effect-03.png'
              fill
              alt='Tiager Image'
              objectFit='contain'
            />
          </div>
          <div className='w-[60%] py-16 ml-auto flex gap-10'>
            <div className='flex items-center gap-4'>
              <div className='w-[50px] h-[50px] rounded-full border border-dotted border-slate-900 flex justify-center items-center'>
                <Phone />
              </div>
              <div>
                <h6>Call us:</h6>
                <h3 className='text-xl font-semibold mt-2'>+1834 199999 99</h3>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='w-[50px] h-[50px] rounded-full border border-dotted border-black flex justify-center items-center'>
                <Email />
              </div>
              <div>
                <h6>Email us:</h6>
                <h3 className='text-xl font-semibold mt-2'>demo@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-wrapper relative'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='image-wrapper relative w-full h-full aspect-[1]'>
            <Image
              src='/images/effects/effect-04.png'
              fill
              loading='lazy'
              alt='Cover Img'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='container  py-20'>
          <div className='flex flex-col justify-center items-center text-white gap-10 relative z-40'>
            <div className='w-full text-center max-w-[50%] m-auto flex justify-center flex-col items-center'>
              <Link href='/'>
                <Image
                  src='/images/logo/logo.svg'
                  width={200}
                  height={150}
                  alt='Logo'
                />
              </Link>
              <p className='text-gray-100 text-md leading-6 font-normal mt-2'>
                Welcome to Wanderluxe Expeditions, your trusted partner in
                exploring the untamed beauty of nature. We specialize in
                curating unforgettable wildlife experiences, offering expertly
                guided tours that bring you closer to the wonders of the wild.
              </p>
            </div>
            <div className='w-full text-center'>
              <h4 className='text-xl'>Useful Links</h4>
              <ul className='mt-3 flex justify-center gap-6'>
                {Links.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className='text-md text-gray-200 font-montserrat font-medium hover:text-primary'
                    >
                      {item.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full text-center'>
              <ul className='flex justify-center gap-6'>
                <li>
                  <Link href='#'>
                    <Image
                      src='/images/media/instagram.svg'
                      width={45}
                      height={45}
                      alt='Icon'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/images/media/youtube.svg'
                      width={45}
                      height={45}
                      alt='Icon'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/images/media/facebook.svg'
                      width={45}
                      height={45}
                      alt='Icon'
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-[#1f1f21] relative z-40 py-4'>
          <div className='container text-center'>
            <p className='text-sm text-[#ffffff80]'>
              © Copyright 2025 by wanderluxeexpeditions.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
