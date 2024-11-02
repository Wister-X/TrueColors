import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

const ColorSwatch = React.memo(({ color, index, onPress, accentColor }) => {
  const words = color.name.split(' ');
  return (
    <AnimatedView 
      entering={FadeInDown.delay(100 * index).springify()} 
      style={styles.colorItem}
    >
      <TouchableOpacity onPress={() => onPress(color)}>
        <View style={[styles.colorSwatch, { backgroundColor: color.hex }]} />
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
    width: '20%',
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 4,
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

export default ColorSwatch;