import { 
  FaceShape, 
  Undertone, 
  Coverage, 
  Occasion 
} from '../types/types-definition';

// Color Information Interfaces
export interface ColorInfo {
  name: string;
  hex: string;
  description: string;
}

// UI and Navigation Interfaces
export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface ShareOption {
  icon: string;
  text: string;
  color: string;
}

export interface TooltipText {
  colorSwatch: string;
  shareButton: string;
  progressBar: string;
  seasonCard: string;
  colorPalette: string;
}

export interface CommonFeatures {
  steps: {
    colorAnalysis: Step;
    seasonReveal: Step;
    colorsToWear: Step;
    colorsToAvoid: Step;
    accessories: Step;
    makeup: Step;
  };
  shareOptions: ShareOption[];
  tooltips: TooltipText;
}

// Beauty and Accessory Interfaces
export interface FoundationInfo {
  name: string;
  hex: string;
  description: string;
  coverage: Coverage;
  undertone: Undertone;
}

export interface ApplicationTip {
  title: string;
  description: string;
}

export interface Accessory {
  name: string;
  type: string;
  description: string;
  material: string;
  style?: string;
  image: string;
  color?: string;
  occasion: Occasion;
  pairing: string;
}

export interface AccessoryTip {
  title: string;
  description: string;
}

export interface BeautyRecommendations {
  foundation: FoundationInfo[];
  applicationTips: ApplicationTip;
  accessories: Accessory[];
  accessoryTips: AccessoryTip;
}

// Season Data Structure Interfaces
export interface SeasonData {
  id: string;
  name: string;
  title: string;
  description: string;
  seasonCharacteristics: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  colorPalette: ColorInfo[];
  neutrals: ColorInfo[];
  colorsToAvoid: ColorInfo[];
  neutralsToAvoid: ColorInfo[];
  makeup: BeautyRecommendations;
  characteristics: {
    faceShape: FaceShape;
    undertone: Undertone;
    contrast: string;
  };
}

export interface SeasonFamily {
  [key: string]: SeasonData;
}
