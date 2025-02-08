'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import Image from 'next/image';
import SlideUp from '../SlideUp';

interface SliderImage {
  images: string[];
  title?: string;
  description?: string;
}

const ImagesSlider: React.FC<SliderImage> = ({
  images,
  title,
  description,
}) => {
  return (
    <>
      <div className='relative h-[35vh] lg:h-[60vh] z-10 overlay-sub-pages'>
        <Swiper
          className='mySwiper'
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='relative w-full  h-[35vh] lg:h-[60vh]  aspect-[1] overflow-hidden'>
                <Image
                  src={`${item}`}
                  fill
                  objectFit='cover'
                  alt='Banner Image'
                  loading='lazy'
                  quality={100}
                  objectPosition='center'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='over-content absolute top-[50%] translate-y-[-50%] z-30 w-full'>
          <div className='container text-center'>
            <div className='w-full max-w-[65%] mx-auto'>
              <SlideUp delay={0.3}>
                <h1 className='text-white font-semibold font-barlowSemoCondensed text-4xl lg:text-6xl'>
                  {title}
                </h1>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className='text-white font-medium font-montserrat text-lg mt-3'>
                  {description}
                </p>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesSlider;
