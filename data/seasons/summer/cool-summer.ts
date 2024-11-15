import { SeasonData } from '../../interfaces/interfaces-definition';

export const coolSummer: SeasonData = {
  id: 'coolSummer',
  name: "Cool Summer",
  title: "Cool Summer",
  description: "A color season defined by refined cool tones with medium intensity",
  characteristics: "Features pure cool undertones with balanced saturation",
  bgColor: "#E0FFFF",
  textColor: "#191970",
  accentColor: "#4169E1",

  colorPalette: [
    { name: "Kunzite", hex: "#F7CAC9", description: "Cool mineral pink" },
    { name: "Lapis", hex: "#0072B5", description: "Pure mineral blue" },
    { name: "Iolite", hex: "#6A5ACD", description: "Cool mineral violet" },
    { name: "Muscovite", hex: "#C9A0DC", description: "Cool mineral purple" },
    { name: "Amazonite", hex: "#86B8B1", description: "Cool mineral turquoise" },
    { name: "Rhodonite", hex: "#D84666", description: "Cool mineral red" },
    { name: "Azurite", hex: "#4682B4", description: "Cool mineral blue" },
    { name: "Fluorite", hex: "#DA70D6", description: "Cool mineral purple" },
    { name: "Celestine", hex: "#77B5FE", description: "Cool mineral blue" },
    { name: "Rhodochrosite", hex: "#FF007F", description: "Cool mineral pink" }
  ],

  neutrals: [
    { name: "Moonstone", hex: "#F0F8FF", description: "Translucent white" },
    { name: "Hematite", hex: "#71797E", description: "Cool mineral gray" },
    { name: "Chalcedony", hex: "#98AFC7", description: "Cool quartz gray" },
    { name: "Magnetite", hex: "#8B8589", description: "Cool iron gray" }
  ],

  colorsToAvoid: [
    { name: "Mars Orange", hex: "#FF7518", description: "Iron oxide orange" },
    { name: "Raw Sienna", hex: "#CC7722", description: "Earth pigment" },
    { name: "Bronze", hex: "#CD7F32", description: "Metallic brown" },
    { name: "Indian Yellow", hex: "#FFBF00", description: "Historical pigment" },
    { name: "Chrome Green", hex: "#32CD32", description: "Mineral pigment" },
    { name: "Venetian Red", hex: "#FF7F50", description: "Earth pigment" },
    { name: "Yellow Ochre", hex: "#FFDB58", description: "Earth pigment" },
    { name: "Copper", hex: "#B87333", description: "Metallic pigment" },
    { name: "Burnt Sienna", hex: "#B7410E", description: "Earth pigment" },
    { name: "Naples Yellow", hex: "#FFE5B4", description: "Historical pigment" }
  ],

  neutralsToAvoid: [
    { name: "Raw Umber", hex: "#C19A6B", description: "Earth pigment" },
    { name: "Sepia", hex: "#8B4513", description: "Natural brown" },
    { name: "Buff Titanium", hex: "#F5F5DC", description: "Warm white" },
    { name: "Van Dyke Brown", hex: "#996515", description: "Historical brown" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Rose Porcelain", 
        hex: "#FFF0F5",
        description: "Lightweight coverage with cool pink undertones",
        coverage: "light",
        undertone: "Cool" 
      },
      { 
        name: "Cool Ivory", 
        hex: "#F5F5F5",
        description: "Medium coverage for fair cool skin",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Pink Beige", 
        hex: "#E8BEAC",
        description: "Natural finish with rosy undertones",
        coverage: "medium",
        undertone: "Cool" 
      },
      { 
        name: "Rose Tan", 
        hex: "#D4A5A5",
        description: "Full coverage with cool undertones",
        coverage: "full",
        undertone: "Cool" 
      },
      { 
        name: "Cool Almond", 
        hex: "#BC8F8F",
        description: "Rich coverage for medium cool skin",
        coverage: "full",
        undertone: "Cool" 
      }
    ],
    applicationTips: {
      title: "Cool Summer Application Tip",
      description: "Apply with a damp beauty sponge for an airbrushed finish. Layer gradually to maintain skin's natural transparency. Set with a cool-toned powder to enhance rosy undertones."
    },
    accessories: [
      {
        name: "White Pearl Strand",
        type: "necklace",
        description: "Classic white pearls with silver clasp",
        material: "silver and pearl",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Elegant with both casual and formal attire"
      },
      {
        name: "Blue Topaz Drops",
        type: "earrings",
        description: "Cool blue stones in silver setting",
        material: "silver and topaz",
        style: "drop",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "dressy",
        pairing: "Beautiful for special occasions"
      },
      {
        name: "Silver Link Bracelet",
        type: "bracelet",
        description: "Classic silver chain link design",
        material: "sterling silver",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect for everyday wear"
      },
      {
        name: "Periwinkle Silk Scarf",
        type: "scarf",
        description: "Cool blue-purple silk",
        material: "silk",
        color: "#CCCCFF",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Lovely accent for neutral outfits"
      },
      {
        name: "Silver Frame Sunglasses",
        type: "sunglasses",
        description: "Cool silver frames with gray lenses",
        material: "metal",
        style: "classic",
        image: "/placeholder.svg?height=80&width=80",
        color: "#C0C0C0",
        occasion: "casual",
        pairing: "Enhances cool summer coloring"
      }
    ],
    accessoryTips: {
      title: "Cool Summer Accessory Tip",
      description: "Embrace cool metals like silver and white gold. Choose cool-toned stones in blue and purple hues. Keep jewelry refined and avoid yellow gold or warm stones."
    }
  }
};
