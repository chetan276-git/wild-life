import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/Button';

const ContactUsPage = () => {
  return (
    <>
      <section className='p-0 relative'>
        <Image
          src='/images/taiger/taiger-1.jpg'
          objectFit='cover'
          objectPosition='right'
          fill
          alt='Image'
          className='absolute z-10'
        />

        <div className='container h-full pt-40 pb-24'>
          <div className='relative z-20 flex items-center justify-end h-full'>
            <div className='contact-wrapper p-10 rounded-lg bg-[#060e15]/80 text-white min-w-[40%]'>
              <h2 className='text-4xl font-semibold font-barlowSemoCondensed'>
                It's time to get to know each other!
              </h2>
              <div className='flex flex-col mt-8 gap-4'>
                <div>
                  <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='first_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Your Name'
                    required
                  />
                </div>
                <div>
                  <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='first_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Your Email Address'
                    required
                  />
                </div>
                <div>
                  <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    id='first_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Your Phone Number'
                    required
                  />
                </div>
                <div>
                  <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    id='first_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Please Your Enter Your Message'
                    required
                  />
                </div>
                <Button text='Submit' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
