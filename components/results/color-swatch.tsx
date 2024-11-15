import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ColorInfo } from '@/data/interfaces/interfaces-definition';
import { ANIMATION_DELAYS, SPRING_CONFIG } from './animation-config';

const AnimatedView = Animated.createAnimatedComponent(View);

export interface ColorSwatchProps {
  name: string;
  hex: string;
  description?: string;
  index: number;
  onPress: (color: ColorInfo) => void;
  accentColor: string;
  size?: number;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = React.memo(({ 
  name, 
  hex,
  description = '', 
  index, 
  onPress, 
  accentColor, 
  size = 50 
}) => {
  const words = React.useMemo(() => name.split(' '), [name]);
  
  const handlePress = React.useCallback(() => {
    onPress({ name, hex, description });
  }, [name, hex, description, onPress]);

  return (
    <AnimatedView 
      entering={FadeInDown.delay(ANIMATION_DELAYS.CONTENT + (index * 50)).springify()} 
      style={styles.colorItem}
    >
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View 
          style={[
            styles.colorSwatch, 
            { 
              backgroundColor: hex,
              width: size,
              height: size,
              borderRadius: size / 2
            }
          ]} 
        />
      </TouchableOpacity>
      <View style={styles.colorNameContainer}>
        {words.map((word, i) => (
          <Text 
            key={`${word}-${i}`}
            style={[styles.colorName, { color: accentColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {word}
          </Text>
        ))}
      </View>
    </AnimatedView>
  );
});

const styles = StyleSheet.create({
  colorItem: {
    alignItems: 'center',
    marginBottom: 12,
    width: '20%',
  },
  colorSwatch: {
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorNameContainer: {
    alignItems: 'center',
    marginTop: 4,
    width: '100%',
  },
  colorName: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 12,
    width: '100%',
  },
});

ColorSwatch.displayName = 'ColorSwatch';
