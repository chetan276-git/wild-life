import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import Link from 'next/link';

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
    <section className='bg-[#0b0d10]'>
      <div className='container'>
        <div className='text-center'>
          <h6 className='font-mansalva text-3xl text-white'>Our Destination</h6>
          <h2 className='text-white text-5xl font-medium mt-6'>
            Explore Our Paradise
          </h2>
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
      >
        {SliderImages.map((item, i) => (
          <SwiperSlide key={i} className='text-center'>
            <Link
              href={item.link}
              className='card-each relative transition-all duration-600 overflow-hidden block cursor-grab'
            >
              <div className='relative w-full h-[400px] overflow-hidden transition-all duration-600'>
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
                  <div className='page-link-circle cursor-pointer hover:bg-primary hover:text-black w-[40px] h-[40px] rounded-full border border-primary flex items-center justify-center text-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 64 64'
                      fill='none'
                    >
                      <path
                        d='M56.1225 34.1225L38.1225 52.1225C37.5589 52.686 36.7945 53.0027 35.9975 53.0027C35.2005 53.0027 34.4361 52.686 33.8725 52.1225C33.3089 51.5589 32.9923 50.7945 32.9923 49.9975C32.9923 49.2004 33.3089 48.436 33.8725 47.8725L46.75 35H10C9.20435 35 8.44129 34.6839 7.87868 34.1213C7.31607 33.5587 7 32.7956 7 32C7 31.2043 7.31607 30.4412 7.87868 29.8786C8.44129 29.316 9.20435 29 10 29H46.75L33.8775 16.12C33.3139 15.5564 32.9973 14.792 32.9973 13.9949C32.9973 13.1979 33.3139 12.4335 33.8775 11.8699C34.4411 11.3064 35.2055 10.9897 36.0025 10.9897C36.7995 10.9897 37.5639 11.3064 38.1275 11.8699L56.1275 29.8699C56.4072 30.149 56.6291 30.4806 56.7803 30.8457C56.9315 31.2108 57.0091 31.6021 57.0086 31.9972C57.0082 32.3924 56.9296 32.7835 56.7776 33.1482C56.6255 33.513 56.4029 33.844 56.1225 34.1225Z'
                        fill='#fff'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Guide;
