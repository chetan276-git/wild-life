import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';

const AboutHome = () => {
  return (
    <section className='bg-[#0b0d10]'>
      <div className='container'>
        <div className='flex gap-11'>
          <div className='w-2/4'>
            <div className='w-3/4 pt-[60%] sticky top-4'>
              <Image
                src='/images/guide/tadoba.jpg'
                fill
                objectFit='cover'
                alt='About Image'
                className='rounded-2xl'
              />
            </div>
            <div className='w-3/4 pt-[60%] relative mt-[-20%] ml-auto top-4'>
              <Image
                src='/images/guide/tadoba.jpg'
                fill
                objectFit='cover'
                alt='About Image'
                className='rounded-2xl'
              />
            </div>
          </div>
          <div className='w-2/4'>
            <div className='text-left'>
              <h6 className='font-mansalva text-3xl text-white'>
                Welcome to WildLife
              </h6>
              <h2 className='text-white text-5xl font-medium mt-5'>
                Explore Our Paradise
              </h2>
              <p className='text-lg text-gray-200 mt-4 mb-6'>
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words.
              </p>
              <ul className='mb-6 flex flex-col gap-6'>
                {[
                  {
                    icon: '',
                    title: 'Exclusive Trip',
                    description:
                      '   There are many variations of passages of available but the majority.',
                  },
                  {
                    icon: '',
                    title: 'Safety First Always',
                    description:
                      'There are many variations of passages of available but the  majority.',
                  },
                  {
                    icon: '',
                    title: 'Safety First Always',
                    description:
                      'There are many variations of passages of available but the  majority.',
                  },
                ].map((item, i) => (
                  <li className='flex items-center gap-4' key={i}>
                    <div className='w-16 h-16 rounded-full flex justify-center items-center bg-[#14151b]'>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className='text-2xl text-white font-normal'>
                        {item.title}
                      </h3>
                      <p className='text-md text-[#999] font-normal mt-2'>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button text='Learn More' size='large' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
