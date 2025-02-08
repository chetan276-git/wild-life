import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className='bg-[#14151b]'>
      <div className='container pb-50'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
          <div className='text-center lg:text-left w-full lg:w-[40%]'>
            <PageHeader
              subtitle={'Testimonial'}
              heading={'What our clients says about us'}
              description={''}
            />
          </div>
          <div className='w-full lg:w-[60%]'>
            <div className='flex flex-col lg:flex-row justify-between w-full items-center gap-4 lg:gap-5'>
              <div className='w-full lg:w-[50%]'>
                <TestimonialCard />
              </div>
              <div className='w-full lg:w-[50%] flex flex-col gap-4'>
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialCard = () => {
  return (
    <>
      <div className='p-4 rounded-xl shadow-2xl bg-[#171822] border border-[#727da133] w-full flex flex-col gap-4'>
        <div className='flex gap-2'>
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M1.32622 12.4004L4.88622 15.0004L3.53422 19.1874C3.31573 19.8368 3.31296 20.5394 3.52633 21.1905C3.73969 21.8416 4.15776 22.4063 4.71822 22.8004C5.26907 23.2072 5.93661 23.4251 6.62137 23.4217C7.30613 23.4183 7.97146 23.1937 8.51822 22.7814L11.9992 20.2194L15.4812 22.7784C16.0311 23.1829 16.695 23.4026 17.3776 23.4059C18.0602 23.4092 18.7262 23.196 19.28 22.797C19.8338 22.3979 20.2467 21.8335 20.4595 21.1849C20.6723 20.5363 20.6739 19.837 20.4642 19.1874L19.1122 15.0004L22.6722 12.4004C23.2214 11.999 23.6296 11.4342 23.8386 10.7868C24.0476 10.1395 24.0466 9.44263 23.8359 8.79583C23.6252 8.14903 23.2155 7.58537 22.6652 7.18535C22.115 6.78533 21.4525 6.56941 20.7722 6.56844H16.3992L15.0722 2.43244C14.8635 1.7814 14.4535 1.21346 13.9012 0.810508C13.3489 0.407559 12.6829 0.19043 11.9992 0.19043C11.3155 0.19043 10.6495 0.407559 10.0972 0.810508C9.54495 1.21346 9.1349 1.7814 8.92622 2.43244L7.59922 6.56844H3.23022C2.54996 6.56941 1.88741 6.78533 1.3372 7.18535C0.786984 7.58537 0.377257 8.14903 0.166538 8.79583C-0.0441816 9.44263 -0.0451143 10.1395 0.163873 10.7868C0.37286 11.4342 0.781077 11.999 1.33022 12.4004H1.32622Z'
                fill='#ffbe00'
              />
            </svg>
          ))}
        </div>
        <p className='text-[#ffffffa6] text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde
          autem provident similique rerum illum? Illum omnis facilis voluptatum
          sint.
        </p>
        <div className='flex items-center gap-4'>
          <Image
            src='/images/avatar/avatar.png'
            width={35}
            height={35}
            className='rounded-full'
            alt='Pic'
          />
          <h4 className='text-white text-sm font-montserrat font-medium '>
            Piyush Gadkari
          </h4>
        </div>
      </div>
    </>
  );
};
