import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, interpolateColor } from 'react-native-reanimated';

const ColorInfoOverlay = ({ color, onClose }) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    translateY.value = withSpring(0);
    opacity.value = withSpring(1);
  }, [translateY, opacity]);

  const overlayStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
      backgroundColor: interpolateColor(
        opacity.value,
        [0, 1],
        ['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)']
      ),
    };
  });

  const handleClose = () => {
    translateY.value = withSpring(100);
    opacity.value = withSpring(0);
    setTimeout(onClose, 300);
  };

  return (
    <Animated.View style={[styles.colorInfoOverlay, overlayStyle]}>
      <View style={[styles.colorInfoSwatch, { backgroundColor: color.hex }]} />
      <Text style={styles.colorInfoName}>{color.name}</Text>
      <Text style={styles.colorInfoHex}>{color.hex}</Text>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="#3A3A3A" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  colorInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  colorInfoSwatch: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorInfoName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3A3A3A',
  },
  colorInfoHex: {
    fontSize: 18,
    color: '#6B6B6B',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default ColorInfoOverlay;