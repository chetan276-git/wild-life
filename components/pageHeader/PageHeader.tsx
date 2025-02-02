import React from 'react';
import SlideUp from '../SlideUp';

interface HeaderProps {
  subtitle?: string;
  heading: string;
  description?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  subtitle,
  heading,
  description,
}) => {
  return (
    <>
      <SlideUp delay={0.3}>
        {subtitle && (
          <h6 className='font-amatic text-3xl font-bold text-primary'>
            {subtitle}
          </h6>
        )}
      </SlideUp>
      <SlideUp delay={0.3}>
        <h2 className='font-barlowSemoCondensed text-white text-5xl font-semibold  mt-5'>
          {heading}
        </h2>
      </SlideUp>
      {description && (
        <SlideUp delay={0.3}>
          <p className='text-xl text-[#ffffffb3] mt-4 mb-6 font-normal font-barlowSemoCondensed'>
            {description}
          </p>
        </SlideUp>
      )}
    </>
  );
};

export default PageHeader;
