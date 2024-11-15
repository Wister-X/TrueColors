import { SeasonData } from '../../interfaces/interfaces-definition';

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
        undertone: "Cool" 
      },
      { 
        name: "Muted Ivory", 
        hex: "#F2E8E8",
        description: "Light coverage with subtle mauve undertones",
        coverage: "light",
        undertone: "Cool" 
      },
      { 
        name: "Dusty Beige", 
        hex: "#D7C3C3",
        description: "Medium coverage for soft cool skin",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Mauve Nude", 
        hex: "#C6ACAC",
        description: "Full coverage with muted rose undertones",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Soft Taupe", 
        hex: "#B59B9B",
        description: "Rich coverage for medium muted skin",
        coverage: "full",
        undertone: "Cool" 
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
