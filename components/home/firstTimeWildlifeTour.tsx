import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import PageHeader from '../pageHeader/PageHeader';

import { destinationsCategories } from '../../app/data/categories';
import Button from '../button/Button';

const FirstTimeWildlifeTour = () => {
  return (
    <section>
      <div className='container relative z-20'>
        <div className='text-left'>
          <PageHeader
            subtitle={'Our Destination'}
            heading={'First-Time Wildlife Tour'}
            description={
              'Planning your first wildlife tour? We’re here to make it an unforgettable and seamless experience. Here’s everything you need to know before your adventure!'
            }
          />
        </div>
        <div className='mt-16 grid grid-cols-3 gap-6'>
          {destinationsCategories.map((item, i) => (
            <div
              className='relative h-full w-full bg-[#1a1a1e] overflow-hidden rounded-xl bg-clip-padding border border-[#727da133]
'
              key={i}
            >
              <div className='relative h-48'>
                <Image
                  src={`${item.img}`}
                  fill
                  objectFit='cover'
                  alt='Banner Image'
                  className='transition-all duration-600 '
                  loading='lazy'
                  quality={100}
                />
                {/* <div className='absolute w-full bottom-0 left-0 px-2'>
                  <div className='h-8 rounded-md bg-secondary -mb-4 py-1 px-4 flex items-center'>
                    <div className='flex items-center gap-1 text-gray-100 text-xs '>
                      <span>1</span>
                      <span className='font-poppins '>5 Days</span>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className='pt-4 px-4 pb-4 text-white flex flex-col gap-5 items-start'>
                <h2 className='font-medium text-md font-poppins'>
                  What to Expect
                </h2>
                <div
                  className='-mt-px h-px w-full text-[#727da180]'
                  role='separator'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 5px, currentColor 5px, currentColor 11px, transparent 11px) 50% 50% / 11px 1px repeat-x',
                  }}
                />
                <ul className='space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins text-sm'>
                  <li>
                    <span>Close encounters with exotic wildlife</span>
                  </li>
                  <li>
                    <span>Guided safaris with expert naturalists</span>
                  </li>
                  <li>
                    <span>
                      Immersive nature experiences in protected reserves
                    </span>
                  </li>
                </ul>
                <div
                  className='-mt-px h-px w-full text-[#727da180]'
                  role='separator'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 5px, currentColor 5px, currentColor 11px, transparent 11px) 50% 50% / 11px 1px repeat-x',
                  }}
                />
                <Button text={'Deatils'} size='medium' />
              </div>
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
  );
};

export default FirstTimeWildlifeTour;
