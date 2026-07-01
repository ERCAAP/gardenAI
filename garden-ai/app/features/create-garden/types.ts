import { PlantType } from '@/src/components/LoadingPlant';

export enum ScreenState {
  SELECTION = 'selection',
  LOADING = 'loading', 
  RESULTS = 'results',
}

export interface PresetOption {
  id: string;
  titleKey: string;
  style: string;
  icon: string;
}

export interface LoadingStep {
  plantType: PlantType;
  messageKey: string;
}

export interface CreateGardenState {
  screenState: ScreenState;
  selectedPreset: string;
  customInput: string;
  gardenResult: any | null; // CreateGardenResponse'den gelecek
  isLoading: boolean;
  loadingStep: number;
  chatMessages: any[]; // ChatMessage[]'den gelecek
  chatInput: string;
  isChatLoading: boolean;
  showChat: boolean;
}

export const presetOptions: PresetOption[] = [
  {
    id: 'bohemian',
    titleKey: 'createGarden.presetOptions.bohemian',
    style: 'bohemian',
    icon: '🌿',
  },
  {
    id: 'tropical',
    titleKey: 'createGarden.presetOptions.tropical',
    style: 'tropical',
    icon: '🌴',
  },
  {
    id: 'zen',
    titleKey: 'createGarden.presetOptions.zen',
    style: 'zen',
    icon: '🧘',
  },
];

export const loadingSteps: LoadingStep[] = [
  { plantType: PlantType.BASIC_PLANT, messageKey: 'createGarden.loading.almostDone' },
  { plantType: PlantType.CACTUS, messageKey: 'createGarden.loading.refiningDetails' },
  { plantType: PlantType.MODERN_PLANT, messageKey: 'createGarden.loading.almostDone' },
  { plantType: PlantType.PALM_TREE, messageKey: 'createGarden.loading.generatingImage' },
  { plantType: PlantType.TREE, messageKey: 'createGarden.loading.almostDone' },
]; 