'use client';
import React from 'react';

import HomeDestination from '@/components/home/Destination';
import AboutHome from '@/components/home/About';
import Testimonial from '@/components/home/Testimonial';
import HeroBanner from '@/components/home/HeroBanner';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutHome />
      <HomeDestination />
      <Testimonial />
    </>
  );
};

export default HomePage;
