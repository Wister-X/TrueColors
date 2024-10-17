import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, runOnJS, interpolateColor } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenWithResults from './screens/HomeScreenWithResults';
import ResultsScreen from './screens/ResultsScreen';
import CameraScreen from './screens/CameraScreen';
import SettingsScreen from './screens/SettingsScreen';
import SelfieTips from './screens/SelfieTips';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

// ... (other component definitions remain the same)

const ShareDrawer = React.memo(({ isOpen, setIsOpen }) => {
  const translateY = useSharedValue(DRAWER_HEIGHT);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    translateY.value = withSpring(isOpen ? 0 : DRAWER_HEIGHT, { damping: 50 });
  }, [isOpen, translateY]);

  const shareOptions = useMemo(() => [
    { icon: 'flower-outline', text: 'Share it with your girlies', color: '#FF69B4' },
    { icon: 'mail-outline', text: 'Contact Support', color: '#4169E1' },
    { icon: 'diamond-outline', text: 'Rate Us', color: '#9370DB' },
    { icon: 'logo-instagram', text: 'Follow us on IG', color: '#C13584' },
    { icon: 'lock-closed-outline', text: 'Privacy Policy', color: '#FFD700' },
  ], []);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = Math.max(ctx.startY + event.translationY, 0);
    },
    onEnd: (event) => {
      if (event.velocityY > 500 || event.translationY > DRAWER_HEIGHT / 2) {
        translateY.value = withSpring(DRAWER_HEIGHT, { damping: 50 });
        runOnJS(setIsOpen)(false);
      } else {
        translateY.value = withSpring(0, { damping: 50 });
      }
    },
  });

  return (
    <Modal visible={isOpen} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <AnimatedView style={[styles.bottomSheet, rBottomSheetStyle]}>
          <View style={styles.bottomSheetHandle} />
          {shareOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.shareOption}>
              <Ionicons name={option.icon} size={24} color={option.color} />
              <Text style={styles.shareOptionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </AnimatedView>
      </PanGestureHandler>
    </Modal>
  );
});

// ... (rest of the component definitions and styles remain the same)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenWithResults} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="SelfieTips" component={SelfieTips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // ... (styles remain the same)
});