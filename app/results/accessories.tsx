import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ProgressCircles } from '@/components/results/progress-circles';
import { ShareDrawer } from '@/components/results/share-drawer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SEASONS } from '@/data/seasons/seasons-index';
import { Accessory, SeasonData, SeasonFamily, ColorInfo } from '@/data/interfaces/interfaces-definition';
import { ColorInfoOverlay } from '@/components/results/color-info-overlay';

interface AccessoriesProps {
  seasonId: keyof typeof SEASONS;
}

interface RenderAccessoryProps {
  item: Accessory;
  index: number;
}

const AnimatedThemedText = Animated.createAnimatedComponent(ThemedText);
const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

const renderAccessory = ({ item, index }: RenderAccessoryProps) => (
  <AnimatedThemedView 
    entering={FadeInDown.delay(200 + index * 100).springify()} 
    style={styles.accessoryItem}
  >
    {/* ... accessory item content ... */}
  </AnimatedThemedView>
);

export default function Accessories({ seasonId }: AccessoriesProps) {
  const [currentStep] = useState(5);
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorInfo | null>(null);

  const seasonFamily = SEASONS[seasonId] as SeasonFamily;
  const season = Object.values(seasonFamily)[0] as SeasonData;
  const accessories = season?.makeup?.accessories || [];

  const handleColorPress = (color: ColorInfo) => {
    setSelectedColor(color);
  };

  if (!season) {
    return (
      <SafeAreaView style={styles.container}>
        <ThemedText style={styles.errorText}>Season not found</ThemedText>
      </SafeAreaView>
    );
  }

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
            Accessories
          </AnimatedThemedText>

          <AnimatedThemedText
            entering={FadeInDown.delay(100).springify()}
            type="subtitle"
            style={{ color: season.accentColor }}
          >
            Enhance your {season.name} palette with these vibrant accessories
          </AnimatedThemedText>

          <FlatList
            data={accessories}
            renderItem={renderAccessory}
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
          />
        </ThemedView>
      </ScrollView>

      {selectedColor && (
        <ColorInfoOverlay
          color={selectedColor}
          onClose={() => setSelectedColor(null)}
          seasonData={season}
        />
      )}

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
  accessoryItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  accessoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  accessoryInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  accessoryName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  accessoryDescription: {
    fontSize: 14,
    marginBottom: 8,
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