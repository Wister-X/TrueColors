import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Cool" 
      },
      { 
        name: "Shell Pink", 
        hex: "#FFE4E1",
        description: "Light coverage for fair skin with rosy undertones",
        coverage: "light",
        undertone: "Cool" 
      },
      { 
        name: "Cool Ivory", 
        hex: "#F5F5F5",
        description: "Medium coverage with delicate cool undertones",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Soft Blush", 
        hex: "#E8BFB6",
        description: "Buildable coverage for light skin with pink undertones",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Light Rose Beige", 
        hex: "#D4B5A8",
        description: "Full coverage for light-medium cool skin",
        coverage: "full",
        undertone: "Cool" 
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
