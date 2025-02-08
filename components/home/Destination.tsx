import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Guide from './Guide';
import FirstTimeWildlifeTour from './firstTimeWildlifeTour';

const HomeDestination = () => {
  return (
    <section className='bg-[#060805] relative py-0'>
      <Image
        src='/images/effects/bg-overlay1.png'
        fill
        alt='Bg Overlay'
        className='absolute top-0 left-0 w-full h-full aspect-[1] z-10 opacity-40 hidden md:block'
      />
      <FirstTimeWildlifeTour />
      <section
        className='text-white text-center'
        style={{
          backgroundImage: 'url(/images/banner/banner-1.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className='container'>
          <h2 className='font-semibold text-3xl lg:text-5xl'>
            Animals you will meet
          </h2>
          <ul className='flex justify-center flex-wrap w-full lg:max-w-[60%] mx-auto items-center mt-10 font-medium gap-3 lg:gap-5'>
            {[
              'Tiager',
              'Peackock',
              'Elephant',
              'Leopard',
              'Giraffe',
              'Lion',
              'Rabbit',
              'Robin',
              'Hummingbird',
              'Kingfisher',
              'Woodpecker',
              'Columbidae',
              'Eagle',
            ].map((i) => (
              <>
                <li
                  key={i}
                  className='bg-white/20 backdrop-blur-xl rounded-md py-2 px-4 text-lg '
                >
                  <h3>{i}</h3>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
      <section className='pb-0'>
        <Guide />
      </section>
    </section>
  );
};

export default HomeDestination;
