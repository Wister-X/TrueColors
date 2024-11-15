import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ComponentProps } from 'react';

import { ProgressCircles } from '@/components/results/progress-circles';
import { ShareDrawer } from '@/components/results/share-drawer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SEASONS } from '@/data/seasons/seasons-index';
import { FaceShape, Undertone } from '@/data/types/types-definition';
import { SeasonData, SeasonFamily } from '@/data/interfaces/interfaces-definition';

type IconName = ComponentProps<typeof Ionicons>['name'];

const faceShapeConfig: Record<FaceShape, IconName> = {
  'Oval': 'ellipse-outline' as IconName,
  'Round': 'at-circle-outline' as IconName,
  'Square': 'square-outline' as IconName,
  'Heart': 'heart-outline' as IconName,
  'Diamond': 'diamond' as IconName,
  'Rectangle': 'tablet-landscape-outline' as IconName,
  'Triangle': 'triangle-outline' as IconName
} as const;

interface OverviewProfileProps {
  seasonId: keyof typeof SEASONS;
  imageUri?: string;
}

interface Characteristics {
  faceShape: FaceShape;
  undertone: Undertone;
  contrast: string;
}

interface ResultItem {
  icon: IconName;
  label: string;
  value: string;
}

const AnimatedThemedText = Animated.createAnimatedComponent(ThemedText);
const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

export default function OverviewProfile({ seasonId, imageUri }: OverviewProfileProps) {
  const [currentStep] = useState(1);
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);

  const seasonFamily = SEASONS[seasonId] as SeasonFamily;
  const season = Object.values(seasonFamily)[0] as SeasonData;

  if (!season) {
    return (
      <SafeAreaView style={styles.container}>
        <ThemedText style={styles.errorText}>Season not found</ThemedText>
      </SafeAreaView>
    );
  }

  const characteristics: Characteristics = {
    faceShape: season.characteristics?.faceShape || 'Oval',
    undertone: season.characteristics?.undertone || 'Neutral',
    contrast: season.characteristics?.contrast || 'Medium'
  };

  const results: ResultItem[] = [
    { 
      icon: 'color-palette-outline' as IconName, 
      label: 'Season', 
      value: season.name 
    },
    { 
      icon: faceShapeConfig[characteristics.faceShape] as IconName, 
      label: 'Face Shape', 
      value: characteristics.faceShape
    },
    { 
      icon: 'water-outline' as IconName, 
      label: 'Undertone', 
      value: characteristics.undertone
    },
    { 
      icon: 'contrast-outline' as IconName, 
      label: 'Contrast', 
      value: characteristics.contrast
    }
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: season.bgColor }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ProgressCircles totalSteps={6} currentStep={currentStep} />
          <TouchableOpacity>
            <Ionicons name="close" size={24} color={season.textColor} />
          </TouchableOpacity>
        </View>

        <ThemedView style={styles.card}>
          <AnimatedThemedText
            entering={FadeInDown.springify()}
            type="title"
            style={{ color: season.textColor }}
          >
            Your Color Profile
          </AnimatedThemedText>

          <AnimatedThemedText
            entering={FadeInDown.delay(100).springify()}
            type="subtitle"
            style={{ color: season.accentColor }}
          >
            {season.description}
          </AnimatedThemedText>

          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={[styles.userImage, { borderColor: season.accentColor }]}
            />
          )}

          <View style={styles.resultsGrid}>
            {results.map((result, index) => (
              <AnimatedThemedView 
                key={result.label}
                entering={FadeInDown.delay(300 + index * 100).springify()} 
                style={[styles.resultItem, { backgroundColor: season.bgColor }]}
              >
                <Ionicons name={result.icon} size={48} color={season.accentColor} />
                <ThemedText style={[styles.resultLabel, { color: season.textColor }]}>
                  {result.label}
                </ThemedText>
                <ThemedText style={[styles.resultValue, { color: season.accentColor }]}>
                  {result.value}
                </ThemedText>
              </AnimatedThemedView>
            ))}
          </View>

          <AnimatedThemedView
            entering={FadeInDown.delay(700).springify()}
            style={[styles.tipContainer, {
              backgroundColor: season.bgColor,
              borderColor: season.accentColor
            }]}
          >
            <ThemedText type="defaultSemiBold" style={{ color: season.textColor }}>
              Your Characteristics
            </ThemedText>
            <ThemedText style={{ color: season.accentColor }}>
              {season.seasonCharacteristics}
            </ThemedText>
          </AnimatedThemedView>
        </ThemedView>
      </ScrollView>

      <ShareDrawer isOpen={isShareDrawerOpen} setIsOpen={setIsShareDrawerOpen} />
    </SafeAreaView>
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
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 24,
    borderWidth: 3,
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  resultItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  resultLabel: {
    fontSize: 14,
    marginTop: 8,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
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