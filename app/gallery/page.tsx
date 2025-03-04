'use client';

import ImagesSlider from '@/components/ImagesSlider/ImagesSlider';
import SlideUp from '@/components/SlideUp';
import Image from 'next/image';

export default function MasonryPage() {
  const ImageGrid = [
    '/images/gallery/vertical/gallery-3.jpg',
    '/images/banner/banner-1.jpg',
    '/images/gallery/dear.jpg',
    '/images/banner/banner-2.jpeg',
    '/images/banner/banner-4.jpg',
    '/images/banner/banner-6.jpg',
    '/images/gallery/elefant.jpg',
    '/images/banner/banner-2.jpeg',
    '/images/taiger/taiger-1.jpg',
    '/images/banner/banner-1.jpg',
    '/images/gallery/dear.jpg',
    '/images/banner/banner-2.jpeg',
    '/images/banner/banner-3.jpg',
    '/images/banner/banner-4.jpg',
    '/images/banner/banner-6.jpg',
    '/images/gallery/elefant.jpg',
  ];

  return (
    <>
      <ImagesSlider images={['/images/banner/banner-6.jpg']} title='Gallery' />
      <div className='container py-10 !pl-0 !pr-0 lg:pl-4 lg:pr-4'>
        <div className='columns-2 lg:columns-3 gap-2 lg:gap-4'>
          {ImageGrid.map((item, i) => (
            <div key={i} className='break-inside-avoid'>
              <SlideUp>
                <Image
                  fill
                  src={item}
                  className='w-full object-cover !relative mb-2 lg:mb-4'
                  quality={2}
                  loading='lazy'
                  alt='Image'
                />
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
