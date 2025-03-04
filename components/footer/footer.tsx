import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Links = [
  { link: '#', linkName: 'Home' },
  { link: '#', linkName: 'About Us' },
  { link: '#', linkName: 'Gallery' },
  { link: '#', linkName: 'Guide' },
  { link: '#', linkName: 'Contact Us' },
];

const InstallImage = [
  '/images/guide/bandhavgarh.jpg',
  '/images/guide/corbett.webp',
  '/images/guide/konha.jpg',
  '/images/guide/ranthambore.jpg',
  '/images/guide/panna.jpg',
  '/images/guide/tadoba.jpg',
];

const Footer = () => {
  return (
    <footer className='bg-[#14151b]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-white pt-10 items-center'>
          <Link href='#' className='flex items-center gap-4'>
            <div className='w-8 h-8 lg:w-16 p-2 lg:p-4 lg:h-16 flex items-center justify-center rounded-full bg-black'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                  fill='white'
                />
                <path
                  d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                  fill='white'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                  fill='white'
                />
              </svg>
            </div>
            <span className='font-semibold text-xl text-white'>
              chetan.mane23
            </span>
          </Link>
          <ul className='flex gap-6 text-md font-medium font-barlowSemoCondensed justify-start lg:justify-end'>
            <li>
              <Link href='#' target='_blank'>
                Facebook
              </Link>
            </li>
            <li>
              <Link href='#' target='_blank'>
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container !pr-0 lg:pr-4'>
        <div className='images-wrapper border-b border-[#ffffff0a] py-6 lg:py-10 flex lg:grid grid-cols-6 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory'>
          {InstallImage.map((ele, i) => (
            <div
              className='relative lg:aspect-[1.5] w-[200px] h-[100px] flex-shrink-0 lg:w-auto lg:h-auto snap-start'
              key={i}
            >
              <Image
                src={ele}
                fill
                alt='Img'
                objectFit='cover'
                className='rounded-md lg:rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='py-6 lg:py-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 text-white'>
            <div className='border-r border-[#ffffff0a] pr-8'>
              <Link href='/'>
                <Image
                  src='/images/logo/logo.svg'
                  width={200}
                  height={150}
                  alt='Logo'
                  className='w-[140px] h-[auto] md:w-[200px] md:h-[auto]'
                />
              </Link>
              <p className='text-[#ffffffa6] text-md font-medium mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,the sed
                do eiusLorem ipsum dolor sit amet, consectetur adipiscing
                elit,the sed do eiusLorem ipsum dolor sit amet, consectetur
                adipiscing elit,the sed do eius
              </p>
            </div>
            <div className='border-r border-[#ffffff0a] px-0 lg:px-8'>
              <h5 className='text-white font-semibold text-xl'>Quick Links</h5>
              <ul className='flex gap-2 flex-col mt-4'>
                {Links.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>{item.linkName}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='px-0 lg:px-8'>
              <h5 className='text-white font-semibold text-xl'>Get in touch</h5>
              <ul className='flex gap-2 flex-col mt-4'>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,the
                  sed do eiusLorem ipsum
                </li>
                <li>
                  <Link href='#'>+00 1245 7852 1454</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-4 text-center border-t border-[#ffffff0a]'>
          <span className='text-[#ffffffa6] font-semibold text-sm'>
            Copyright © 2025 wanderluxe Expeditions. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
