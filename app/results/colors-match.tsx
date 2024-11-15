import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import { ColorInfoOverlay } from '@/components/results/color-info-overlay';
import { ColorSwatch } from '@/components/results/color-swatch';
import { ShareDrawer } from '@/components/results/share-drawer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SEASONS } from '@/data/seasons/seasons-index';
import { ColorInfo, SeasonData, SeasonFamily } from '@/data/interfaces/interfaces-definition';
import { ResultLayout } from '@/components/ResultLayout';
import { ColorSection } from '@/components/ColorSection';

const AnimatedThemedText = Animated.createAnimatedComponent(ThemedText);
const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

interface ColorsMatchProps {
  seasonId: keyof typeof SEASONS;
}

export default function ColorsMatch({ seasonId }: ColorsMatchProps) {
  const [currentStep] = useState(2);
  const [selectedColor, setSelectedColor] = useState<ColorInfo | null>(null);
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);

  const seasonFamily = SEASONS[seasonId] as SeasonFamily;
  const season = Object.values(seasonFamily)[0] as SeasonData;

  if (!season) {
    return (
      <ResultLayout seasonData={season} currentStep={currentStep} totalSteps={6}>
        <ThemedText style={styles.errorText}>Season not found</ThemedText>
      </ResultLayout>
    );
  }

  const handleColorPress = (color: ColorInfo) => {
    setSelectedColor(color);
  };

  return (
    <ResultLayout seasonData={season} currentStep={currentStep} totalSteps={6}>
      <AnimatedThemedText
        entering={FadeInDown.springify()}
        type="title"
        style={{ color: season.textColor }}
      >
        Colors to Wear
      </AnimatedThemedText>

      <AnimatedThemedText
        entering={FadeInDown.delay(100).springify()}
        type="subtitle"
        style={{ color: season.accentColor }}
      >
        Your most flattering colors
      </AnimatedThemedText>

      <AnimatedThemedView
        entering={FadeInDown.delay(700).springify()}
        style={[styles.tipContainer, {
          backgroundColor: season.bgColor,
          borderColor: season.accentColor
        }]}
      >
        {/* Tip container content */}
      </AnimatedThemedView>

      <ColorSection
        title="Your Color Palette"
        description="Colors that complement your natural features"
        colors={season.colorPalette}
        onColorPress={handleColorPress}
        seasonData={season}
      />

      {selectedColor && (
        <ColorInfoOverlay
          color={selectedColor}
          onClose={() => setSelectedColor(null)}
          seasonData={season}
        />
      )}

      <ShareDrawer 
        isOpen={isShareDrawerOpen} 
        setIsOpen={setIsShareDrawerOpen} 
        seasonData={season}
      />
    </ResultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  tipContainer: {
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
  },
  colorGrid: {
    justifyContent: 'space-between',
    marginTop: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B6B6B',
    marginBottom: 24,
  },
  shareContainer: {
    alignItems: 'flex-end',
    padding: 16,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A3A3A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  }
});