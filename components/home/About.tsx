import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';
import PageHeader from '../pageHeader/PageHeader';
import { Arrow } from '../Icons';

const AboutHome = () => {
  return (
    <section className='bg-[#0b0c14]'>
      <div className='container '>
        <div className='flex gap-16'>
          <div className='w-2/4 relative'>
            <div className='w-full aspect-[0.8] sticky top-4'>
              <Image
                src='/images/gallery/dear.jpg'
                fill
                objectFit='cover'
                alt='About Image'
                className='rounded-xl'
              />
            </div>
          </div>
          <div className='w-2/3'>
            <div className='text-left'>
              <PageHeader
                subtitle={'Welcome to Wanderluxe Expeditions'}
                heading={'About Us'}
                description={
                  'Welcome to Wanderluxe Expeditions, your trusted partner in exploring the untamed beauty of nature. We specialize in curating unforgettable wildlife experiences, offering expertly guided tours that bring you closer to the wonders of the wild.'
                }
              />

              <ul className='mb-10 mt-10 flex flex-col gap-6'>
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
              </ul>
              <Button
                text='Learn More'
                size='medium'
                shape='pill'
                icon={<Arrow />}
                iconPosition='right'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
