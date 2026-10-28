export interface Perfume {
  id: string;
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  price: string;
  image: string;
  size: string;
}

export const fragrances: Perfume[] = [
  {
    id: 'rose-noir',
    name: 'Rose Noir',
    tagline: 'Midnight Bloom',
    description:
      'A sensual blend of Bulgarian rose, dark plum, and smoky oud. An intoxicating signature for the unforgettable evening.',
    notes: ['Bulgarian Rose', 'Dark Plum', 'Oud', 'Amber'],
    price: '$248',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'velvet-orchid',
    name: 'Velvet Orchid',
    tagline: 'Golden Hour',
    description:
      'Warm vanilla orchid wrapped in saffron and sandalwood. A luminous fragrance that lingers like a memory.',
    notes: ['Vanilla Orchid', 'Saffron', 'Sandalwood', 'Musk'],
    price: '$295',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/36389336/pexels-photo-36389336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pink-elixir',
    name: 'Pink Elixir',
    tagline: 'Signature',
    description:
      'Our masterpiece — pink pepper, peony, and white musk crystallized into a bottle of pure desire. The essence of luxury.',
    notes: ['Pink Pepper', 'Peony', 'Jasmine', 'White Musk'],
    price: '$320',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/8625543/pexels-photo-8625543.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'amber-muse',
    name: 'Amber Muse',
    tagline: 'After Dark',
    description:
      'Amber resin and tonka bean layered with bergamot zest. A bold, warm composition for those who command the room.',
    notes: ['Amber', 'Tonka Bean', 'Bergamot', 'Cedar'],
    price: '$275',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/21926655/pexels-photo-21926655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'fleur-sauvage',
    name: 'Fleur Sauvage',
    tagline: 'Wild Grace',
    description:
      'Wild tuberose and ylang-ylang with a whisper of coconut. An untamed floral that blooms on warm skin.',
    notes: ['Tuberose', 'Ylang-Ylang', 'Coconut', 'Vetiver'],
    price: '$260',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/32630380/pexels-photo-32630380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'noir-absolu',
    name: 'Noir Absolu',
    tagline: 'Eternal',
    description:
      'Black currant and leather entwined with patchouli. A daring, magnetic fragrance for the modern connoisseur.',
    notes: ['Black Currant', 'Leather', 'Patchouli', 'Incense'],
    price: '$310',
    size: '100ml',
    image:
      'https://images.pexels.com/photos/21008941/pexels-photo-21008941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  fragrance: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Isabella Moreau',
    location: 'Paris, France',
    rating: 5,
    text: 'Pink Elixir is unlike anything I have ever worn. The moment I sprayed it, I was enveloped in a cloud of peony and pink pepper that lasted the entire day. It is not just a perfume — it is an experience.',
    fragrance: 'Pink Elixir',
  },
  {
    id: 'r2',
    name: 'James Whitfield',
    location: 'London, UK',
    rating: 5,
    text: 'I gifted Velvet Orchid to my wife for our anniversary. The bottle itself is a work of art, and the fragrance — warm, golden, unforgettable. She has not worn anything else since.',
    fragrance: 'Velvet Orchid',
  },
  {
    id: 'r3',
    name: 'Sofia Nakamura',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'Rose Noir is my signature scent. The combination of rose and oud is deeply sensual without being overpowering. Every time I wear it, someone asks what it is. Pure luxury in every drop.',
    fragrance: 'Rose Noir',
  },
];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sophisticated perfume bottle with gold details',
  },
  {
    url: 'https://images.pexels.com/photos/4110341/pexels-photo-4110341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Glass perfume bottle with flower background',
  },
  {
    url: 'https://images.pexels.com/photos/38036597/pexels-photo-38036597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink rose in full bloom against dark background',
  },
  {
    url: 'https://images.pexels.com/photos/28701764/pexels-photo-28701764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant pink rose against dark background',
  },
  {
    url: 'https://images.pexels.com/photos/12556542/pexels-photo-12556542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury perfume bottle with reflection',
  },
  {
    url: 'https://images.pexels.com/photos/33746039/pexels-photo-33746039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink rose with delicate petals',
  },
  {
    url: 'https://images.pexels.com/photos/21926655/pexels-photo-21926655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black perfume bottle on satin',
  },
  {
    url: 'https://images.pexels.com/photos/26859235/pexels-photo-26859235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Perfume bottle surrounded by petals',
  },
];
