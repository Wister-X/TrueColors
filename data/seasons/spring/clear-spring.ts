import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Neutral" 
      },
      { 
        name: "Pure Beige", 
        hex: "#F5DEB3",
        description: "Medium coverage with clear undertones",
        coverage: "medium",
        undertone: "Neutral" 
      },
      { 
        name: "Golden Medium", 
        hex: "#DEB887",
        description: "Full coverage with warm golden undertones",
        coverage: "medium",
        undertone: "Warm" 
      },
      { 
        name: "Warm Caramel", 
        hex: "#D2B48C",
        description: "Full coverage for medium-deep skin",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Clear Toffee", 
        hex: "#CD853F",
        description: "Full coverage for deep skin",
        coverage: "full",
        undertone: "Warm" 
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
