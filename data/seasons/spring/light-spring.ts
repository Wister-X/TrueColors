import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Warm" 
      },
      { 
        name: "Peach Beige", 
        hex: "#FFE5B4",
        description: "Light-medium coverage with warm undertones",
        coverage: "light-medium",
        undertone: "Warm" 
      },
      { 
        name: "Golden Medium", 
        hex: "#DEB887",
        description: "Medium coverage for light-medium skin",
        coverage: "medium",
        undertone: "Warm" 
      },
      { 
        name: "Warm Sand", 
        hex: "#D2B48C",
        description: "Medium-full coverage for medium skin",
        coverage: "medium-full",
        undertone: "Warm" 
      },
      { 
        name: "Golden Tan", 
        hex: "#D2691E",
        description: "Full coverage for medium-deep skin",
        coverage: "full",
        undertone: "Warm" 
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
