import { EnvironmentType, SpaceType } from './types';

export const spaceTypes: SpaceType[] = [
  {
    id: 'outdoor',
    title: 'Outdoor Landscape',
    description: 'Design your outdoor space with lush greenery.',
    image: '🏞️'
  },
  {
    id: 'indoor',
    title: 'Indoor Garden Design',
    description: 'Decorate your indoor space with plants.',
    image: '🏠'
  },
  {
    id: 'terrace',
    title: 'Terrace Garden Design',
    description: 'Create a beautiful terrace garden.',
    image: '🏢'
  },
  {
    id: 'balcony',
    title: 'Balcony Garden Design',
    description: 'An elegant balcony design with modern furniture.',
    image: '🌿'
  }
];

export const environmentTypes: EnvironmentType[] = [
  { id: 'apartment', title: 'Apartment', image: '🏠' },
  { id: 'villa', title: 'Villa', image: '🏡' },
  { id: 'office', title: 'Office', image: '🏢' },
  { id: 'cafe', title: 'Cafe/Restaurant', image: '☕' },
  { id: 'hotel', title: 'Hotel', image: '🏨' },
  { id: 'commercial', title: 'Commercial Space', image: '🏬' },
  { id: 'school', title: 'School', image: '🏫' },
  { id: 'other', title: 'Other', image: '🌐' }
];

export const defaultLocation = {
  latitude: 41.2868,
  longitude: 36.3313,
  address: 'Tekkeköy, Samsun, Türkiye'
}; 