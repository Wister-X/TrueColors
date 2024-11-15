import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Neutral" 
      },
      { 
        name: "Clear Ivory", 
        hex: "#FFFFF0",
        description: "Light coverage with bright undertones",
        coverage: "light",
        undertone: "Neutral" 
      },
      { 
        name: "Crystal Beige", 
        hex: "#F5F5DC",
        description: "Medium coverage with neutral undertones",
        coverage: "medium",
        undertone: "Neutral" 
      },
      { 
        name: "Pure Beige", 
        hex: "#F5DEB3",
        description: "Full coverage with clear undertones",
        coverage: "full",
        undertone: "Neutral" 
      },
      { 
        name: "Clear Tan", 
        hex: "#D2B48C",
        description: "Full coverage for medium clear skin",
        coverage: "full",
        undertone: "Neutral" 
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
