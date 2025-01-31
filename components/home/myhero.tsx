'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import Button from '../button/Button';

const images = [
  {
    id: 1,
    src: '/images/banner/banner-6.jpg',
    title: 'Explore the Wild',
    description:
      'Experience the untamed beauty of nature and embark on thrilling wildlife adventures.',
  },
  {
    id: 2,
    src: '/images/banner/banner-3.jpg',
    title: 'Adventure Awaits',
    description:
      'Discover breathtaking landscapes and create unforgettable memories.',
  },
  {
    id: 3,
    src: '/images/banner/banner-2.jpeg',
    title: 'Deep Into Nature',
    description: 'Immerse yourself in the serene beauty of the wilderness.',
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className='relative h-screen w-full overflow-hidden z-10 banner-overlay-gradient'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        onSlideChange={handleSlideChange}
        loop
        className='w-full h-full'
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <motion.div
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: `url(${image.src})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className='absolute inset-0 bg-black opacity-50' />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        <motion.div
          key={images[activeIndex].id}
          className='absolute inset-0 flex flex-col justify-center items-center text-white text-center w-full z-40'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-6xl font-bold drop-shadow-xl'>
            {images[activeIndex].title}
          </h1>
          <p className='text-lg font-normal drop-shadow-lg mt-4 mb-6 max-w-[70%] mx-auto'>
            {images[activeIndex].description}
          </p>
          <Button text={' Learn More'} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
