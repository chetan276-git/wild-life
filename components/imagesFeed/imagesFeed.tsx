import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';

const ImagesFeed = () => {
  const FeedImage = [
    {
      img: '/images/guide/bandhavgarh.jpg',
      name: 'Bandhavgarh ',
      link: '#',
    },
    {
      img: '/images/guide/corbett.webp',
      name: 'Corbett',
      link: '#',
    },
    {
      img: '/images/guide/konha.jpg',
      name: 'Konha',
      link: '#',
    },
    {
      img: '/images/guide/ranthambore.jpg',
      name: 'Ranthambore ',
      link: '#',
    },
    {
      img: '/images/guide/panna.jpg',
      name: 'Panna',
      link: '#',
    },
  ];
  return (
    <>
      <div className='container relative z-50 !mt-[-100px]'>
        <div className='grid grid-cols-4 auto-rows-[14rem] gap-1 images-feed rounded-xl overflow-hidden'>
          {FeedImage.map((item, i) => (
            <div className='p-10 relative aspect-[1] w-full h-full' key={i}>
              <Image
                src={`${item.img}`}
                fill
                objectFit='cover'
                alt='Banner Image'
                loading='lazy'
                quality={100}
                objectPosition='center'
              />
            </div>
          ))}
        </div>
        <div className='absolute right-3 bottom-3'>
          <Button text='Gallery' icon='1' iconPosition='right' />
        </div>
      </div>
    </>
  );
};

export default ImagesFeed;
