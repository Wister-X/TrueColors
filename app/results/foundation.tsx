import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ColorInfoOverlay } from '@/components/results/color-info-overlay';
import { ShareDrawer } from '@/components/results/share-drawer';
import { ThemedText } from '@/components/ThemedText';
import { SEASONS } from '@/data/seasons/seasons-index';
import { ColorInfo, SeasonData, SeasonFamily } from '@/data/interfaces/interfaces-definition';
import { ResultLayout } from '@/components/ResultLayout';
import { ColorSection } from '@/components/ColorSection';

const AnimatedThemedText = Animated.createAnimatedComponent(ThemedText);

interface FoundationProps {
  seasonId: keyof typeof SEASONS;
}

export default function Foundation({ seasonId }: FoundationProps) {
  const [currentStep] = useState(5);
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
        Foundation Matches
      </AnimatedThemedText>

      <AnimatedThemedText
        entering={FadeInDown.delay(100).springify()}
        type="subtitle"
        style={{ color: season.accentColor }}
      >
        Your perfect foundation shades
      </AnimatedThemedText>

      <ColorSection
        title="Foundation Shades"
        description="Foundation colors that match your undertone"
        colors={season.makeup.foundation}
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
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  }
});