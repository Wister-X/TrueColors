// Basic Types
type Contrast = "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High" | "Very High";
type Undertone = "Warm" | "Cool" | "Neutral";
type SkinDepth = "Very Fair" | "Fair" | "Light" | "Medium" | "Medium-Deep" | "Deep" | "Very Deep";
type FaceShape = "Oval" | "Round" | "Square" | "Heart" | "Diamond" | "Rectangle" | "Triangle";
type EyeColor = "Blue" | "Green" | "Brown" | "Hazel" | "Gray" | "Amber";
type HairColor = 
  | "Platinum Blonde" 
  | "Golden Blonde" 
  | "Light Brown" 
  | "Medium Brown" 
  | "Dark Brown" 
  | "Black" 
  | "Red" 
  | "Auburn" 
  | "Strawberry Blonde" 
  | "Ash Blonde";

// Season Subtypes
type SpringSubtype = "Light Spring" | "Clear Spring" | "Warm Spring";
type SummerSubtype = "Light Summer" | "Cool Summer" | "Soft Summer";
type AutumnSubtype = "Warm Autumn" | "Deep Autumn" | "Soft Autumn";
type WinterSubtype = "Cool Winter" | "Clear Winter" | "Deep Winter";
type SeasonSubtype = SpringSubtype | SummerSubtype | AutumnSubtype | WinterSubtype;

// Coverage and Occasion Types
type Coverage = "light" | "light-medium" | "medium" | "medium-full" | "full";
type Occasion = "casual" | "dressy" | "versatile" | "everyday" | "formal" | "special" | "statement" | "romantic" | "bold" | "polished" | "modern";

// Color Information Interfaces
interface ColorInfo {
  name: string;
  hex: string;
  description: string;
}

interface SeasonCharacteristics {
  typicalContrast: Contrast[];
  typicalUndertone: Undertone;
  commonSkinDepths: SkinDepth[];
  commonHairColors: HairColor[];
  commonEyeColors: EyeColor[];
  characteristics: string[];
  bestColors: string[];
  worstColors: string[];
}

interface SeasonPalette {
  colorPalette: ColorInfo[];
  neutrals: ColorInfo[];
  colorsToAvoid: ColorInfo[];
  neutralsToAvoid: ColorInfo[];
  characteristics: {
    undertone: string;
    contrast: string;
    dominance: string;
  };
}
// Beauty-Related Interfaces
interface FoundationInfo {
  name: string;
  hex: string;
  description: string;
  coverage: Coverage;
  undertone: Undertone;
}

interface ApplicationTip {
  title: string;
  description: string;
}

interface Accessory {
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

interface AccessoryTip {
  title: string;
  description: string;
}

interface BeautyRecommendations {
  foundation: FoundationInfo[];
  applicationTips: ApplicationTip;
  accessories: Accessory[];
  accessoryTips: AccessoryTip;
}

// Season Data Structure Interfaces
interface SeasonData {
  id: string;
  name: SeasonSubtype;
  title: string;
  description: string;
  characteristics: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  colorPalette: ColorInfo[];
  neutrals: ColorInfo[];
  colorsToAvoid: ColorInfo[];
  neutralsToAvoid: ColorInfo[];
  makeup: BeautyRecommendations;
  accessories: Accessory[];
  accessoryTips: AccessoryTip;
}

// Common Features Interfaces
interface Step {
  step: number;
  title: string;
  description: string;
}

interface ShareOption {
  icon: string;
  text: string;
  color: string;
}

interface Tooltips {
  colorSwatch: string;
  shareButton: string;
  progressBar: string;
  seasonCard: string;
  colorPalette: string;
}

interface CommonFeatures {
  steps: {
    colorAnalysis: Step;
    seasonReveal: Step;
    colorsToWear: Step;
    colorsToAvoid: Step;
    accessories: Step;
    makeup: Step;
  };
  shareOptions: ShareOption[];
  tooltips: Tooltips;
}
// Complete Season System Structure
interface SeasonFamily<T extends SeasonSubtype> {
  [K in T]: SeasonData;
}

interface CompleteSeasonalSystem {
  spring: SeasonFamily<SpringSubtype>;
  summer: SeasonFamily<SummerSubtype>;
  autumn: SeasonFamily<AutumnSubtype>;
  winter: SeasonFamily<WinterSubtype>;
}

interface SeasonalColorSystem {
  SPRING: SeasonFamily<SpringSubtype>;
  SUMMER: SeasonFamily<SummerSubtype>;
  AUTUMN: SeasonFamily<AutumnSubtype>;
  WINTER: SeasonFamily<WinterSubtype>;
}

// Export all types and interfaces
export type {
  // Basic Types
  Contrast,
  Undertone,
  SkinDepth,
  FaceShape,
  EyeColor,
  HairColor,
  Coverage,
  Occasion,
  
  // Season Types
  SpringSubtype,
  SummerSubtype,
  AutumnSubtype,
  WinterSubtype,
  SeasonSubtype,
  
  // Color Info
  ColorInfo,
  SeasonCharacteristics,
  SeasonPalette,
  
  // Beauty and Accessories
  FoundationInfo,
  ApplicationTip,
  Accessory,
  AccessoryTip,
  BeautyRecommendations,
  
  // Season Data
  SeasonData,
  
  // Common Features
  Step,
  ShareOption,
  Tooltips,
  CommonFeatures,
  
  // System Structure
  SeasonFamily,
  CompleteSeasonalSystem,
  SeasonalColorSystem
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const lightSpring: SeasonData = {
  id: 'lightSpring',
  name: "Light Spring",
  title: "Light Spring",
  description: "A color season exemplifying delicate warmth and crystalline luminosity",
  characteristics: "Features high value warm undertones with translucent quality",
  bgColor: "#FFF5E1",
  textColor: "#3A3A3A",
  accentColor: "#6B6B6B",
  
  colorPalette: [
    { name: "Rose Dore", hex: "#FFB7B2", description: "Golden pink pigment" },
    { name: "Naples Yellow", hex: "#FFEF82", description: "Historical pigment" },
    { name: "Celadon", hex: "#98FF98", description: "Traditional glaze" },
    { name: "Persian Orange", hex: "#FFB347", description: "Historical pigment" },
    { name: "Smalt", hex: "#A7C7E7", description: "Ground glass pigment" },
    { name: "Shell Pink", hex: "#FFB3BA", description: "Natural mineral" },
    { name: "Malachite", hex: "#90EE90", description: "Natural mineral" },
    { name: "Egyptian Blue", hex: "#93CCEA", description: "Ancient pigment" },
    { name: "Massicot", hex: "#FFFF8F", description: "Lead oxide yellow" },
    { name: "Madder Lake", hex: "#FF9980", description: "Natural lake pigment" }
  ],
  
  neutrals: [
    { name: "Lead White", hex: "#FFF5EE", description: "Historical white" },
    { name: "Zinc White", hex: "#FAFAF0", description: "Pure mineral white" },
    { name: "Cream White", hex: "#F5DEB3", description: "Natural pigment" },
    { name: "Flake White", hex: "#E2D0A2", description: "Traditional white" }
  ],

  colorsToAvoid: [
    { name: "Carmine", hex: "#800020", description: "Deep cochineal" },
    { name: "Viridian", hex: "#228B22", description: "Deep chrome oxide" },
    { name: "Prussian Blue", hex: "#000080", description: "Iron blue" },
    { name: "Van Dyke Brown", hex: "#8B4513", description: "Natural brown" },
    { name: "Lamp Black", hex: "#36454F", description: "Carbon black" },
    { name: "Phthalocyanine", hex: "#472D47", description: "Synthetic blue" },
    { name: "Sepia", hex: "#6F4E37", description: "Natural brown ink" },
    { name: "Mars Black", hex: "#000000", description: "Iron oxide" },
    { name: "Indanthrone", hex: "#004D4D", description: "Synthetic blue" },
    { name: "Burnt Umber", hex: "#C04000", description: "Earth pigment" }
  ],
  
  neutralsToAvoid: [
    { name: "Lamp Black", hex: "#000000", description: "Carbon pigment" },
    { name: "Burnt Umber", hex: "#382C1E", description: "Calcined earth" },
    { name: "Slate Gray", hex: "#708090", description: "Cool mineral" },
    { name: "Mars Black", hex: "#36454F", description: "Iron oxide" }
  ],
  
  makeup: {
    foundation: [
      { 
        name: "Warm Porcelain", 
        hex: "#FFE4C4",
        description: "A light, warm-toned foundation for fair skin",
        coverage: "light",
        undertone: "warm" 
      },
      { 
        name: "Peach Beige", 
        hex: "#FFE5B4",
        description: "Light-medium coverage with warm undertones",
        coverage: "light-medium",
        undertone: "warm" 
      },
      { 
        name: "Golden Medium", 
        hex: "#DEB887",
        description: "Medium coverage for light-medium skin",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Warm Sand", 
        hex: "#D2B48C",
        description: "Medium-full coverage for medium skin",
        coverage: "medium-full",
        undertone: "warm" 
      },
      { 
        name: "Golden Tan", 
        hex: "#D2691E",
        description: "Full coverage for medium-deep skin",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Application Tip",
      description: "For a flawless finish, apply foundation with a damp beauty sponge. Start from the center of your face and blend outwards. Remember to test the shade on your jawline to ensure a perfect match with both your face and neck. Choose a dewy finish to enhance your Light Spring glow."
    },
    accessories: [
      {
        name: "Gold Chain Necklace",
        type: "necklace",
        description: "Delicate gold piece for warm undertones",
        material: "gold",
        style: "delicate",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect with v-neck tops and dresses"
      },
      {
        name: "Pearl Drop Earrings",
        type: "earrings",
        description: "Light, lustrous pearls to enhance your natural glow",
        material: "pearl",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with both casual and formal wear"
      },
      {
        name: "Coral Statement Ring",
        type: "ring",
        description: "A pop of warm coral to brighten your look",
        material: "coral",
        style: "statement",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Great for adding warmth to neutral outfits"
      },
      {
        name: "Peach Silk Scarf",
        type: "scarf",
        description: "A light peach scarf to complement your complexion",
        material: "silk",
        color: "#FFDAB9",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Wonderful with white or navy tops"
      },
      {
        name: "Light Gold Sunglasses",
        type: "sunglasses",
        description: "Warm-toned frames for a fresh look",
        material: "metal",
        style: "modern",
        image: "/placeholder.svg?height=80&width=80",
        color: "#FFD700",
        occasion: "casual",
        pairing: "Perfect for outdoor activities and summer looks"
      }
    ],
    accessoryTips: {
      title: "Pro Tip",
      description: "Mix and match these light, delicate pieces to enhance your Light Spring palette. Layer fine gold jewelry and add soft colors through scarves and accessories for a fresh, harmonious look."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const clearSpring: SeasonData = {
  id: 'clearSpring',
  name: "Clear Spring",
  title: "Clear Spring",
  description: "A color season defined by crystalline warmth and pure brilliance",
  characteristics: "Features high clarity with warm luminosity",
  bgColor: "#FFF0F5",
  textColor: "#3A3A3A",
  accentColor: "#FF69B4",

  colorPalette: [
    { name: "Vermillion", hex: "#FF4D00", description: "Pure mercury sulfide" },
    { name: "Cobalt Blue", hex: "#00FFFF", description: "Pure mineral blue" },
    { name: "Aureolin", hex: "#7FFF00", description: "Pure cobalt yellow" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Synthetic magenta" },
    { name: "Azurite", hex: "#007BA7", description: "Natural mineral blue" },
    { name: "Viridian", hex: "#00FF7F", description: "Pure chromium oxide" },
    { name: "Cadmium Yellow", hex: "#FFFF31", description: "Pure mineral yellow" },
    { name: "Rhodamine", hex: "#FF1493", description: "Synthetic pink" },
    { name: "Cerulean", hex: "#007FFF", description: "Pure mineral blue" },
    { name: "Dragon's Blood", hex: "#FF2400", description: "Natural resin red" }
  ],

  neutrals: [
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Platinum", hex: "#E5E4E2", description: "Noble metal gray" },
    { name: "Sterling", hex: "#C0C0C0", description: "Pure silver" },
    { name: "Iridescent White", hex: "#F0EAD6", description: "Pearlescent pigment" }
  ],

  colorsToAvoid: [
    { name: "Mars Red", hex: "#E2725B", description: "Iron oxide" },
    { name: "Green Earth", hex: "#808000", description: "Natural pigment" },
    { name: "Perylene Violet", hex: "#E0B0FF", description: "Synthetic purple" },
    { name: "Caput Mortuum", hex: "#800020", description: "Iron oxide" },
    { name: "Chromium Green", hex: "#228B22", description: "Oxide pigment" },
    { name: "Indigo", hex: "#000080", description: "Natural blue dye" },
    { name: "Bone Black", hex: "#483C32", description: "Natural carbon" },
    { name: "Burnt Sienna", hex: "#B7410E", description: "Earth pigment" },
    { name: "Terre Verte", hex: "#8A9A5B", description: "Green earth" },
    { name: "Rose Ash", hex: "#DC9898", description: "Muted mineral" }
  ],

  neutralsToAvoid: [
    { name: "Charcoal Black", hex: "#36454F", description: "Carbon pigment" },
    { name: "Raw Umber", hex: "#483C32", description: "Earth pigment" },
    { name: "Burnt Umber", hex: "#988F81", description: "Calcined earth" },
    { name: "Green Earth", hex: "#C3B091", description: "Natural clay" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Clear Ivory", 
        hex: "#FFFAF0",
        description: "Lightweight coverage for fair skin",
        coverage: "light",
        undertone: "neutral" 
      },
      { 
        name: "Pure Beige", 
        hex: "#F5DEB3",
        description: "Medium coverage with clear undertones",
        coverage: "medium",
        undertone: "neutral" 
      },
      { 
        name: "Golden Medium", 
        hex: "#DEB887",
        description: "Full coverage with warm golden undertones",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Warm Caramel", 
        hex: "#D2B48C",
        description: "Full coverage for medium-deep skin",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Clear Toffee", 
        hex: "#CD853F",
        description: "Full coverage for deep skin",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Application Tip",
      description: "Apply foundation with a damp beauty sponge for crystal-clear finish. Build coverage gradually to maintain skin's natural clarity. Focus on creating a flawless, bright finish that enhances your natural radiance."
    },
    accessories: [
      {
        name: "Bright Gold Chain",
        type: "necklace",
        description: "Polished gold with bright finish",
        material: "yellow gold",
        style: "statement",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Makes a bold statement with v-necks"
      },
      {
        name: "Ruby Drops",
        type: "earrings",
        description: "Bright red stones in gold setting",
        material: "gold and ruby",
        style: "drop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Perfect for special occasions"
      },
      {
        name: "Gold Link Bracelet",
        type: "bracelet",
        description: "Bright gold chain links",
        material: "yellow gold",
        style: "bold",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Makes a strong style statement"
      },
      {
        name: "Bright Coral Silk Scarf",
        type: "scarf",
        description: "Vibrant coral with golden undertones",
        material: "silk",
        color: "#FF6B6B",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Adds pop of clear color to outfits"
      },
      {
        name: "Bright Gold Aviators",
        type: "sunglasses",
        description: "Polished gold frames with amber lenses",
        material: "metal",
        style: "aviator",
        image: "/placeholder.svg?height=80&width=80",
        color: "#FFD700",
        occasion: "casual",
        pairing: "Perfect for bright spring days"
      }
    ],
    accessoryTips: {
      title: "Clear Spring Accessory Tip",
      description: "Choose bright, polished metals and clear gemstones. Don't shy away from bold pieces - your coloring can handle drama. Mix bright colors with gold for maximum impact."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const warmSpring: SeasonData = {
  id: 'warmSpring',
  name: "Warm Spring",
  title: "Warm Spring",
  description: "A color season characterized by golden warmth and vibrant energy",
  characteristics: "Features pure warm undertones with natural luminosity",
  bgColor: "#FFE4B5",
  textColor: "#8B4513",
  accentColor: "#CD853F",

  colorPalette: [
    { name: "Cinnabar", hex: "#FF4040", description: "Warm mineral red" },
    { name: "Indian Yellow", hex: "#FFD700", description: "Historical pigment" },
    { name: "Chromium Oxide", hex: "#7CBA3D", description: "Warm mineral green" },
    { name: "Cadmium Orange", hex: "#FF9F00", description: "Pure mineral orange" },
    { name: "Verdigris", hex: "#40E0D0", description: "Oxidized copper blue" },
    { name: "Naples Pink", hex: "#FFB4B0", description: "Historical warm pink" },
    { name: "Sap Green", hex: "#8DB600", description: "Natural plant green" },
    { name: "Orpiment", hex: "#FCC200", description: "Ancient mineral yellow" },
    { name: "Realgar", hex: "#FF7F50", description: "Mineral orange-red" },
    { name: "Rose Madder", hex: "#FC6C85", description: "Natural rose pigment" }
  ],

  neutrals: [
    { name: "Flake White", hex: "#FFFFF0", description: "Natural white lead" },
    { name: "Raw Sienna", hex: "#C19A6B", description: "Earth pigment" },
    { name: "Yellow Ochre", hex: "#F5DEB3", description: "Natural earth" },
    { name: "Buff Titanium", hex: "#F0E68C", description: "Warm white pigment" }
  ],

  colorsToAvoid: [
    { name: "Tyrian Purple", hex: "#673147", description: "Historical purple" },
    { name: "Carmine", hex: "#800020", description: "Cool cochineal red" },
    { name: "Prussian Blue", hex: "#000080", description: "Cool mineral blue" },
    { name: "Cobalt Violet", hex: "#E0B0FF", description: "Cool mineral purple" },
    { name: "Payne's Gray", hex: "#808A87", description: "Cool composite gray" },
    { name: "Phthalo Green", hex: "#228B22", description: "Cool synthetic green" },
    { name: "Dioxazine", hex: "#663399", description: "Synthetic violet" },
    { name: "Cerulean", hex: "#6A5ACD", description: "Cool mineral blue" },
    { name: "Alizarin", hex: "#722F37", description: "Cool synthetic red" },
    { name: "Indanthrone", hex: "#4682B4", description: "Cool synthetic blue" }
  ],

  neutralsToAvoid: [
    { name: "Ivory Black", hex: "#000000", description: "Carbon black pigment" },
    { name: "Payne's Gray", hex: "#808A87", description: "Cool composite gray" },
    { name: "Davy's Gray", hex: "#36454F", description: "Cool mineral gray" },
    { name: "Indigo", hex: "#000080", description: "Cool natural blue" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Golden Fair", 
        hex: "#F5DEB3",
        description: "Light coverage with warm golden undertones",
        coverage: "light",
        undertone: "warm" 
      },
      { 
        name: "Honey Beige", 
        hex: "#DEB887",
        description: "Medium coverage with rich warm undertones",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Warm Gold", 
        hex: "#DAA520",
        description: "Full coverage for warm medium skin",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Golden Tan", 
        hex: "#D2691E",
        description: "Rich coverage for medium-deep warm skin",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Bronze", 
        hex: "#CD853F",
        description: "Full coverage with golden bronze undertones",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Warm Spring Application Tip",
      description: "Warm product between fingers before applying to enhance golden undertones. Use pressing motions to build coverage while maintaining natural warmth. Set with a golden-toned powder for added radiance."
    },
    accessories: [
      {
        name: "Amber Pendant",
        type: "necklace",
        description: "Warm amber stone in yellow gold setting",
        material: "gold and amber",
        style: "pendant",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with earth-toned outfits"
      },
      {
        name: "Topaz Hoops",
        type: "earrings",
        description: "Gold hoops with honey topaz accents",
        material: "gold and topaz",
        style: "hoop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Enhances warm skin tone"
      },
      {
        name: "Gold Charm Bracelet",
        type: "bracelet",
        description: "Yellow gold with warm stone charms",
        material: "yellow gold",
        style: "charm",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Perfect for casual elegance"
      },
      {
        name: "Terracotta Print Scarf",
        type: "scarf",
        description: "Warm earth tones with golden accents",
        material: "silk blend",
        color: "#E2725B",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Coordinates with warm spring palette"
      },
      {
        name: "Tortoise Shell Sunglasses",
        type: "sunglasses",
        description: "Warm brown frames with gold details",
        material: "acetate",
        style: "oversized",
        image: "/placeholder.svg?height=80&width=80",
        color: "#D2691E",
        occasion: "casual",
        pairing: "Complements warm coloring"
      }
    ],
    accessoryTips: {
      title: "Warm Spring Accessory Tip",
      description: "Embrace rich yellow gold and warm stones like amber and topaz. Layer pieces confidently - your warm coloring can handle bold statements. Mix textures and warm metals for added interest."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const lightSummer: SeasonData = {
  id: 'lightSummer',
  name: "Light Summer",
  title: "Light Summer",
  description: "A color season exemplifying delicate cool tones with clarity",
  characteristics: "Features high value cool undertones with crystalline quality",
  bgColor: "#FFF0F5",
  textColor: "#3A3A3A",
  accentColor: "#6B6B6B",

  colorPalette: [
    { name: "Morganite", hex: "#FFDDFA", description: "Pale beryl pink" },
    { name: "Chrysoprase", hex: "#98FF98", description: "Light mineral green" },
    { name: "Chalcedony", hex: "#CCCCFF", description: "Pale quartz blue" },
    { name: "Aquamarine", hex: "#B0E0E6", description: "Pale beryl blue" },
    { name: "Rose Quartz", hex: "#FFB6C1", description: "Light mineral pink" },
    { name: "Kunzite", hex: "#E6E6FA", description: "Pale spodumene" },
    { name: "Larimar", hex: "#E0FFFF", description: "Pale pectolite" },
    { name: "Lepidolite", hex: "#DCD0FF", description: "Pale mica purple" },
    { name: "Celestite", hex: "#87CEEB", description: "Pale mineral blue" },
    { name: "Angel Skin Coral", hex: "#FFE4E1", description: "Pale organic pink" }
  ],

  neutrals: [
    { name: "Moonstone", hex: "#F8F8FF", description: "Translucent white" },
    { name: "Pearl", hex: "#D3D3D3", description: "Natural iridescent" },
    { name: "Opal", hex: "#F5F5DC", description: "Translucent mineral" },
    { name: "Mother of Pearl", hex: "#C4AEAD", description: "Natural iridescent" }
  ],

  colorsToAvoid: [
    { name: "Mars Orange", hex: "#CC5500", description: "Iron oxide" },
    { name: "Burnt Sienna", hex: "#B7410E", description: "Earth pigment" },
    { name: "Terre Verte", hex: "#808000", description: "Earth green" },
    { name: "Sepia", hex: "#7B3F00", description: "Natural brown" },
    { name: "Cadmium Orange", hex: "#FFA500", description: "Pure pigment" },
    { name: "Indian Yellow", hex: "#FFD700", description: "Historical pigment" },
    { name: "Vermillion", hex: "#FF6347", description: "Pure pigment" },
    { name: "Red Ochre", hex: "#E2725B", description: "Earth pigment" },
    { name: "Chromium Oxide", hex: "#228B22", description: "Mineral green" },
    { name: "Caput Mortuum", hex: "#800020", description: "Iron oxide" }
  ],

  neutralsToAvoid: [
    { name: "Lamp Black", hex: "#000000", description: "Carbon pigment" },
    { name: "Burnt Umber", hex: "#5C4033", description: "Earth pigment" },
    { name: "Raw Sienna", hex: "#C19A6B", description: "Earth pigment" },
    { name: "Green Earth", hex: "#556B2F", description: "Natural pigment" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Pearl Rose", 
        hex: "#FFF0F5",
        description: "Sheer coverage with subtle pink undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Shell Pink", 
        hex: "#FFE4E1",
        description: "Light coverage for fair skin with rosy undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Cool Ivory", 
        hex: "#F5F5F5",
        description: "Medium coverage with delicate cool undertones",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Soft Blush", 
        hex: "#E8BFB6",
        description: "Buildable coverage for light skin with pink undertones",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Light Rose Beige", 
        hex: "#D4B5A8",
        description: "Full coverage for light-medium cool skin",
        coverage: "full",
        undertone: "cool" 
      }
    ],
    applicationTips: {
      title: "Light Summer Application Tip",
      description: "Use a damp beauty sponge for sheer, luminous coverage. Build in thin layers to maintain skin's natural radiance. Focus on evening out tone while preserving the natural rosy glow characteristic of Light Summer complexions."
    },
    accessories: [
      {
        name: "Silver Delicate Necklace",
        type: "necklace",
        description: "Light silver chain for a soft shimmer",
        material: "silver",
        style: "delicate",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "everyday",
        pairing: "Beautiful with scoop neck tops"
      },
      {
        name: "Rose Quartz Studs",
        type: "earrings",
        description: "Light pink quartz in silver setting",
        material: "silver and rose quartz",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Adds subtle color to any outfit"
      },
      {
        name: "Crystal Tennis Bracelet",
        type: "bracelet",
        description: "Delicate silver bracelet with clear crystals",
        material: "silver and crystal",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Elegant sparkle for special occasions"
      },
      {
        name: "Blush Pink Silk Scarf",
        type: "scarf",
        description: "Light, airy silk in soft pink",
        material: "silk",
        color: "#FFB6C1",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with summer dresses and blouses"
      },
      {
        name: "Rose Gold Aviators",
        type: "sunglasses",
        description: "Light metallic frames with soft pink tint",
        material: "metal",
        style: "aviator",
        image: "/placeholder.svg?height=80&width=80",
        color: "#B76E79",
        occasion: "casual",
        pairing: "Complements light summer coloring"
      }
    ],
    accessoryTips: {
      title: "Light Summer Accessory Tip",
      description: "Choose soft, lustrous metals like silver and rose gold. Incorporate pale pink stones and crystals for sparkle. Layer delicate pieces for a refined look that won't overwhelm your gentle coloring."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const coolSummer: SeasonData = {
  id: 'coolSummer',
  name: "Cool Summer",
  title: "Cool Summer",
  description: "A color season defined by refined cool tones with medium intensity",
  characteristics: "Features pure cool undertones with balanced saturation",
  bgColor: "#E0FFFF",
  textColor: "#191970",
  accentColor: "#4169E1",

  colorPalette: [
    { name: "Kunzite", hex: "#F7CAC9", description: "Cool mineral pink" },
    { name: "Lapis", hex: "#0072B5", description: "Pure mineral blue" },
    { name: "Iolite", hex: "#6A5ACD", description: "Cool mineral violet" },
    { name: "Muscovite", hex: "#C9A0DC", description: "Cool mineral purple" },
    { name: "Amazonite", hex: "#86B8B1", description: "Cool mineral turquoise" },
    { name: "Rhodonite", hex: "#D84666", description: "Cool mineral red" },
    { name: "Azurite", hex: "#4682B4", description: "Cool mineral blue" },
    { name: "Fluorite", hex: "#DA70D6", description: "Cool mineral purple" },
    { name: "Celestine", hex: "#77B5FE", description: "Cool mineral blue" },
    { name: "Rhodochrosite", hex: "#FF007F", description: "Cool mineral pink" }
  ],

  neutrals: [
    { name: "Moonstone", hex: "#F0F8FF", description: "Translucent white" },
    { name: "Hematite", hex: "#71797E", description: "Cool mineral gray" },
    { name: "Chalcedony", hex: "#98AFC7", description: "Cool quartz gray" },
    { name: "Magnetite", hex: "#8B8589", description: "Cool iron gray" }
  ],

  colorsToAvoid: [
    { name: "Mars Orange", hex: "#FF7518", description: "Iron oxide orange" },
    { name: "Raw Sienna", hex: "#CC7722", description: "Earth pigment" },
    { name: "Bronze", hex: "#CD7F32", description: "Metallic brown" },
    { name: "Indian Yellow", hex: "#FFBF00", description: "Historical pigment" },
    { name: "Chrome Green", hex: "#32CD32", description: "Mineral pigment" },
    { name: "Venetian Red", hex: "#FF7F50", description: "Earth pigment" },
    { name: "Yellow Ochre", hex: "#FFDB58", description: "Earth pigment" },
    { name: "Copper", hex: "#B87333", description: "Metallic pigment" },
    { name: "Burnt Sienna", hex: "#B7410E", description: "Earth pigment" },
    { name: "Naples Yellow", hex: "#FFE5B4", description: "Historical pigment" }
  ],

  neutralsToAvoid: [
    { name: "Raw Umber", hex: "#C19A6B", description: "Earth pigment" },
    { name: "Sepia", hex: "#8B4513", description: "Natural brown" },
    { name: "Buff Titanium", hex: "#F5F5DC", description: "Warm white" },
    { name: "Van Dyke Brown", hex: "#996515", description: "Historical brown" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Rose Porcelain", 
        hex: "#FFF0F5",
        description: "Lightweight coverage with cool pink undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Cool Ivory", 
        hex: "#F5F5F5",
        description: "Medium coverage for fair cool skin",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Pink Beige", 
        hex: "#E8BEAC",
        description: "Natural finish with rosy undertones",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Rose Tan", 
        hex: "#D4A5A5",
        description: "Full coverage with cool undertones",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Cool Almond", 
        hex: "#BC8F8F",
        description: "Rich coverage for medium cool skin",
        coverage: "full",
        undertone: "cool" 
      }
    ],
    applicationTips: {
      title: "Cool Summer Application Tip",
      description: "Apply with a damp beauty sponge for an airbrushed finish. Layer gradually to maintain skin's natural transparency. Set with a cool-toned powder to enhance rosy undertones."
    },
    accessories: [
      {
        name: "White Pearl Strand",
        type: "necklace",
        description: "Classic white pearls with silver clasp",
        material: "silver and pearl",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Elegant with both casual and formal attire"
      },
      {
        name: "Blue Topaz Drops",
        type: "earrings",
        description: "Cool blue stones in silver setting",
        material: "silver and topaz",
        style: "drop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Beautiful for special occasions"
      },
      {
        name: "Silver Link Bracelet",
        type: "bracelet",
        description: "Classic silver chain link design",
        material: "sterling silver",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect for everyday wear"
      },
      {
        name: "Periwinkle Silk Scarf",
        type: "scarf",
        description: "Cool blue-purple silk",
        material: "silk",
        color: "#CCCCFF",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Lovely accent for neutral outfits"
      },
      {
        name: "Silver Frame Sunglasses",
        type: "sunglasses",
        description: "Cool silver frames with gray lenses",
        material: "metal",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        color: "#C0C0C0",
        occasion: "casual",
        pairing: "Enhances cool summer coloring"
      }
    ],
    accessoryTips: {
      title: "Cool Summer Accessory Tip",
      description: "Embrace cool metals like silver and white gold. Choose cool-toned stones in blue and purple hues. Keep jewelry refined and avoid yellow gold or warm stones."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const softSummer: SeasonData = {
  id: 'softSummer',
  name: "Soft Summer",
  title: "Soft Summer",
  description: "A color season characterized by muted tones with cool undertones",
  characteristics: "Features cool undertones with naturally diffused pigmentation",
  bgColor: "#FFF5EE",
  textColor: "#3A3A3A",
  accentColor: "#FF69B4",

  colorPalette: [
    { name: "Orchid Ash", hex: "#D8A9AB", description: "Muted floral pink" },
    { name: "Celadon", hex: "#9DC3AA", description: "Muted ceramic green" },
    { name: "Periwinkle Gray", hex: "#8BA9DA", description: "Muted mineral blue" },
    { name: "Chalcedony", hex: "#E0B0FF", description: "Muted quartz purple" },
    { name: "Azurite", hex: "#4682B4", description: "Muted mineral blue" },
    { name: "Rose Fog", hex: "#905D5D", description: "Muted floral brown" },
    { name: "Slate", hex: "#98AFC7", description: "Muted stone blue" },
    { name: "Lavender Mist", hex: "#AB92BF", description: "Muted botanical purple" },
    { name: "Larimar", hex: "#8BA8B7", description: "Muted gemstone blue" },
    { name: "Wisteria Gray", hex: "#9A9AC1", description: "Muted botanical purple" }
  ],

  neutrals: [
    { name: "Paloma", hex: "#696969", description: "Natural stone gray" },
    { name: "Cheviot", hex: "#483C32", description: "Muted wool gray" },
    { name: "Platinum", hex: "#8E8E90", description: "Muted metal gray" },
    { name: "Pumice", hex: "#B8B8A9", description: "Muted stone gray" }
  ],

  colorsToAvoid: [
    { name: "Rhodamine", hex: "#FF69B4", description: "Synthetic pink" },
    { name: "Cerulean", hex: "#00FFFF", description: "Pure mineral blue" },
    { name: "Cadmium Yellow", hex: "#FFFF00", description: "Pure mineral pigment" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Synthetic magenta" },
    { name: "Viridian", hex: "#32CD32", description: "Pure mineral green" },
    { name: "Opera Rose", hex: "#FF69B4", description: "Synthetic pink" },
    { name: "Permanent Orange", hex: "#FFA500", description: "Pure mineral orange" },
    { name: "Vermillion", hex: "#FF0000", description: "Pure mineral red" },
    { name: "Dioxazine", hex: "#9370DB", description: "Synthetic violet" },
    { name: "Phthalo Green", hex: "#39FF14", description: "Synthetic green" }
  ],

  neutralsToAvoid: [
    { name: "Carbon", hex: "#000000", description: "Pure black pigment" },
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Burnt Umber", hex: "#7B3F00", description: "Earth brown pigment" },
    { name: "Yellow Ochre", hex: "#996515", description: "Earth pigment" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Soft Rose", 
        hex: "#E8D0D0",
        description: "Sheer coverage with muted cool undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Muted Ivory", 
        hex: "#F2E8E8",
        description: "Light coverage with subtle mauve undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Dusty Beige", 
        hex: "#D7C3C3",
        description: "Medium coverage for soft cool skin",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Mauve Nude", 
        hex: "#C6ACAC",
        description: "Full coverage with muted rose undertones",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Soft Taupe", 
        hex: "#B59B9B",
        description: "Rich coverage for medium muted skin",
        coverage: "full",
        undertone: "cool" 
      }
    ],
    applicationTips: {
      title: "Soft Summer Application Tip",
      description: "Use a stippling brush for a soft-focus finish. Build coverage gradually to maintain the characteristic softness of your complexion. Avoid heavy application that could look mask-like."
    },
    accessories: [
      {
        name: "Pewter Chain Necklace",
        type: "necklace",
        description: "Muted silver chain with soft finish",
        material: "pewter",
        style: "modern",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Great for both work and casual wear"
      },
      {
        name: "Grey Pearl Studs",
        type: "earrings",
        description: "Soft grey pearls in brushed silver",
        material: "silver and pearl",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect everyday elegance"
      },
      {
        name: "Matte Silver Bangle",
        type: "bracelet",
        description: "Wide bangle with brushed finish",
        material: "sterling silver",
        style: "modern",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Sophisticated casual accessory"
      },
      {
        name: "Mauve Cashmere Scarf",
        type: "scarf",
        description: "Soft, muted purple-pink blend",
        material: "cashmere",
        color: "#E0B0FF",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with gray and navy outfits"
      },
      {
        name: "Dove Gray Sunglasses",
        type: "sunglasses",
        description: "Matte gray frames with gradient lenses",
        material: "acetate",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        color: "#696969",
        occasion: "casual",
        pairing: "Complements soft summer palette"
      }
    ],
    accessoryTips: {
      title: "Soft Summer Accessory Tip",
      description: "Choose muted metals and stones without high shine. Layer soft-toned pieces for depth. Avoid bright or shiny accessories that could overwhelm your gentle coloring."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const warmAutumn: SeasonData = {
  id: 'warmAutumn',
  name: "Warm Autumn",
  title: "Warm Autumn",
  description: "A color season embodying golden warmth and rich earth tones",
  characteristics: "Features pure warm undertones with natural vibrancy",
  bgColor: "#D2691E",
  textColor: "#8B4513",
  accentColor: "#A0522D",

  colorPalette: [
    { name: "Mars Orange", hex: "#B7410E", description: "Iron oxide red" },
    { name: "Florentine Bronze", hex: "#CD7F32", description: "Classical metal brown" },
    { name: "Chartreuse", hex: "#808000", description: "Natural yellow green" },
    { name: "Amber", hex: "#C67C3B", description: "Fossilized resin" },
    { name: "Sinopia", hex: "#E2725B", description: "Natural earth pigment" },
    { name: "Orpiment", hex: "#DAA520", description: "Mineral yellow" },
    { name: "Azurite Bronze", hex: "#B87333", description: "Oxidized metal" },
    { name: "Viridian", hex: "#228B22", description: "Natural green pigment" },
    { name: "Yellow Ochre", hex: "#FFBF00", description: "Earth pigment" },
    { name: "Burnt Sienna", hex: "#D2691E", description: "Earth pigment" }
  ],

  neutrals: [
    { name: "Raw Sienna", hex: "#C2B280", description: "Natural earth pigment" },
    { name: "Cassel Earth", hex: "#C3B091", description: "Natural brown pigment" },
    { name: "Van Dyke Brown", hex: "#6F4E37", description: "Historical pigment" },
    { name: "Bronze Patina", hex: "#987456", description: "Aged metal brown" }
  ],

  colorsToAvoid: [
    { name: "Magenta", hex: "#FF00FF", description: "Synthetic pink" },
    { name: "Cerulean", hex: "#F0F8FF", description: "Pure mineral blue" },
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Cobalt Blue", hex: "#00FFFF", description: "Pure mineral blue" },
    { name: "Opera Rose", hex: "#FF69B4", description: "Synthetic pink" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Synthetic violet" },
    { name: "Viridian", hex: "#98FF98", description: "Pure green pigment" },
    { name: "Rose Madder", hex: "#FFB6C1", description: "Synthetic pink lake" },
    { name: "Ultramarine Violet", hex: "#E6E6FA", description: "Pure mineral violet" },
    { name: "Permanent Green", hex: "#39FF14", description: "Synthetic pigment" }
  ],

  neutralsToAvoid: [
    { name: "Lamp Black", hex: "#000000", description: "Pure carbon black" },
    { name: "Neutral Gray", hex: "#808A87", description: "Pure mineral gray" },
    { name: "Platinum", hex: "#C0C0C0", description: "Cool metallic gray" },
    { name: "Zinc White", hex: "#F0F8FF", description: "Cool white pigment" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Golden Beige", 
        hex: "#DAA520",
        description: "Light coverage with rich golden undertones",
        coverage: "light",
        undertone: "warm" 
      },
      { 
        name: "Amber", 
        hex: "#CD853F",
        description: "Medium coverage with warm amber undertones",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Bronze Tan", 
        hex: "#D2691E",
        description: "Full coverage with bronze undertones",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Copper", 
        hex: "#B87333",
        description: "Rich coverage for warm medium-deep skin",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Warm Chestnut", 
        hex: "#954535",
        description: "Full coverage for deep warm skin",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Warm Autumn Application Tip",
      description: "Warm foundation between fingers before applying to enhance golden undertones. Use pressing motions to build coverage while maintaining skin's natural warmth. Set with a bronzy powder for enhanced glow."
    },
    accessories: [
      {
        name: "Copper Statement Necklace",
        type: "necklace",
        description: "Mixed metals with copper dominance",
        material: "copper and bronze",
        style: "statement",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Stunning with earth-toned outfits"
      },
      {
        name: "Tiger's Eye Drops",
        type: "earrings",
        description: "Warm brown stones in bronze setting",
        material: "bronze and tiger's eye",
        style: "drop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect for both casual and dressy looks"
      },
      {
        name: "Mixed Metal Cuff",
        type: "bracelet",
        description: "Copper, bronze, and brass combination",
        material: "mixed metals",
        style: "cuff",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Makes a warm metallic statement"
      },
      {
        name: "Russet Silk Scarf",
        type: "scarf",
        description: "Rich autumn tones with copper threads",
        material: "silk",
        color: "#80461B",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with autumn colors"
      },
      {
        name: "Tortoise Shell Frames",
        type: "sunglasses",
        description: "Rich brown with copper accents",
        material: "acetate",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        color: "#D2691E",
        occasion: "casual",
        pairing: "Complements warm autumn coloring"
      }
    ],
    accessoryTips: {
      title: "Warm Autumn Accessory Tip",
      description: "Embrace rich metals like copper and bronze. Mix metals confidently for depth and interest. Choose warm stones like tiger's eye and amber to enhance your natural warmth."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const deepAutumn: SeasonData = {
  id: 'deepAutumn',
  name: "Deep Autumn",
  title: "Deep Autumn",
  description: "A color season defined by rich earth tones and deep warmth",
  characteristics: "Features concentrated warm pigments with depth",
  bgColor: "#8B4513",
  textColor: "#FFFFFF",
  accentColor: "#A0522D",

  colorPalette: [
    { name: "Garnet", hex: "#800020", description: "Deep mineral red" },
    { name: "Hemlock", hex: "#228B22", description: "Deep conifer green" },
    { name: "Rosewood", hex: "#C04000", description: "Rich wood red" },
    { name: "Henna", hex: "#CC5500", description: "Natural earth orange" },
    { name: "Bronzite", hex: "#B8860B", description: "Deep mineral gold" },
    { name: "Serpentine", hex: "#556B2F", description: "Deep mineral green" },
    { name: "Carnelian", hex: "#9B111E", description: "Deep mineral red" },
    { name: "Malachite", hex: "#004D4D", description: "Deep mineral green" },
    { name: "Jasper", hex: "#954535", description: "Deep mineral brown" },
    { name: "Oxidized Copper", hex: "#8B3103", description: "Aged metal brown" }
  ],

  neutrals: [
    { name: "Palisander", hex: "#382C1E", description: "Deep wood brown" },
    { name: "Antique Bronze", hex: "#804A00", description: "Aged metal brown" },
    { name: "Loess", hex: "#BDB76B", description: "Natural sediment" },
    { name: "Walnut", hex: "#5C4033", description: "Deep wood brown" }
  ],

  colorsToAvoid: [
    { name: "Rose Quartz", hex: "#FFD1DC", description: "Pale mineral pink" },
    { name: "Azurite", hex: "#89CFF0", description: "Light mineral blue" },
    { name: "Celadon", hex: "#98FF98", description: "Pale ceramic green" },
    { name: "Wisteria", hex: "#E6E6FA", description: "Pale botanical purple" },
    { name: "Naples Yellow", hex: "#FFFFE0", description: "Light mineral pigment" },
    { name: "Egyptian Blue", hex: "#87CEEB", description: "Light mineral blue" },
    { name: "Shell Pink", hex: "#FFE4E1", description: "Pale natural pink" },
    { name: "Pearl White", hex: "#FFDAB9", description: "Iridescent white" },
    { name: "Aquamarine", hex: "#E0FFFF", description: "Pale mineral blue" },
    { name: "Iris", hex: "#E6E6FA", description: "Pale botanical purple" }
  ],

  neutralsToAvoid: [
    { name: "Zinc White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "French Gray", hex: "#D3D3D3", description: "Cool mineral gray" },
    { name: "Mother of Pearl", hex: "#F0EAD6", description: "Iridescent white" },
    { name: "Chalk White", hex: "#F5F5DC", description: "Natural white" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Rich Caramel", 
        hex: "#C17817",
        description: "Medium coverage with deep warm undertones",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Deep Bronze", 
        hex: "#804A00",
        description: "Full coverage with rich bronze undertones",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Coffee", 
        hex: "#6F4E37",
        description: "Full coverage for deep warm skin",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Mahogany", 
        hex: "#C04000",
        description: "Rich coverage with deep red undertones",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Deep Auburn", 
        hex: "#8B4513",
        description: "Full coverage with rich auburn undertones",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Deep Autumn Application Tip",
      description: "Use a dense brush for maximum pigment deposit. Build coverage in thin layers to maintain depth without heaviness. Set with a deep-toned powder to enhance natural richness."
    },
    accessories: [
      {
        name: "Bronze Chain Necklace",
        type: "necklace",
        description: "Heavy bronze chain with garnet pendant",
        material: "bronze and garnet",
        style: "statement",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Dramatic with deep-toned outfits"
      },
      {
        name: "Garnet Studs",
        type: "earrings",
        description: "Deep red stones in antique gold",
        material: "gold and garnet",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Rich color for any occasion"
      },
      {
        name: "Oxidized Copper Bangle",
        type: "bracelet",
        description: "Dark copper with patina finish",
        material: "copper",
        style: "bangle",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Adds depth to casual looks"
      },
      {
        name: "Deep Burgundy Wrap",
        type: "scarf",
        description: "Rich wine color with bronze threads",
        material: "wool silk blend",
        color: "#800020",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Elegant with deep autumn colors"
      },
      {
        name: "Dark Tortoise Sunglasses",
        type: "sunglasses",
        description: "Deep brown tortoise with gold accents",
        material: "acetate",
        style: "oversized",
        image: "/placeholder.svg?height=80&width=80",
        color: "#8B4513",
        occasion: "casual",
        pairing: "Sophisticated shade option"
      }
    ],
    accessoryTips: {
      title: "Deep Autumn Accessory Tip",
      description: "Choose deep, rich metals with patina or oxidized finishes. Incorporate dark stones like garnet and deep amber. Layer pieces for sophisticated depth."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const softAutumn: SeasonData = {
  id: 'softAutumn',
  name: "Soft Autumn",
  title: "Soft Autumn",
  description: "A color season characterized by gentle warmth and muted earth tones",
  characteristics: "Features warm undertones with naturally muted qualities",
  bgColor: "#F5DEB3",
  textColor: "#8B4513",
  accentColor: "#A0522D",

  colorPalette: [
    { name: "Venetian Rose", hex: "#E9967A", description: "Muted terracotta pink" },
    { name: "Eucalyptus", hex: "#9DC183", description: "Muted verdant green" },
    { name: "Rosewood", hex: "#CCA9AC", description: "Subdued rose brown" },
    { name: "Verdigris", hex: "#5F9EA0", description: "Oxidized copper blue" },
    { name: "Desert Rose", hex: "#C08081", description: "Weathered rose pink" },
    { name: "Rattan", hex: "#DAA520", description: "Aged natural gold" },
    { name: "Vetiver", hex: "#8B8B4B", description: "Earthy moss green" },
    { name: "Sienna Sand", hex: "#E2A76F", description: "Natural buff orange" },
    { name: "Raw Umber", hex: "#B87333", description: "Earth pigment brown" },
    { name: "Madder Root", hex: "#B94E48", description: "Natural rouge red" }
  ],

  neutrals: [
    { name: "Driftwood", hex: "#907B71", description: "Natural gray brown" },
    { name: "Peat", hex: "#8B7355", description: "Organic brown" },
    { name: "Limestone", hex: "#808069", description: "Natural stone gray" },
    { name: "Hemp", hex: "#BDB76B", description: "Natural fiber beige" }
  ],

  colorsToAvoid: [
    { name: "Rhodamine", hex: "#FF69B4", description: "Synthetic fluorescent pink" },
    { name: "Cerulean", hex: "#00FFFF", description: "Synthetic blue pigment" },
    { name: "Cadmium Yellow", hex: "#FFFF00", description: "Pure mineral pigment" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Synthetic magenta" },
    { name: "Permanent Green", hex: "#39FF14", description: "Synthetic pigment" },
    { name: "Opera Pink", hex: "#FF69B4", description: "Synthetic rose" },
    { name: "Vermillion", hex: "#FF0000", description: "Pure red pigment" },
    { name: "Cobalt Blue", hex: "#4169E1", description: "Pure mineral blue" },
    { name: "Dioxazine", hex: "#9370DB", description: "Synthetic violet" },
    { name: "Viridian", hex: "#32CD32", description: "Pure green pigment" }
  ],

  neutralsToAvoid: [
    { name: "Ivory Black", hex: "#000000", description: "Pure carbon black" },
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Payne's Gray", hex: "#808A87", description: "Cool composite gray" },
    { name: "Prussian Blue", hex: "#000080", description: "Deep mineral blue" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Warm Ivory", 
        hex: "#FFFFF0",
        description: "Sheer coverage with soft warm undertones",
        coverage: "light",
        undertone: "warm" 
      },
      { 
        name: "Muted Gold", 
        hex: "#DAA520",
        description: "Light coverage with subtle golden undertones",
        coverage: "light",
        undertone: "warm" 
      },
      { 
        name: "Soft Beige", 
        hex: "#D2B48C",
        description: "Medium coverage with muted warm undertones",
        coverage: "medium",
        undertone: "warm" 
      },
      { 
        name: "Gentle Bronze", 
        hex: "#CD853F",
        description: "Full coverage with soft bronze undertones",
        coverage: "full",
        undertone: "warm" 
      },
      { 
        name: "Muted Tan", 
        hex: "#D2691E",
        description: "Rich coverage with subtle warm undertones",
        coverage: "full",
        undertone: "warm" 
      }
    ],
    applicationTips: {
      title: "Soft Autumn Application Tip",
      description: "Use a buffing brush for a diffused finish. Build coverage gradually to maintain skin's natural softness. Set with a muted warm-toned powder to enhance the gentle autumn glow."
    },
    accessories: [
      {
        name: "Matte Gold Chain",
        type: "necklace",
        description: "Brushed gold with smoky quartz pendant",
        material: "gold and smoky quartz",
        style: "delicate",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect for everyday elegance"
      },
      {
        name: "Smoky Topaz Studs",
        type: "earrings",
        description: "Muted brown stones in brushed gold",
        material: "gold and topaz",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Subtle sophistication for any look"
      },
      {
        name: "Leather Wrap Bracelet",
        type: "bracelet",
        description: "Soft brown leather with matte gold details",
        material: "leather and gold",
        style: "wrap",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Great for casual refinement"
      },
      {
        name: "Muted Olive Scarf",
        type: "scarf",
        description: "Soft green with golden undertones",
        material: "cotton silk blend",
        color: "#808000",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with autumn neutrals"
      },
      {
        name: "Matte Gold Aviators",
        type: "sunglasses",
        description: "Brushed gold frames with brown lenses",
        material: "metal",
        style: "aviator",
        image: "/placeholder.svg?height=80&width=80",
        color: "#CFB53B",
        occasion: "casual",
        pairing: "Subtle elegance for everyday"
      }
    ],
    accessoryTips: {
      title: "Soft Autumn Accessory Tip",
      description: "Select matte or brushed metals over high shine. Choose softly colored stones and materials. Layer delicate pieces for subtle depth without overwhelming your gentle coloring."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const coolWinter: SeasonData = {
  id: 'coolWinter',
  name: "Cool Winter",
  title: "Cool Winter",
  description: "A color season exemplifying pure cool tones with refined contrast",
  characteristics: "Features blue undertones with crystalline clarity",
  bgColor: "#E0FFFF",
  textColor: "#191970",
  accentColor: "#4169E1",

  colorPalette: [
    { name: "Crimson", hex: "#FF0000", description: "Blue-based red" },
    { name: "Sapphire", hex: "#4169E1", description: "Pure mineral blue" },
    { name: "Quinacridone Rose", hex: "#FF00FF", description: "Cool magenta" },
    { name: "Beryl", hex: "#50C878", description: "Cool blue-green" },
    { name: "Tanzanite", hex: "#8F00FF", description: "Cool violet" },
    { name: "Rose Quartz", hex: "#FFB7C5", description: "Cool pink mineral" },
    { name: "Cerulean", hex: "#0047AB", description: "Pure mineral blue" },
    { name: "Rhodamine", hex: "#FF00FF", description: "Cool synthetic pink" },
    { name: "Alizarin", hex: "#FF0000", description: "Cool synthetic red" },
    { name: "Iolite", hex: "#8F00FF", description: "Cool mineral violet" }
  ],

  neutrals: [
    { name: "Alpine", hex: "#FFFFFF", description: "Cool white" },
    { name: "Ebony", hex: "#000000", description: "Pure black" },
    { name: "Palladium", hex: "#E5E4E2", description: "Cool metallic" },
    { name: "Admiral", hex: "#000080", description: "Darkest blue" }
  ],

  colorsToAvoid: [
    { name: "Yellow Ochre", hex: "#FFE5B4", description: "Warm earth pigment" },
    { name: "Raw Sienna", hex: "#E2725B", description: "Warm earth pigment" },
    { name: "Burnt Umber", hex: "#8B4513", description: "Warm earth brown" },
    { name: "Bronze Yellow", hex: "#808000", description: "Warm metal oxide" },
    { name: "Mars Yellow", hex: "#FFDB58", description: "Warm iron oxide" },
    { name: "Copper", hex: "#CD7F32", description: "Warm metal" },
    { name: "Venetian Red", hex: "#FF7F50", description: "Warm earth oxide" },
    { name: "Indian Yellow", hex: "#FFD700", description: "Warm natural pigment" },
    { name: "Mars Orange", hex: "#CC5500", description: "Warm iron oxide" },
    { name: "Raw Umber", hex: "#8B4513", description: "Warm earth brown" }
  ],

  neutralsToAvoid: [
    { name: "Buff", hex: "#F5F5DC", description: "Warm natural tone" },
    { name: "Bronze", hex: "#CD7F32", description: "Warm metal" },
    { name: "Cassel Earth", hex: "#967117", description: "Warm brown pigment" },
    { name: "Naples Yellow", hex: "#FADA5E", description: "Warm mineral pigment" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Porcelain", 
        hex: "#FFF0F5",
        description: "Light coverage with cool pink undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Cool Rose", 
        hex: "#FFE4E1",
        description: "Medium coverage with rosy undertones",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Pink Ivory", 
        hex: "#F5F5F5",
        description: "Full coverage with blue undertones",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Cool Beige", 
        hex: "#E8BEAC",
        description: "Rich coverage with pink undertones",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Rose Beige", 
        hex: "#D4A5A5",
        description: "Full coverage for medium cool skin",
        coverage: "full",
        undertone: "cool" 
      }
    ],
    applicationTips: {
      title: "Cool Winter Application Tip",
      description: "Use a damp beauty sponge for refined application. Layer thin coats to maintain skin's natural coolness. Set with a translucent powder with subtle pink undertones for enhanced clarity."
    },
    accessories: [
      {
        name: "Platinum Chain",
        type: "necklace",
        description: "White gold chain with diamond pendant",
        material: "white gold and diamond",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Perfect for formal occasions"
      },
      {
        name: "Sapphire Studs",
        type: "earrings",
        description: "Deep blue stones in platinum setting",
        material: "platinum and sapphire",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Elegant for any occasion"
      },
      {
        name: "White Gold Tennis Bracelet",
        type: "bracelet",
        description: "Classic line bracelet with clear stones",
        material: "white gold and crystal",
        style: "tennis",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Adds sophisticated sparkle"
      },
      {
        name: "Ice Blue Silk Scarf",
        type: "scarf",
        description: "Cool blue with silver threads",
        material: "silk",
        color: "#F0F8FF",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with winter whites and navy"
      },
      {
        name: "Silver Chrome Sunglasses",
        type: "sunglasses",
        description: "Sleek silver frames with blue tint",
        material: "metal",
        style: "geometric",
        image: "/placeholder.svg?height=80&width=80",
        color: "#C0C0C0",
        occasion: "casual",
        pairing: "Modern complement to cool coloring"
      }
    ],
    accessoryTips: {
      title: "Cool Winter Accessory Tip",
      description: "Choose pure white metals like platinum and white gold. Incorporate clear stones and cool blues. Keep lines clean and geometric for maximum impact."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const clearWinter: SeasonData = {
  id: 'clearWinter',
  name: "Clear Winter",
  title: "Clear Winter",
  description: "A color season defined by pristine clarity and cool brilliance",
  characteristics: "Features crystalline undertones with high contrast",
  bgColor: "#E6E6FA",
  textColor: "#191970",
  accentColor: "#4169E1",

  colorPalette: [
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Azurite", hex: "#00FFFF", description: "Brilliant mineral blue" },
    { name: "Amaranth", hex: "#FF69B4", description: "Clear rose pink" },
    { name: "Royal Purple", hex: "#800080", description: "Pure violet pigment" },
    { name: "Vermillion", hex: "#FF0000", description: "Pure red pigment" },
    { name: "Diamond Blue", hex: "#F0F8FF", description: "Crystalline blue" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Pure magenta" },
    { name: "Permanent Green", hex: "#00FF00", description: "Pure pigment green" },
    { name: "Dioxazine", hex: "#8F00FF", description: "Pure violet pigment" },
    { name: "Ultramarine", hex: "#0000FF", description: "Pure blue pigment" }
  ],

  neutrals: [
    { name: "Zinc White", hex: "#FFFFFF", description: "Pure white" },
    { name: "Mars Black", hex: "#000000", description: "Dense black" },
    { name: "Platinum", hex: "#C0C0C0", description: "Cool metallic" },
    { name: "Neutral Gray", hex: "#808080", description: "Pure gray" }
  ],

  colorsToAvoid: [
    { name: "Raw Sienna", hex: "#D2691E", description: "Earth pigment" },
    { name: "Perylene Violet", hex: "#E0B0FF", description: "Muted synthetic" },
    { name: "Chromium Oxide", hex: "#9DC183", description: "Muted mineral green" },
    { name: "Caput Mortuum", hex: "#592720", description: "Deep earth oxide" },
    { name: "Burnt Orange", hex: "#CC5500", description: "Warm earth tone" },
    { name: "Olive Green", hex: "#808000", description: "Muted natural green" },
    { name: "Mars Orange", hex: "#E2725B", description: "Warm iron oxide" },
    { name: "Cerulean Chromium", hex: "#8BA9DA", description: "Muted mineral blue" },
    { name: "Manganese Violet", hex: "#8B008B", description: "Muted mineral purple" },
    { name: "Natural Umber", hex: "#483C32", description: "Earth brown" }
  ],

  neutralsToAvoid: [
    { name: "Buff Titanium", hex: "#F5F5DC", description: "Warm white pigment" },
    { name: "Yellow Ochre", hex: "#OCHRE", description: "Earth pigment" },
    { name: "Van Dyke Brown", hex: "#664228", description: "Natural brown" },
    { name: "Sepia", hex: "#704214", description: "Natural brown ink" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Pure White", 
        hex: "#FFFFFF",
        description: "Sheer coverage with neutral undertones",
        coverage: "light",
        undertone: "neutral" 
      },
      { 
        name: "Clear Ivory", 
        hex: "#FFFFF0",
        description: "Light coverage with bright undertones",
        coverage: "light",
        undertone: "neutral" 
      },
      { 
        name: "Crystal Beige", 
        hex: "#F5F5DC",
        description: "Medium coverage with neutral undertones",
        coverage: "medium",
        undertone: "neutral" 
      },
      { 
        name: "Pure Beige", 
        hex: "#F5DEB3",
        description: "Full coverage with clear undertones",
        coverage: "full",
        undertone: "neutral" 
      },
      { 
        name: "Clear Tan", 
        hex: "#D2B48C",
        description: "Full coverage for medium clear skin",
        coverage: "full",
        undertone: "neutral" 
      }
    ],
    applicationTips: {
      title: "Clear Winter Application Tip",
      description: "Apply with precision tools for crystal-clear finish. Focus on creating flawless coverage without masking skin's natural clarity. Set with a high-definition powder for maximum refinement."
    },
    accessories: [
      {
        name: "Crystal Drop Necklace",
        type: "necklace",
        description: "Clear crystal pendant on silver chain",
        material: "silver and crystal",
        style: "pendant",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Striking with black or jewel tones"
      },
      {
        name: "Diamond Studs",
        type: "earrings",
        description: "Clear stones in white gold setting",
        material: "white gold and diamond",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Classic elegance for any outfit"
      },
      {
        name: "Silver Link Bracelet",
        type: "bracelet",
        description: "High polish silver chain links",
        material: "sterling silver",
        style: "chain",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Modern sophistication for any look"
      },
      {
        name: "Pure White Silk Scarf",
        type: "scarf",
        description: "Bright white with crystal beading",
        material: "silk",
        color: "#FFFFFF",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Elegant with winter palette"
      },
      {
        name: "Mirror Chrome Sunglasses",
        type: "sunglasses",
        description: "Polished silver frames with mirror lenses",
        material: "metal",
        style: "modern",
        image: "/placeholder.svg?height=80&width=80",
        color: "#FFFFFF",
        occasion: "casual",
        pairing: "Ultra-modern statement piece"
      }
    ],
    accessoryTips: {
      title: "Clear Winter Accessory Tip",
      description: "Select high-polish metals and clear stones for maximum brilliance. Embrace dramatic contrasts and pristine finishes. Choose pieces with clean lines and maximum sparkle."
    }
  }
};

import { 
  SeasonData, 
  ColorInfo, 
  FoundationInfo, 
  Accessory, 
  ApplicationTip, 
  AccessoryTip 
} from './types';

export const deepWinter: SeasonData = {
  id: 'deepWinter',
  name: "Deep Winter",
  title: "Deep Winter",
  description: "A color season characterized by rich depth and cool undertones",
  characteristics: "Features cool undertones with high depth intensity",
  bgColor: "#483D8B",
  textColor: "#FFFFFF",
  accentColor: "#9370DB",

  colorPalette: [
    { name: "Byzantium", hex: "#301934", description: "Rich violet-purple" },
    { name: "Carmine", hex: "#9B111E", description: "Deep blue-red" },
    { name: "Prussian Blue", hex: "#000080", description: "Intense indigo blue" },
    { name: "Malachite", hex: "#125125", description: "Saturated blue-green" },
    { name: "Porphyry", hex: "#472D47", description: "Deep violet-black" },
    { name: "Oxblood", hex: "#8B0000", description: "Deep wine red" },
    { name: "Indigo", hex: "#191970", description: "Saturated blue" },
    { name: "Tyrian Purple", hex: "#8B008B", description: "Rich royal purple" },
    { name: "Viridian", hex: "#228B22", description: "Deep blue-green" },
    { name: "Claret", hex: "#722F37", description: "Deep red-purple" }
  ],

  neutrals: [
    { name: "Carbon", hex: "#000000", description: "Pure black" },
    { name: "Obsidian", hex: "#36454F", description: "Blue-black gray" },
    { name: "Maritime", hex: "#000080", description: "Darkest marine blue" },
    { name: "Graphite", hex: "#4A4A4A", description: "Deep cool gray" }
  ],

  colorsToAvoid: [
    { name: "Raw Sienna", hex: "#D2691E", description: "Warm earth pigment" },
    { name: "Naples Yellow", hex: "#FADA5E", description: "Warm light mineral" },
    { name: "Terracotta", hex: "#E2725B", description: "Warm earth oxide" },
    { name: "Burnt Umber", hex: "#8B4513", description: "Warm earth brown" },
    { name: "Ochre", hex: "#CC7722", description: "Warm mineral pigment" },
    { name: "Mars Orange", hex: "#FF4500", description: "Warm iron oxide" },
    { name: "Venetian Red", hex: "#C80815", description: "Warm earth red" },
    { name: "Bronze", hex: "#CD7F32", description: "Warm metallic brown" },
    { name: "Gamboge", hex: "#E49B0F", description: "Warm natural yellow" },
    { name: "Sepia", hex: "#704214", description: "Warm natural brown" }
  ],

  neutralsToAvoid: [
    { name: "Ecru", hex: "#C2B280", description: "Warm natural beige" },
    { name: "Raw Umber", hex: "#826644", description: "Warm earth brown" },
    { name: "Chamois", hex: "#F5DEB3", description: "Warm natural buff" },
    { name: "Cassel Earth", hex: "#967117", description: "Warm brown pigment" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Deep Ivory", 
        hex: "#F5F5F5",
        description: "Light coverage with cool deep undertones",
        coverage: "light",
        undertone: "cool" 
      },
      { 
        name: "Dark Rose", 
        hex: "#E8BFB6",
        description: "Medium coverage with deep cool undertones",
        coverage: "medium",
        undertone: "cool" 
      },
      { 
        name: "Rich Beige", 
        hex: "#D4A5A5",
        description: "Full coverage with deep rosy undertones",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Deep Bronze", 
        hex: "#CD853F",
        description: "Rich coverage for deep cool skin",
        coverage: "full",
        undertone: "cool" 
      },
      { 
        name: "Dark Cocoa", 
        hex: "#8B4513",
        description: "Full coverage for deepest cool skin",
        coverage: "full",
        undertone: "cool" 
      }
    ],
    applicationTips: {
      title: "Deep Winter Application Tip",
      description: "Use dense brushes for maximum color saturation. Build coverage in layers to maintain depth without heaviness. Set with a deep-toned powder to enhance natural richness."
    },
    accessories: [
      {
        name: "Black Pearl Necklace",
        type: "necklace",
        description: "Dark pearls with white gold clasp",
        material: "white gold and black pearl",
        style: "strand",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Dramatic with winter clothing"
      },
      {
        name: "Deep Ruby Drops",
        type: "earrings",
        description: "Dark red stones in platinum setting",
        material: "platinum and ruby",
        style: "drop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Elegant for formal occasions"
      },
      {
        name: "Gunmetal Cuff",
        type: "bracelet",
        description: "Dark metal with black diamond accents",
        material: "gunmetal and diamond",
        style: "cuff",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Bold statement for any outfit"
      },
      {
        name: "Black Cashmere Wrap",
        type: "scarf",
        description: "Pure black with subtle sheen",
        material: "cashmere",
        color: "#000000",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Luxurious with winter palette"
      },
      {
        name: "Black Metal Sunglasses",
        type: "sunglasses",
        description: "Matte black frames with dark lenses",
        material: "metal",
        style: "square",
        image: "/placeholder.svg?height=80&width=80",
        color: "#000000",
        occasion: "casual",
        pairing: "Sophisticated shade option"
      }
    ],
    accessoryTips: {
      title: "Deep Winter Accessory Tip",
      description: "Choose dark metals and deeply colored stones. Embrace high contrast between light and dark elements. Layer pieces for sophisticated depth and drama."
    }
  }
};