import { CommonFeatures, SeasonData, SeasonFamily } from '../interfaces/interfaces-definition';
import { SeasonSubtype } from '../types/types-definition';

// Import season families
import { SPRING_SEASONS } from './spring/spring-index';
import { SUMMER_SEASONS } from './summer/summer-index';
import { AUTUMN_SEASONS } from './autumn/autumn-index';
import { WINTER_SEASONS } from './winter/winter-index';

// Combined season data object with proper typing
export const SEASONS: Record<string, SeasonFamily> = {
  SPRING: SPRING_SEASONS,
  SUMMER: SUMMER_SEASONS,
  AUTUMN: AUTUMN_SEASONS,
  WINTER: WINTER_SEASONS
};

// Helper function with proper type safety
export const getSeasonByName = (name: SeasonSubtype): SeasonData | undefined => {
  const allSeasons: Record<string, SeasonFamily> = SEASONS;
  
  for (const seasonFamily of Object.values(allSeasons)) {
    const season = seasonFamily[name];
    if (season) return season;
  }
  return undefined;
};

// Re-export all seasons
export * from './spring/spring-index';
export * from './summer/summer-index';
export * from './autumn/autumn-index';
export * from './winter/winter-index';

// Add CommonFeatures export
export const commonFeatures: CommonFeatures = {
  steps: {
    colorAnalysis: {
      step: 1,
      title: "Color Analysis",
      description: "Determine your natural coloring and undertones"
    },
    seasonReveal: {
      step: 2,
      title: "Season Reveal",
      description: "Discover your unique color season"
    },
    colorsToWear: {
      step: 3,
      title: "Colors to Wear",
      description: "Explore your most flattering color palette"
    },
    colorsToAvoid: {
      step: 4,
      title: "Colors to Avoid",
      description: "Learn which colors to minimize in your wardrobe"
    },
    accessories: {
      step: 5,
      title: "Accessories",
      description: "Find the perfect accessories for your season"
    },
    makeup: {
      step: 6,
      title: "Makeup",
      description: "Discover your ideal makeup colors and techniques"
    }
  },
  shareOptions: [
    {
      icon: "share-social",
      text: "Share Your Results",
      color: "#4267B2"
    }
  ],
  tooltips: {
    colorSwatch: "Click to see color details",
    shareButton: "Share your color season",
    progressBar: "Your progress through the analysis",
    seasonCard: "Click to explore this season",
    colorPalette: "Your recommended color palette"
  }
};
