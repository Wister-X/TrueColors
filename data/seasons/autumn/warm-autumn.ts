import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Warm" 
      },
      { 
        name: "Amber", 
        hex: "#CD853F",
        description: "Medium coverage with warm amber undertones",
        coverage: "medium",
        undertone: "Warm" 
      },
      { 
        name: "Bronze Tan", 
        hex: "#D2691E",
        description: "Full coverage with bronze undertones",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Copper", 
        hex: "#B87333",
        description: "Rich coverage for warm medium-deep skin",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Warm Chestnut", 
        hex: "#954535",
        description: "Full coverage for deep warm skin",
        coverage: "full",
        undertone: "Warm" 
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
