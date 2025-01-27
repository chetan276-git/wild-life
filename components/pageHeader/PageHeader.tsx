import React from 'react';

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
      {subtitle && (
        <h6 className='font-amatic text-3xl font-bold text-primary'>
          {subtitle}
        </h6>
      )}
      <h2 className='text-white text-4xl font-medium mt-5'>{heading}</h2>
      {description && (
        <p className='text-md text-gray-200 mt-4 mb-6 font-extralight font-montserrat'>
          {description}
        </p>
      )}
    </>
  );
};

export default PageHeader;
