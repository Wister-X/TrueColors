import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  interpolateColor,
  FadeInDown
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorInfo, SeasonData } from '@/data/interfaces/interfaces-definition';
import { ANIMATION_DELAYS, SPRING_CONFIG } from './animation-config';

const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);
const AnimatedThemedText = Animated.createAnimatedComponent(ThemedText);

export interface ColorOverlayProps {
  color: ColorInfo;
  onClose: () => void;
  seasonData: SeasonData;
}

export const ColorInfoOverlay: React.FC<ColorOverlayProps> = React.memo(({ 
  color, 
  onClose, 
  seasonData 
}) => {
  const overlayOpacity = useSharedValue(0);
  const translateY = useSharedValue(100);

  useEffect(() => {
    overlayOpacity.value = withSpring(1, SPRING_CONFIG);
    translateY.value = withSpring(0, SPRING_CONFIG);
  }, []);

  const handleClose = React.useCallback(() => {
    overlayOpacity.value = withSpring(0, SPRING_CONFIG);
    translateY.value = withSpring(100, SPRING_CONFIG);
    setTimeout(onClose, 300);
  }, [onClose]);

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      overlayOpacity.value,
      [0, 1],
      ['transparent', 'rgba(0, 0, 0, 0.5)']
    ),
  }));

  return (
    <Animated.View style={[styles.overlay, backgroundStyle]}>
      <AnimatedThemedView 
        style={[styles.content, overlayStyle]}
        entering={FadeInDown.delay(ANIMATION_DELAYS.OVERLAY).springify()}
      >
        <View style={[styles.colorSwatch, { backgroundColor: color.hex }]} />
        <AnimatedThemedText
          type="title"
          style={[styles.colorName, { color: seasonData.textColor }]}
          entering={FadeInDown.delay(ANIMATION_DELAYS.TITLE).springify()}
        >
          {color.name}
        </AnimatedThemedText>
        <AnimatedThemedText
          style={[styles.colorHex, { color: seasonData.accentColor }]}
          entering={FadeInDown.delay(ANIMATION_DELAYS.SUBTITLE).springify()}
        >
          {color.hex}
        </AnimatedThemedText>
        <AnimatedThemedText
          style={[styles.colorDescription, { color: seasonData.textColor }]}
          entering={FadeInDown.delay(ANIMATION_DELAYS.CONTENT).springify()}
        >
          {color.description}
        </AnimatedThemedText>
        <TouchableOpacity 
          onPress={handleClose} 
          style={styles.closeButton}
        >
          <Ionicons 
            name="close" 
            size={24} 
            color={seasonData.textColor} 
          />
        </TouchableOpacity>
      </AnimatedThemedView>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colorSwatch: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  colorHex: {
    fontSize: 18,
    marginBottom: 16,
  },
  colorDescription: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
});

ColorInfoOverlay.displayName = 'ColorInfoOverlay';
