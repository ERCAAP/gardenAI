export interface SpaceType {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface EnvironmentType {
  id: string;
  title: string;
  image: string;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  address: string;
}

export interface PlantRecommendation {
  name: string;
  description: string;
  icon: string;
}

export interface LocationStepProps {
  selectedLocation: LocationData;
  onLocationChange: (location: LocationData) => void;
}

export interface SpaceTypeStepProps {
  selectedSpaceType: string | null;
  onSpaceTypeChange: (spaceType: string) => void;
}

export interface EnvironmentStepProps {
  selectedEnvironment: string | null;
  onEnvironmentChange: (environment: string) => void;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
} 