'use client';

import { div } from 'framer-motion/client';
import React, { useState, useRef } from 'react';

interface SlideData {
  index: number;
  headline: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!slideRef.current) return;
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      '--x',
      `${event.clientX - (r.left + Math.floor(r.width / 2))}`
    );
    el.style.setProperty(
      '--y',
      `${event.clientY - (r.top + Math.floor(r.height / 2))}`
    );
  };

  const handleMouseLeave = () => {
    if (!slideRef.current) return;
    slideRef.current.style.setProperty('--x', '0');
    slideRef.current.style.setProperty('--y', '0');
  };

  const handleClick = () => {
    handleSlideClick(slide.index);
  };

  let classNames = 'slide';
  if (current === slide.index) classNames += ' slide--current';
  else if (current - 1 === slide.index) classNames += ' slide--previous';
  else if (current + 1 === slide.index) classNames += ' slide--next';

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='slide__image-wrapper'>
        <img
          className='slide__image'
          alt={slide.headline}
          src={slide.src}
          style={{ opacity: 1 }}
        />
      </div>
      <article className='slide__content'>
        <h2 className='slide__headline'>{slide.headline}</h2>
        <button className='slide__action btn'>{slide.button}</button>
      </article>
    </li>
  );
};

interface SliderControlProps {
  type: 'previous' | 'next';
  title: string;
  handleClick: () => void;
}

const SliderControl: React.FC<SliderControlProps> = ({
  type,
  title,
  handleClick,
}) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className='icon' viewBox='0 0 24 24'>
      <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
    </svg>
  </button>
);

interface SliderProps {
  slides: SlideData[];
  heading: string;
}

const Slider: React.FC<SliderProps> = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className='slider' aria-labelledby={headingId}>
      <ul className='slider__wrapper' style={wrapperTransform}>
        <h3 id={headingId} className='visuallyhidden'>
          {heading}
        </h3>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className='slider__controls'>
        <SliderControl
          type='previous'
          title='Go to previous slide'
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type='next'
          title='Go to next slide'
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

const slideData: SlideData[] = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
];

const SliderComponent: React.FC = () => (
  <div className='container overflow-hidden pb-20'>
    <Slider heading='Example Slider' slides={slideData} />
  </div>
);

export default SliderComponent;
