// data/categories.ts
export interface Category {
  slug: string;
  name: string;
  img: string;
  description: string;
}

export const destinationsCategories: Category[] = [
  {
    slug: 'tiger-safari-tours',
    name: 'Tiger Safari Tours',
    img: '/images/banner/banner-2.jpeg',
    description:
      'Experience the thrill of tracking the majestic Bengal tiger in their natural habitat.',
  },
  {
    slug: 'extended-wildlife-excursion',
    name: 'Extended Wildlife Excursion',
    img: '/images/destination/extendend-wildlife.png',
    description:
      'Experience the thrill of tracking the majestic Bengal tiger in their natural habitat.',
  },
  {
    slug: 'customised-experience',
    name: 'Customised Experience',
    img: '/images/destination/tiger-safari-tour.jpg',
    description:
      'Experience the thrill of tracking the majestic Bengal tiger in their natural habitat.',
  },
  {
    slug: 'birding-tours',
    name: 'Birding Tours',
    img: '/images/destination/birding-tour.jpg',
    description:
      'Experience the thrill of tracking the majestic Bengal tiger in their natural habitat.',
  },
  {
    slug: 'luxury-overseas',
    name: 'Luxury Overseas',
    img: '/images/destination/luxury-overseas.jpg',
    description:
      'Experience the thrill of tracking the majestic Bengal tiger in their natural habitat.',
  },
];
