import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Cool" 
      },
      { 
        name: "Cool Rose", 
        hex: "#FFE4E1",
        description: "Medium coverage with rosy undertones",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Pink Ivory", 
        hex: "#F5F5F5",
        description: "Full coverage with blue undertones",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Cool Beige", 
        hex: "#E8BEAC",
        description: "Rich coverage with pink undertones",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Rose Beige", 
        hex: "#D4A5A5",
        description: "Full coverage for medium cool skin",
        coverage: "full",
        undertone: "Cool" 
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
