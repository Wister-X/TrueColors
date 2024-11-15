import { SeasonData } from '../../interfaces/interfaces-definition';

export const softAutumn: SeasonData = {
  id: 'softAutumn',
  name: "Soft Autumn",
  title: "Soft Autumn",
  description: "A color season characterized by gentle warmth and muted earth tones",
  characteristics: "Features warm undertones with naturally muted qualities",
  bgColor: "#F5DEB3",
  textColor: "#8B4513",
  accentColor: "#A0522D",

  colorPalette: [
    { name: "Venetian Rose", hex: "#E9967A", description: "Muted terracotta pink" },
    { name: "Eucalyptus", hex: "#9DC183", description: "Muted verdant green" },
    { name: "Rosewood", hex: "#CCA9AC", description: "Subdued rose brown" },
    { name: "Verdigris", hex: "#5F9EA0", description: "Oxidized copper blue" },
    { name: "Desert Rose", hex: "#C08081", description: "Weathered rose pink" },
    { name: "Rattan", hex: "#DAA520", description: "Aged natural gold" },
    { name: "Vetiver", hex: "#8B8B4B", description: "Earthy moss green" },
    { name: "Sienna Sand", hex: "#E2A76F", description: "Natural buff orange" },
    { name: "Raw Umber", hex: "#B87333", description: "Earth pigment brown" },
    { name: "Madder Root", hex: "#B94E48", description: "Natural rouge red" }
  ],

  neutrals: [
    { name: "Driftwood", hex: "#907B71", description: "Natural gray brown" },
    { name: "Peat", hex: "#8B7355", description: "Organic brown" },
    { name: "Limestone", hex: "#808069", description: "Natural stone gray" },
    { name: "Hemp", hex: "#BDB76B", description: "Natural fiber beige" }
  ],

  colorsToAvoid: [
    { name: "Rhodamine", hex: "#FF69B4", description: "Synthetic fluorescent pink" },
    { name: "Cerulean", hex: "#00FFFF", description: "Synthetic blue pigment" },
    { name: "Cadmium Yellow", hex: "#FFFF00", description: "Pure mineral pigment" },
    { name: "Quinacridone", hex: "#FF00FF", description: "Synthetic magenta" },
    { name: "Permanent Green", hex: "#39FF14", description: "Synthetic pigment" },
    { name: "Opera Pink", hex: "#FF69B4", description: "Synthetic rose" },
    { name: "Vermillion", hex: "#FF0000", description: "Pure red pigment" },
    { name: "Cobalt Blue", hex: "#4169E1", description: "Pure mineral blue" },
    { name: "Dioxazine", hex: "#9370DB", description: "Synthetic violet" },
    { name: "Viridian", hex: "#32CD32", description: "Pure green pigment" }
  ],

  neutralsToAvoid: [
    { name: "Ivory Black", hex: "#000000", description: "Pure carbon black" },
    { name: "Titanium White", hex: "#FFFFFF", description: "Pure white pigment" },
    { name: "Payne's Gray", hex: "#808A87", description: "Cool composite gray" },
    { name: "Prussian Blue", hex: "#000080", description: "Deep mineral blue" }
  ],

  makeup: {
    foundation: [
      { 
        name: "Warm Ivory", 
        hex: "#FFFFF0",
        description: "Sheer coverage with soft warm undertones",
        coverage: "light",
        undertone: "Warm" 
      },
      { 
        name: "Muted Gold", 
        hex: "#DAA520",
        description: "Light coverage with subtle golden undertones",
        coverage: "light",
        undertone: "Warm" 
      },
      { 
        name: "Soft Beige", 
        hex: "#D2B48C",
        description: "Medium coverage with muted warm undertones",
        coverage: "medium",
        undertone: "Warm" 
      },
      { 
        name: "Gentle Bronze", 
        hex: "#CD853F",
        description: "Full coverage with soft bronze undertones",
        coverage: "full",
        undertone: "Warm" 
      },
      { 
        name: "Muted Tan", 
        hex: "#D2691E",
        description: "Rich coverage with subtle warm undertones",
        coverage: "full",
        undertone: "Warm" 
      }
    ],
    applicationTips: {
      title: "Soft Autumn Application Tip",
      description: "Use a buffing brush for a diffused finish. Build coverage gradually to maintain skin's natural softness. Set with a muted warm-toned powder to enhance the gentle autumn glow."
    },
    accessories: [
      {
        name: "Matte Gold Chain",
        type: "necklace",
        description: "Brushed gold with smoky quartz pendant",
        material: "gold and smoky quartz",
        style: "delicate",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Perfect for everyday elegance"
      },
      {
        name: "Smoky Topaz Studs",
        type: "earrings",
        description: "Muted brown stones in brushed gold",
        material: "gold and topaz",
        style: "stud",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Subtle sophistication for any look"
      },
      {
        name: "Leather Wrap Bracelet",
        type: "bracelet",
        description: "Soft brown leather with matte gold details",
        material: "leather and gold",
        style: "wrap",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "casual",
        pairing: "Great for casual refinement"
      },
      {
        name: "Muted Olive Scarf",
        type: "scarf",
        description: "Soft green with golden undertones",
        material: "cotton silk blend",
        color: "#808000",
        image: "/placeholder.svg?height=80&width=80",
        occasion: "versatile",
        pairing: "Beautiful with autumn neutrals"
      },
      {
        name: "Matte Gold Aviators",
        type: "sunglasses",
        description: "Brushed gold frames with brown lenses",
        material: "metal",
        style: "aviator",
        image: "/placeholder.svg?height=80&width=80",
        color: "#CFB53B",
        occasion: "casual",
        pairing: "Subtle elegance for everyday"
      }
    ],
    accessoryTips: {
      title: "Soft Autumn Accessory Tip",
      description: "Select matte or brushed metals over high shine. Choose softly colored stones and materials. Layer delicate pieces for subtle depth without overwhelming your gentle coloring."
    }
  }
};
