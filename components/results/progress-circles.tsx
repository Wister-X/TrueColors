import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { SeasonData } from '@/data/interfaces/interfaces-definition';
import { ANIMATION_DELAYS, SPRING_CONFIG } from './animation-config';

const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

export interface ProgressCirclesProps {
  totalSteps: number;
  currentStep: number;
  seasonData: SeasonData;
}

export const ProgressCircles: React.FC<ProgressCirclesProps> = React.memo(({ 
  totalSteps, 
  currentStep,
  seasonData 
}) => {
  const circles = React.useMemo(() => 
    Array.from({ length: totalSteps }).map((_, index) => ({
      id: index,
      isFilled: index < currentStep
    })), 
    [totalSteps, currentStep]
  );

  return (
    <View style={styles.container}>
      {circles.map(({ id, isFilled }) => (
        <AnimatedThemedView
          key={id}
          entering={FadeInDown.delay(ANIMATION_DELAYS.INITIAL + (id * 50)).springify()}
          style={[
            styles.circle,
            isFilled ? 
              { backgroundColor: seasonData.accentColor } : 
              { backgroundColor: '#E5E5E5' }
          ]}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  }
});

ProgressCircles.displayName = 'ProgressCircles';
