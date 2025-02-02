// app/destination/[slug]/page.tsx

import { destinationsCategories } from '../../data/categories'; // Import the categories data
import { notFound } from 'next/navigation'; // Next.js 13 feature to handle not found pages
import Image from 'next/image';
import ImagesSlider from '@/components/ImagesSlider/ImagesSlider'; // Assuming you already have this component

// Fetching the category based on the slug
export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const destinationCategory = await getDestinationCategory(params.slug);

  if (!destinationCategory) {
    notFound(); // This is a Next.js built-in function that triggers a 404
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

// Helper function to get the category based on the slug
async function getDestinationCategory(slug: string) {
  return destinationsCategories.find((cat) => cat.slug === slug) || null;
}

// This function generates static paths for dynamic routes (based on the slugs)
export async function generateStaticParams() {
  return destinationsCategories.map((cat) => ({
    slug: cat.slug, // Generating paths based on the slug
  }));
}
