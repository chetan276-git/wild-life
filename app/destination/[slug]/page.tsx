'use client';

import { useSearchParams } from 'next/navigation';
import { destinationsCategories } from '../../data/categories';
import Image from 'next/image';
import ImagesSlider from '@/components/ImagesSlider/ImagesSlider';

export default function CategoryPage() {
  // Get search params from the URL
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');

  // Find the category based on the query parameter
  const destinationCategory = destinationsCategories.find(
    (cat) => cat.slug === categoryQuery
  );

  if (!destinationCategory) {
    return <p>Category not found.</p>;
  }

  return (
    <div className='pb-40'>
      <ImagesSlider
        images={[destinationCategory.img]}
        title={destinationCategory.name}
        description={destinationCategory.description}
      />
      <div className='content-wrapper py-20 text-white'>
        <div className='container flex gap-8 flex-col'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl font-medium'>Overview</h2>
              <Image
                src='/images/effects/section-shape.png'
                width={130}
                height={30}
                objectFit='contain'
                alt='Shape'
              />
            </div>
            <p className='text-md font-normal font-montserrat text-gray-100'>
              {destinationCategory.description}
            </p>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl font-medium'>About The Tour</h2>
              <Image
                src='/images/effects/section-shape.png'
                width={130}
                height={30}
                objectFit='contain'
                alt='Shape'
              />
            </div>
            <p className='text-md font-normal font-montserrat text-gray-100'>
              Explore the details of the tour, including itineraries, schedules,
              and everything you need to know.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
