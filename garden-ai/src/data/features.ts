import { FeatureCard } from '../types';

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: '1',
    title: 'Garden Design',
    description: 'Upload a pic, pick a style, and let AI design your garden.',
    image: 'linear-gradient(135deg, #87CEEB 20%, #4682B4 60%, #32CD32 100%)',
    route: 'GardenDesign',
    isPro: false,
  },
  {
    id: '2',
    title: 'Plants for Your Location',
    description: 'Discover the best plants for your location and climate.',
    image: 'linear-gradient(135deg, #32CD32 0%, #228B22 50%, #4169E1 100%)',
    route: 'PlantsLocation',
    isPro: false,
  },
  {
    id: '3',
    title: 'Replace Objects',
    description: 'Select an object and let AI replace it.',
    image: 'linear-gradient(135deg, #DEB887 0%, #CD853F 70%, #8B4513 100%)',
    route: 'ReplaceObjects',
    isPro: true,
  },
  {
    id: '4',
    title: 'Remove Objects',
    description: 'Remove unwanted objects for a clean look.',
    image: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #32CD32 100%)',
    route: 'RemoveObjects',
    isPro: false,
  },
  {
    id: '5',
    title: 'Style Reference',
    description: 'Redesign your garden by referencing another image.',
    image: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 30%, #32CD32 70%, #DAA520 100%)',
    route: 'StyleReference',
    isPro: false,
  },
  {
    id: '6',
    title: 'Create Garden',
    description: 'Create a bohemian garden...',
    image: 'linear-gradient(135deg, #F0E68C 0%, #DAA520 50%, #8FBC8F 100%)',
    route: 'CreateGarden',
    isPro: false,
  },
]; 