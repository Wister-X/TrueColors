export const seasonalData = {
    spring: {
      lightSpring: {
        id: 'lightSpring',
        name: 'Light Spring',
        title: "You're a Light Spring",
        description: "Your color season radiates freshness, warmth, and delicate clarity",
        characteristics: "Light Springs have delicate coloring with warm undertones, golden blonde or light brown hair, and light eyes",
        bgColor: "#FFF5E1",
        textColor: "#3A3A3A",
        accentColor: "#6B6B6B",
        colorPalette: [
          { name: "Peach Blossom", hex: "#FFE5B4", description: "A soft, warm peach that brightens your complexion" },
          { name: "Fresh Mint", hex: "#98FF98", description: "A clear, light green that adds vibrancy" },
          { name: "Warm Yellow", hex: "#FFE87C", description: "A sunny yellow that complements your warm undertones" },
          { name: "Sky Blue", hex: "#87CEEB", description: "A clear, light blue that maintains freshness" },
          { name: "Coral Pink", hex: "#FFB6C1", description: "A warm pink that adds a gentle flush of color" }
        ],
        neutrals: [
          { name: "Ivory", hex: "#FFFFF0", description: "A warm white that softly illuminates" },
          { name: "Light Beige", hex: "#F5F5DC", description: "A gentle neutral that harmonizes with your palette" },
          { name: "Warm Gray", hex: "#D3D3D3", description: "A light gray with warm undertones" }
        ],
        colorsToAvoid: [
          { name: "Black", hex: "#000000", description: "Too harsh and overpowering" },
          { name: "Cool Gray", hex: "#808080", description: "Clashes with your warm undertones" }
        ]
      }
    }
  };
  
  export const commonFeatures = {
    steps: {
      colorAnalysis: { 
        step: 1, 
        title: "Color Analysis",
        description: "Discover your unique seasonal color type"
      },
      colorPalette: { 
        step: 2, 
        title: "Color Palette",
        description: "View your personalized color recommendations"
      },
      neutrals: { 
        step: 3, 
        title: "Neutrals",
        description: "Find your best neutral and base colors"
      },
      colorsToAvoid: { 
        step: 4, 
        title: "Colors to Avoid",
        description: "Learn which colors to minimize in your wardrobe"
      }
    },
    shareOptions: [
      { icon: 'flower-outline', text: 'Share with friends', color: '#FF69B4' },
      { icon: 'mail-outline', text: 'Contact Support', color: '#4169E1' },
      { icon: 'diamond-outline', text: 'Rate Us', color: '#9370DB' },
      { icon: 'logo-instagram', text: 'Follow on Instagram', color: '#C13584' }
    ]
  };