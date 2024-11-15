import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  runOnJS,
  FadeInDown 
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ShareOption, SeasonData } from '@/data/interfaces/interfaces-definition';
import { ANIMATION_DELAYS, SPRING_CONFIG } from './animation-config';

const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

interface ShareDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  seasonData: SeasonData;
}

export const ShareDrawer: React.FC<ShareDrawerProps> = React.memo(({ 
  isOpen, 
  setIsOpen,
  seasonData
}) => {
  const translateY = useSharedValue(300);

  useEffect(() => {
    translateY.value = withSpring(isOpen ? 0 : 300, SPRING_CONFIG);
  }, [isOpen]);

  const handleShare = React.useCallback(async () => {
    try {
      await Share.share({
        message: `Check out my ${seasonData.name} color analysis results!`,
      });
      runOnJS(setIsOpen)(false);
    } catch (error) {
      console.error(error);
    }
  }, [setIsOpen, seasonData.name]);

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <AnimatedThemedView 
      style={[styles.container, drawerStyle]}
      entering={FadeInDown.delay(ANIMATION_DELAYS.DRAWER).springify()}
    >
      <View style={styles.handle} />
      <ThemedText 
        type="title" 
        style={[styles.title, { color: seasonData.textColor }]}
      >
        Share Results
      </ThemedText>
      <TouchableOpacity 
        style={[styles.shareButton, { backgroundColor: seasonData.accentColor }]}
        onPress={handleShare}
      >
        <Ionicons name="share-social" size={24} color="#FFFFFF" />
        <ThemedText style={styles.shareButtonText}>
          Share Your Results
        </ThemedText>
      </TouchableOpacity>
    </AnimatedThemedView>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3A3A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

ShareDrawer.displayName = 'ShareDrawer';
