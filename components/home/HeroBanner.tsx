'use client';

import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import Button from '../button/Button';

export default function HeroSlider() {
  return (
    <div className='relative h-[60vh] xl:h-screen w-full overflow-hidden z-10 banner-overlay-gradient '>
      <video
        src='/video/background-video.mp4'
        muted
        autoPlay
        loop
        className='w-full h-[60vh] xl:h-screen object-cover'
      />

      <motion.div
        className='absolute inset-0 flex flex-col justify-center items-start text-white text-left w-full z-40'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container'>
          <div className='w-full xl:max-w-[65%] xl:pt-10'>
            <h1 className='text-4xl xl:text-8xl font-bold drop-shadow-xl uppercase shadow-lg'>
              Explore the Wild
            </h1>
            <p className='text-md xl:text-xl font-medium font-barlowSemoCondensed drop-shadow-lg mt-4 mb-10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <Button text={'More Inquiry'} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
