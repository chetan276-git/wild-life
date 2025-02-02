// app/destination/[slug]/page.tsx
import ImagesSlider from '@/components/ImagesSlider/ImagesSlider';
import { destinationsCategories } from '@/data/destinations';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const destinationCategory = destinationsCategories.find(
    (cat) => cat.slug === params.slug
  );

  if (!destinationCategory) {
    notFound();
  }

  return (
    <div className='pb-40'>
      <ImagesSlider
        images={[destinationCategory.img]}
        title={destinationCategory.name}
        description={destinationCategory.description}
      />
      {/* <ImagesFeed /> */}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae corrupti magnam ratione, saepe eum nobis voluptatum
              quisquam dolor, consectetur architecto ipsum repellendus
              perspiciatis, assumenda magni ipsam illum similique eveniet vel
              distinctio tempore totam inventore vitae natus voluptatem! Ipsam
              atque consequuntur, recusandae repudiandae quasi ducimus ex alias
              hic tenetur, voluptate, fuga perspiciatis accusamus.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae corrupti magnam ratione, saepe eum nobis voluptatum
              quisquam dolor, consectetur architecto ipsum repellendus
              perspiciatis, assumenda magni ipsam illum similique eveniet vel
              distinctio tempore totam inventore vitae natus voluptatem! Ipsam
              atque consequuntur, recusandae repudiandae quasi ducimus ex alias
              hic tenetur, voluptate, fuga perspiciatis accusamus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae corrupti
              magnam ratione, saepe eum nobis voluptatum quisquam dolor,
              consectetur architecto ipsum repellendus perspiciatis, assumenda
              magni ipsam illum similique eveniet vel distinctio tempore totam
              inventore vitae natus voluptatem! Ipsam atque consequuntur,
              recusandae repudiandae quasi ducimus ex alias hic tenetur,
              voluptate, fuga perspiciatis accusamus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
