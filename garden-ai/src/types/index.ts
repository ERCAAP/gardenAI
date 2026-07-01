// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  GardenDesign: undefined;
  PlantsLocation: undefined;
  ReplaceObjects: undefined;
  RemoveObjects: undefined;
  StyleReference: undefined;
  CreateGarden: undefined;
  Explore: undefined;
  History: undefined;
};

export type TabParamList = {
  Home: undefined;
  Explore: undefined;
  History: undefined;
};

// Feature Card Types
export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: any; // require() image
  isPro?: boolean;
  route: keyof RootStackParamList;
  isNew?: boolean;
}

// User Types
export interface User {
  id: string;
  email: string;
  isPro: boolean;
  createdAt: Date;
}

// Garden Types
export interface Garden {
  id: string;
  name: string;
  description?: string;
  image?: string;
  style: GardenStyle;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export type GardenStyle = 
  | 'modern'
  | 'traditional'
  | 'minimalist'
  | 'bohemian'
  | 'tropical'
  | 'mediterranean'
  | 'zen'
  | 'cottage';

// Plant Types
export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image?: string;
  sunlight: 'full' | 'partial' | 'shade';
  water: 'low' | 'medium' | 'high';
  climate: string[];
  size: 'small' | 'medium' | 'large';
  bloomTime?: string;
  colors?: string[];
}

// Design Types
export interface DesignProject {
  id: string;
  name: string;
  originalImage?: string;
  designedImage?: string;
  style: GardenStyle;
  features: DesignFeature[];
  createdAt: Date;
  userId: string;
}

export interface DesignFeature {
  type: 'plant' | 'furniture' | 'decoration' | 'structure';
  position: { x: number; y: number };
  size: { width: number; height: number };
  data: any;
}

// History Types
export interface HistoryItem {
  id: string;
  type: 'design' | 'plant_search' | 'object_replacement' | 'object_removal';
  title: string;
  thumbnail?: string;
  createdAt: Date;
  data: any;
}

// Component Props
export interface ProBadgeProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
  isPro?: boolean;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: any;
} 