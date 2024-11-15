import { SeasonData } from '../../interfaces';

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
        undertone: "Cool" 
      },
      { 
        name: "Dark Rose", 
        hex: "#E8BFB6",
        description: "Medium coverage with deep cool undertones",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Rich Beige", 
        hex: "#D4A5A5",
        description: "Full coverage with deep rosy undertones",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Deep Bronze", 
        hex: "#CD853F",
        description: "Rich coverage for deep cool skin",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Dark Cocoa", 
        hex: "#8B4513",
        description: "Full coverage for deepest cool skin",
        coverage: "full",
        undertone: "Cool" 
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
