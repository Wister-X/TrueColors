import { SeasonData } from '../../interfaces';

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
        undertone: "Warm" 
      },
      { 
        name: "Deep Bronze", 
        hex: "#804A00",
        description: "Full coverage with rich bronze undertones",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Coffee", 
        hex: "#6F4E37",
        description: "Full coverage for deep warm skin",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Mahogany", 
        hex: "#C04000",
        description: "Rich coverage with deep red undertones",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Deep Auburn", 
        hex: "#8B4513",
        description: "Full coverage with rich auburn undertones",
        coverage: "full",
        undertone: "Warm" 
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
