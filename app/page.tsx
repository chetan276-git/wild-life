'use client';
import React from 'react';

import 'swiper/css';
import 'swiper/css';
import HomeDestination from '@/components/home/Destination';
import AboutHome from '@/components/home/About';
import Testimonial from '@/components/home/Testimonial';

import HeroBanner from '@/components/home/HeroBanner';
import Guide from '@/components/home/Guide';

const HomePage = () => {
  return (
    <>
      {/* <div className={`banner-overlay-gradient w-full h-screen relative`}>
        <Swiper
          className='mySwiper absolute top-0 left-0 w-full h-full z-10'
          modules={[Autoplay, Pagination]}
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
        <div className='content-wrapper absolute z-[15] w-full h-full top-0 left-0'>
          <div className='container h-full'>
            <div className='max-w-[60%] m-auto gap-4 h-full flex flex-col items-center justify-center text-center'>
              <motion.h1 className='text-7xl text-white font-extrabold font-montserrat'>
                Embark on a Wild Adventure{' '}
                <span className='text-[#f96e2a]'> Today!</span>
              </motion.h1>
              <p className='text-gray-100 text-md leading-7 font-normal mb-5'>
                Journey into nature’s most stunning landscapes. Get up close
                with wildlife on guided safaris and tours. Create memories in
                the wild that last a lifetime.
              </p>

              <Button text={'Make Inquiry'} size='large' shape='pill' />
            </div>
          </div>
        </div>
      </div> */}
      <HeroBanner />
      <AboutHome />
      <HomeDestination />
      <Guide />
      <Testimonial />
    </>
  );
};

export default HomePage;
