import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Image } from 'expo-image';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

const ProgressCircles = ({ totalSteps, currentStep }) => (
  <View style={styles.progressCircles}>
    {[...Array(totalSteps)].map((_, index) => (
      <View
        key={index}
        style={[
          styles.progressCircle,
          index < currentStep ? styles.progressCircleActive : {}
        ]}
      />
    ))}
  </View>
);

const ShareDrawer = ({ isOpen, setIsOpen }) => {
  const translateY = useSharedValue(DRAWER_HEIGHT);

  const rBottomSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  React.useEffect(() => {
    translateY.value = withSpring(isOpen ? 0 : DRAWER_HEIGHT, { damping: 50 });
  }, [isOpen, translateY]);

  const shareOptions = [
    { icon: 'flower-outline', text: 'Share it with your friends', color: '#FF69B4' },
    { icon: 'mail-outline', text: 'Contact Support', color: '#4169E1' },
    { icon: 'diamond-outline', text: 'Rate Us', color: '#9370DB' },
    { icon: 'logo-instagram', text: 'Follow us on IG', color: '#C13584' },
    { icon: 'lock-closed-outline', text: 'Privacy Policy', color: '#FFD700' },
  ];

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => { ctx.startY = translateY.value; },
    onActive: (event, ctx) => { translateY.value = Math.max(ctx.startY + event.translationY, 0); },
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
      <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
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
      </TouchableOpacity>
    </Modal>
  );
};

export default function ClearSpringAccessories() {
  const [currentStep] = useState(5);
  const totalSteps = 6;
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);

  const accessories = [
    { name: "Gold Necklace", description: "Delicate gold piece to complement your warm undertones", image: "/placeholder.svg?height=80&width=80" },
    { name: "Coral Scarf", description: "A vibrant coral scarf to enhance your natural glow", image: "/placeholder.svg?height=80&width=80" },
    { name: "Turquoise Earrings", description: "Eye-catching turquoise earrings for a pop of color", image: "/placeholder.svg?height=80&width=80" },
    { name: "Yellow Handbag", description: "A sunny yellow bag to match your energetic palette", image: "/placeholder.svg?height=80&width=80" },
    { name: "Green Sunglasses", description: "Fresh green shades for a lively look", image: "/placeholder.svg?height=80&width=80" },
  ];

  const renderAccessory = ({ item, index }) => (
    <AnimatedView entering={FadeInDown.delay(200 + index * 100).springify()} style={styles.accessoryItem}>
      <Image source={item.image} style={styles.accessoryImage} contentFit="cover" transition={1000} />
      <View style={styles.accessoryTextContainer}>
        <Text style={styles.accessoryName}>{item.name}</Text>
        <Text style={styles.accessoryDescription}>{item.description}</Text>
      </View>
    </AnimatedView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ProgressCircles totalSteps={totalSteps} currentStep={currentStep} />
          <TouchableOpacity>
            <Ionicons name="close" size={24} color="#3A3A3A" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <AnimatedText entering={FadeInDown.springify()} style={styles.title}>Accessories</AnimatedText>
          <AnimatedText entering={FadeInDown.delay(100).springify()} style={styles.subtitle}>
            Enhance your Clear Spring palette with these vibrant accessories
          </AnimatedText>

          <FlatList
            data={accessories}
            renderItem={renderAccessory}
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
          />

          <AnimatedView entering={FadeInDown.delay(700).springify()} style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Pro Tip</Text>
            <Text style={styles.tipText}>
              Mix and match these accessories to create eye-catching combinations that highlight your Clear Spring palette. Don't be afraid to layer gold jewelry or combine bright colors for a fresh, energetic look that truly showcases your vibrant personality.
            </Text>
          </AnimatedView>
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity 
            style={styles.shareButton} 
            onPress={() => setIsShareDrawerOpen(true)}
          >
            <Ionicons name="share-outline" size={20} color="white" />
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ShareDrawer isOpen={isShareDrawerOpen} setIsOpen={setIsShareDrawerOpen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5E1' },
  scrollView: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  progressCircles: { flexDirection: 'row', justifyContent: 'flex-start' },
  progressCircle: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', marginRight: 8 },
  progressCircleActive: { backgroundColor: '#3A3A3A' },
  card: {
    backgroundColor: 'white', borderRadius: 24, padding: 24, margin: 16,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
  },
  title: { fontSize: 34, fontWeight: 'bold', color: '#3A3A3A', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#6B6B6B', marginBottom: 24 },
  accessoryItem: { flexDirection: 'row', marginBottom: 24 },
  accessoryImage: { width: 80, height: 80, borderRadius: 12, marginRight: 16 },
  accessoryTextContainer: { flex: 1, justifyContent: 'center' },
  accessoryName: { fontSize: 18, fontWeight: '600', color: '#3A3A3A', marginBottom: 4 },
  accessoryDescription: { fontSize: 14, color: '#6B6B6B' },
  tipContainer: {
    backgroundColor: '#FFF5E1', borderRadius: 16, padding: 16,
    marginTop: 24, borderWidth: 1, borderColor: '#6B6B6B',
  },
  tipTitle: { fontSize: 18, fontWeight: '600', color: '#3A3A3A', marginBottom: 8 },
  tipText: { fontSize: 14, color: '#6B6B6B' },
  shareContainer: { alignItems: 'flex-end', padding: 16 },
  shareButton: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#3A3A3A',
    paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20,
  },
  shareButtonText: { color: 'white', marginLeft: 8, fontSize: 16 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'flex-end' },
  bottomSheet: {
    backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20,
    padding: 20, height: DRAWER_HEIGHT,
  },
  bottomSheetHandle: {
    width: 40, height: 4, backgroundColor: '#00000020',
    alignSelf: 'center', marginBottom: 20, borderRadius: 2,
  },
  shareOption: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: '#00000010',
  },
  shareOptionText: { marginLeft: 15, fontSize: 16, color: '#3A3A3A' },
});