import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../pageHeader/PageHeader';
import Guide from './Guide';

import { destinationsCategories } from '@/data/destinations';
import { Arrow } from '../Icons';

const HomeDestination = () => {
  return (
    <div className='bg-[#0d0d15] relative'>
      <section className='bg-black-radial'>
        <div className='w-[20%] h-[40%] absolute top-0 right-0'>
          <div className='right-effect aspect-[0.8] relative z-10'>
            <Image
              src='/images/effects/effect-02.png'
              fill
              alt='Effect'
              style={{ filter: 'invert(1)', opacity: '0.6' }}
            />
          </div>
        </div>

        <div className='container relative z-20'>
          <div className='text-center'>
            <PageHeader
              subtitle={'Our Destination'}
              heading={'Your Next Adventure Awaits'}
              description={''}
            />
          </div>
          <div className='mt-10 flex justify-between flex-wrap gap-4'>
            {destinationsCategories.map((item) => (
              <div key={item.slug} className='text-center shadow-2xl w-[49.4%]'>
                <Link href={`/destination/${item.slug}`} className=''>
                  <div className='relative shadow-2xl w-full aspect-[1] z-0 pb-10 rounded-xl overflow-hidden transition-all duration-600'>
                    <Image
                      src={`${item.img}`}
                      fill
                      objectFit='cover'
                      alt='Banner Image'
                      className='transition-all duration-600  hover:scale-[1.1]'
                      loading='lazy'
                      quality={100}
                    />
                  </div>
                  <div className='bg-[#171822] border border-[#727da133] shadow-2xl filter text-left w-full rounded-xl p-5 mt-[-20px] z-10 relative'>
                    <h4 className='text-white text-[18px] font-medium font-montserrat hover:text-secondary duration-500'>
                      {item.name}
                    </h4>
                    <p className='truncate-text-3 text-slate-400 text-md leading-6 font-normal mt-3 font-montserrat '>
                      {item.description}
                    </p>
                    <div className='mt-5 border-t border-[#727da19d] border-dotted pt-4'>
                      <Link
                        href={`/destination/${item.slug}`}
                        className='text-gray-300 text-sm flex items-center gap-1'
                      >
                        See More
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* <div className='relative'>
            <div className='next-aroow arrow cursor-pointer hover:bg-white/90 rotate-180 w-12 h-12 rounded-full bg-white shadow-2xl absolute top-[50%] left-0 z-10 -ml-4  flex justify-center items-center'>
              <Arrow color='#f96e2a' />
            </div>
            <div className='prev-aroow arrow cursor-pointer w-12 h-12 rounded-full hover:bg-white/90  bg-white shadow-2xl absolute top-[50%] right-0 z-10 -mr-4 flex justify-center items-center'>
              <Arrow color='#f96e2a' />
            </div>
            <div className='px-10'>
              <Swiper
                className='mySwiper about-swiper mt-14 '
                slidesPerView={4}
                spaceBetween={30}
                speed={1000}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: '.next-aroow',
                  prevEl: '.prev-aroow',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {destinationsCategories.map((item) => (
                  <SwiperSlide
                    key={item.slug}
                    className='text-center shadow-2xl'
                  >
                    <Link href={`/destination/${item.slug}`} className=''>
                      <div className='relative shadow-2xl w-full aspect-[1] z-0 pb-10 rounded-xl overflow-hidden transition-all duration-600'>
                        <Image
                          src={`${item.img}`}
                          fill
                          objectFit='cover'
                          alt='Banner Image'
                          className='transition-all duration-600  hover:scale-[1.1]'
                          loading='lazy'
                          quality={100}
                        />
                      </div>
                      <div className='bg-[#171822] border border-[#727da133] shadow-2xl filter text-left w-full rounded-xl p-5 mt-[-20px] z-10 relative'>
                        <h4 className='text-white text-[18px] font-medium font-montserrat hover:text-secondary duration-500'>
                          {item.name}
                        </h4>
                        <p className='truncate-text-3 text-slate-400 text-md leading-6 font-normal mt-3 font-montserrat '>
                          {item.description}
                        </p>
                        <div className='mt-5 border-t border-[#727da19d] border-dotted pt-4'>
                          <Link
                            href={`/destination/${item.slug}`}
                            className='text-gray-300 text-sm flex items-center gap-1'
                          >
                            See More
                            <Arrow />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}
        </div>
      </section>
      <Guide />
    </div>
  );
};

export default HomeDestination;
