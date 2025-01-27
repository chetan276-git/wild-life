'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import Image from 'next/image';

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
      <div className='relative h-[60vh] z-10 category-overlay-gradient '>
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
              <div className='relative w-full h-[60vh]  aspect-[1] overflow-hidden'>
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
        <div className='over-content absolute top-[30%] translate-y-1/2 z-30 w-full'>
          <div className='container text-center'>
            <h1 className='text-white font-semibold font-montserrat text-5xl'>
              {title}
            </h1>

            <p className='text-white font-normal font-montserrat text-md mt-3'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesSlider;
