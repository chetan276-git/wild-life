'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import Image from 'next/image';
import styles from '@/styles/pages/home.module.scss';
import Button from '@/components/button/Button';

import Destination from '@/components/home/Destination';
import Guide from '@/components/home/Guide';
import AboutHome from '@/components/home/About';

const SliderImages = ['/images/banner/banner-2.jpeg'];

const HomePage = () => {
  return (
    <>
      <div className={`${styles.homebanner} w-full h-screen relative`}>
        <Swiper
          className='mySwiper absolute top-0 left-0 w-full h-full z-10'
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {SliderImages.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`${img}`}
                fill
                objectFit='cover'
                alt='Banner Image'
                priority
                quality={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='content-wrapper absolute z-10 w-full h-full top-0 left-0'>
          <div className='container h-full'>
            <div className='max-w-[60%] m-auto gap-4 h-full flex flex-col items-center justify-center text-center'>
              <h1 className='text-7xl text-white font-extrabold font-montserrat'>
                Embark on a Wild Adventure{' '}
                <span className='text-primary'> Today!</span>
              </h1>
              <p className='text-gray-50 text-md leading-7 font-normal mb-5'>
                Journey into nature’s most stunning landscapes. Get up close
                with wildlife on guided safaris and tours. Create memories in
                the wild that last a lifetime.
              </p>

              <Button text={'Make Inquiry'} size='large' shape='pill' />
            </div>
          </div>
        </div>
      </div>
      <AboutHome />
      <Destination />
      <Guide />
    </>
  );
};

export default HomePage;
