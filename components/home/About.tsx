import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';
import PageHeader from '../pageHeader/PageHeader';
import { Arrow } from '../Icons';
import SlideLeft from '../SlideUp';
import SlideUp from '../SlideUp';

const AboutHome = () => {
  return (
    <section className='bg-[#050b0f] relative'>
      <Image
        src='/images/effects/bg-overlay2.png'
        fill
        alt='Bg Overlay'
        className='absolute top-0 left-0 w-full h-full aspect-[1] z-10 opacity-40'
      />
      <div className='container '>
        <div className='flex gap-16 items-center'>
          <div className='w-2/4 relative'>
            <SlideLeft delay={0.3}>
              <div className='w-full aspect-[1]'>
                <Image
                  src='/images/banner/banner-6.jpg'
                  fill
                  objectFit='cover'
                  alt='About Image'
                />
              </div>
            </SlideLeft>
          </div>

          <div className='w-2/3'>
            <div className='text-left'>
              <PageHeader
                subtitle={'Welcome to Wanderluxe Expeditions'}
                heading={'About Us'}
                description={
                  ' Welcome to Wanderluxe Expeditions, your trusted partner in exploring the untamed beauty of nature. We specialize in curating unforgettable wildlife experiences, offering expertly guided tours that bring you closer to the wonders of the wild.Welcome to Wanderluxe Expeditions, your trusted partner in exploring the untamed beauty of nature. We specialize in curating unforgettable wildlife experiences, offering expertly guided tours that bring you closer to the wonders of the wild.Welcome to Wanderluxe Expeditions, your trusted partner in exploring the untamed beauty of nature. We specialize in curating unforgettable wildlife experiences, offering expertly guided tours that bring you closer to the wonders of the wild.'
                }
              />

              {/* <ul className='mb-10 mt-10 flex flex-col gap-6'>
                {[
                  {
                    icon: '',
                    title: 'Exclusive Wildlife Destinations',
                    description:
                      'Explore some of the most breathtaking and diverse habitats, from tiger reserves to bird sanctuaries.',
                  },
                  {
                    icon: '',
                    title: 'Local Expert Guides',
                    description:
                      'Our knowledgeable guides bring unparalleled insight into the flora and fauna of each region, ensuring an immersive and educational experience.',
                  },
                  {
                    icon: '',
                    title: 'Comprehensive Services',
                    description:
                      'From transportation to accommodations, we handle every detail to make your journey seamless and stress-free.',
                  },
                ].map((item, i) => (
                  <li className='about-us-list flex items-center gap-4' key={i}>
                    <div className='w-16 h-16 rounded-full flex justify-center items-center bg-[#14151b]'>
                      {item.icon}
                    </div>
                    <div className='conetent-wrapper'>
                      <h3 className='text-xl text-white font-normal'>
                        {item.title}
                      </h3>
                      <p className='text-slate-400 text-md leading-6 font-normal mt-2'>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul> */}
              <SlideUp delay={0.3}>
                <div className='mt-10'>
                  <Button
                    text='Learn More'
                    size='medium'
                    shape='pill'
                    icon={<Arrow />}
                    iconPosition='right'
                  />
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
