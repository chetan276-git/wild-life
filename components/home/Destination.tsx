import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../pageHeader/PageHeader';

import { destinationsCategories } from '@/data/destinations';

const HomeDestination = () => {
  return (
    <section className='bg-[#060d15] relative pt-0'>
      <Image
        src='/images/effects/bg-overlay1.png'
        fill
        alt='Bg Overlay'
        className='absolute top-0 left-0 w-full h-full aspect-[1] z-10 opacity-40'
      />

      {/* <div className='w-[20%] h-[40%] absolute top-0 right-0'>
        <div className='right-effect aspect-[0.8] relative z-10'>
          <Image
            src='/images/effects/effect-02.png'
            fill
            alt='Effect'
            style={{ filter: 'invert(1)', opacity: '0.6' }}
          />
        </div>
      </div> */}

      <div className='container relative z-20'>
        <div className='text-center'>
          <PageHeader
            subtitle={'Our Destination'}
            heading={'Your Next Adventure Awaits'}
            description={''}
          />
        </div>
        <div className='mt-16 grid grid-cols-3 justify-center  gap-4 destination-grid-wrapper'>
          {destinationsCategories.map((item, i) => (
            <Link href={`/destination/${item.slug}`} key={i}>
              <div className='relative h-[300px] shadow-2xl w-full aspect-[2] z-0 pb-10 rounded-xl overflow-hidden transition-all duration-600'>
                <Image
                  src={`${item.img}`}
                  fill
                  objectFit='cover'
                  alt='Banner Image'
                  className='transition-all duration-600  hover:scale-[1.1]'
                  loading='lazy'
                  quality={100}
                />
                <div className='content-wrapper bg-slate-800/40 backdrop-blur-md absolute left-4 bottom-4 rounded-lg py-2 px-4'>
                  <h4 className='text-xl text-white font-normal'>
                    {item.name}
                  </h4>
                </div>
              </div>
              {/* <div className='bg-[#171822] border border-[#727da133] shadow-2xl filter text-left w-full rounded-xl p-5 mt-[-20px] z-10 relative'>
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
                  </div> */}
            </Link>
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
      <div className='text-white text-center pt-20'>
        <div className='container'>
          <h2 className='font-semibold text-5xl'>Animals you will meet</h2>

          <ul className='flex justify-center flex-wrap max-w-[60%] mx-auto items-center mt-10 font-medium text-2xl gap-5'>
            {[
              'Tiager',
              '-',
              'Peackock',
              '-',
              'Elephant',
              '-',
              'Leopard',
              '-',
              'Giraffe',
              '-',
              'Lion',
              '-',
              'Rabbit',
              '-',
              'Robin',
              '-',
              'Hummingbird',
              '-',
              'Kingfisher',
              '-',
              'Woodpecker',
              '-',
              'Columbidae',
              '-',
              'Eagle',
            ].map((i) => (
              <>
                <li key={i}>
                  <h3>{i}</h3>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeDestination;
