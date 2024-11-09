import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

interface Color {
  name: string;
  hex: string;
}

interface ColorSwatchProps {
  name: string;
  hex: string;
  index: number;
  onPress: (color: Color) => void;
  accentColor: string;
  size?: number;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = React.memo(({ 
  name, 
  hex, 
  index, 
  onPress, 
  accentColor, 
  size = 50 
}) => {
  const words = name.split(' ');
  return (
    <AnimatedView 
      entering={FadeInDown.delay(100 * index).springify()} 
      style={styles.colorItem}
    >
      <TouchableOpacity onPress={() => onPress({ name, hex })}>
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
          <Text key={i} style={[styles.colorName, { color: accentColor }]}>{word}</Text>
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
  },
  colorName: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 12,
  },
});
