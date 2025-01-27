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
      ' Immerse yourself in a multi-day adventure, exploring diverse wildlife ecosystems and unique species.',
  },
  {
    slug: 'customised-experience',
    name: 'Customised Experience',
    img: '/images/destination/tiger-safari-tour.jpg',
    description:
      'Tailor your wildlife adventure to your preferences, with bespoke itineraries, personalized guides, and unique encounters designed just for you.',
  },
  {
    slug: 'birding-tours',
    name: 'Birding Tours',
    img: '/images/destination/birding-tour.jpg',
    description:
      'Discover a world of vibrant bird species, from rare to exotic, with expert guides on hand to help you spot them.',
  },
  {
    slug: 'luxury-overseas',
    name: 'Luxury Overseas',
    img: '/images/destination/luxury-overseas.jpg',
    description:
      'Indulge in an exclusive, high-end wildlife tour abroad, where comfort meets adventure in some of the world’s most stunning nature reserves.',
  },
];
