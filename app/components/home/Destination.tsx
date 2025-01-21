import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
const SliderImages = [
  {
    img: '/images/destination/tiger-safari-tour.jpg',
    name: 'Tiger Safari Tours',
    link: '#',
  },
  {
    img: '/images/destination/extendend-wildlife.png',
    name: 'Extended Wildlife Excursion',
    link: '#',
  },
  {
    img: '/images/destination/tiger-safari-tour.jpg',
    name: 'Customised Experience',
    link: '#',
  },
  {
    img: '/images/destination/birding-tour.jpg',
    name: 'Birding Tours',
    link: '#',
  },
  {
    img: '/images/destination/luxury-overseas.jpg',
    name: 'Luxury Overseas',
    link: '#',
  },
];

const AboutUs = () => {
  return (
    <section className='bg-[#14151b]'>
      <div className='container'>
        <div className='text-center'>
          <h6 className='font-mansalva text-3xl text-white'>Our Destination</h6>
          <h2 className='text-white text-5xl font-medium mt-6'>
            Explore Our Paradise
          </h2>
        </div>
        <Swiper
          className='mySwiper about-swiper mt-14'
          slidesPerView={4}
          spaceBetween={30}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {SliderImages.map((item, i) => (
            <SwiperSlide key={i} className='text-center'>
              <Link
                href='#'
                className='bg-[#14151b] p-3 rounded-xl hover:bg-primary transition-all duration-600 about-swiper-card overflow-hidden block cursor-grab'
              >
                <div className='relative w-full h-[280px] rounded-xl overflow-hidden transition-all duration-600'>
                  <Image
                    src={`${item.img}`}
                    fill
                    objectFit='cover'
                    alt='Banner Image'
                    className='transition-all duration-600'
                    loading='lazy'
                    quality={100}
                  />
                </div>
              </Link>
              <h4 className='text-white text-lg mt-4'>{item.name}</h4>
              <Link href={item.link} className='text-gray-300 text-sm'>
                See More
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
// bg-[#14151b]
