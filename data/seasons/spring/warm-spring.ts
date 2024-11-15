import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Warm" 
      },
      { 
        name: "Honey Beige", 
        hex: "#DEB887",
        description: "Medium coverage with rich warm undertones",
        coverage: "medium",
        undertone: "Warm" 
      },
      { 
        name: "Warm Gold", 
        hex: "#DAA520",
        description: "Full coverage for warm medium skin",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Golden Tan", 
        hex: "#D2691E",
        description: "Rich coverage for medium-deep warm skin",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Bronze", 
        hex: "#CD853F",
        description: "Full coverage with golden bronze undertones",
        coverage: "full",
        undertone: "Warm" 
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
