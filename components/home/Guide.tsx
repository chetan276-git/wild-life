import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../pageHeader/PageHeader';
import { Arrow } from '../Icons';

const SliderImages = [
  {
    img: '/images/guide/bandhavgarh.jpg',
    name: 'Bandhavgarh ',
    link: '#',
  },
  {
    img: '/images/guide/corbett.webp',
    name: 'Corbett',
    link: '#',
  },
  {
    img: '/images/guide/konha.jpg',
    name: 'Konha',
    link: '#',
  },
  {
    img: '/images/guide/ranthambore.jpg',
    name: 'Ranthambore ',
    link: '#',
  },
  {
    img: '/images/guide/panna.jpg',
    name: 'Panna',
    link: '#',
  },
  {
    img: '/images/guide/tadoba.jpg',
    name: 'Tadoba',
    link: '#',
  },
  {
    img: '/images/guide/pench.jpeg',
    name: 'Pench',
    link: '#',
  },
];

const Guide = () => {
  return (
    <>
      <div className='container'>
        <div className='text-center'>
          <PageHeader
            subtitle={'Explore the Wild'}
            heading={'Explore Our Premier Locations'}
            description={''}
          />
        </div>
      </div>
      <Swiper
        className='full-width-slideshow mt-14 w-full'
        modules={[Autoplay]}
        pagination={false}
        spaceBetween={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {SliderImages.map((item, i) => (
          <SwiperSlide key={i} className='text-center'>
            <Link
              href={item.link}
              className='card-each relative transition-all duration-600 overflow-hidden block cursor-grab'
            >
              <div className='relative w-full aspect-[0.8] overflow-hidden transition-all duration-600'>
                <Image
                  src={`${item.img}`}
                  fill
                  objectFit='cover'
                  alt='Banner Image'
                  className='transition-all duration-600'
                  loading='lazy'
                  quality={100}
                />
                <div className='absolute bottom-0 left-0 w-full h-full z-10 flex flex-col items-start justify-end gap-4 p-4 text-left'>
                  <h4 className='text-white font-bold text-xl mt-4 font-montserrat text-left uppercase'>
                    {item.name}
                  </h4>
                  <div className='page-link-circle cursor-pointer hover:bg-secondary hover:text-black w-[40px] h-[40px] rounded-full border border-secondary flex items-center justify-center text-secondary'>
                    <Arrow />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Guide;
