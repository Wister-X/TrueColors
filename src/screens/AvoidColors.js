import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

const Color = React.memo(({ name, hex, index, onPress }) => {
  const words = name.split(' ');
  return (
    <AnimatedView entering={FadeInDown.delay(100 * index).springify()} style={styles.colorItem}>
      <TouchableOpacity onPress={() => onPress({ name, hex })}>
        <View style={[styles.colorSwatch, { backgroundColor: hex }]} />
      </TouchableOpacity>
      <View style={styles.colorNameContainer}>
        {words.map((word, i) => (
          <Text key={i} style={styles.colorName}>{word}</Text>
        ))}
      </View>
    </AnimatedView>
  );
});

const ColorSection = React.memo(({ title, description, colors, onColorPress }) => (
  <View style={styles.section}>
    <AnimatedText entering={FadeInDown.delay(200).springify()} style={styles.sectionTitle}>{title}</AnimatedText>
    <AnimatedText entering={FadeInDown.delay(300).springify()} style={styles.sectionDescription}>{description}</AnimatedText>
    <FlatList
      data={colors}
      renderItem={({ item, index }) => (
        <Color name={item.name} hex={item.hex} index={index} onPress={onColorPress} />
      )}
      keyExtractor={(item) => item.name}
      numColumns={5}
      columnWrapperStyle={styles.colorGrid}
    />
  </View>
));

const ProgressCircles = ({ totalSteps, currentStep }) => (
  <View style={styles.progressCircles}>
    {[...Array(totalSteps)].map((_, index) => (
      <View key={index} style={[styles.progressCircle, index < currentStep ? styles.progressCircleActive : {}]} />
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

const ColorInfoOverlay = ({ color, onClose }) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    translateY.value = withSpring(0);
    opacity.value = withSpring(1);
  }, [translateY, opacity]);

  const overlayStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const handleClose = () => {
    translateY.value = withSpring(100);
    opacity.value = withSpring(0);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatedView style={[styles.colorInfoOverlay, overlayStyle]}>
      <View style={[styles.colorInfoSwatch, { backgroundColor: color.hex }]} />
      <Text style={styles.colorInfoName}>{color.name}</Text>
      <Text style={styles.colorInfoHex}>{color.hex}</Text>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="#3A3A3A" />
      </TouchableOpacity>
    </AnimatedView>
  );
};

export default function ColorsToAvoidView() {
  const [currentStep] = useState(4);
  const totalSteps = 6;
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const colorsToAvoid = [
    { name: "Navy Blue", hex: "#000080" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Dark Purple", hex: "#301934" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Charcoal Gray", hex: "#36454F" },
    { name: "Deep Teal", hex: "#008080" },
    { name: "Maroon", hex: "#800000" },
    { name: "Olive Green", hex: "#808000" },
    { name: "Eggplant", hex: "#614051" },
    { name: "Dark Brown", hex: "#5C4033" },
  ];

  const neutralsToAvoid = [
    { name: "Black", hex: "#000000" },
    { name: "Dark Gray", hex: "#A9A9A9" },
    { name: "Cool Taupe", hex: "#8B8589" },
    { name: "Slate", hex: "#708090" },
  ];

  const handleColorPress = useCallback((color) => {
    setSelectedColor(color);
  }, []);

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
          <AnimatedText entering={FadeInDown.springify()} style={styles.title}>Avoid these colors</AnimatedText>
          <AnimatedText entering={FadeInDown.delay(100).springify()} style={styles.subtitle}>
            These shades may overpower your Light Spring palette
          </AnimatedText>

          <ColorSection
            title="Colors"
            description="Dark, muted, and cool tones that may clash with your delicate coloring:"
            colors={colorsToAvoid}
            onColorPress={handleColorPress}
          />
          <ColorSection
            title="Neutrals"
            description="Dark and cool neutrals that may be too heavy for your palette:"
            colors={neutralsToAvoid}
            onColorPress={handleColorPress}
          />

          <AnimatedView entering={FadeInDown.delay(1300).springify()} style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Pro Tip</Text>
            <Text style={styles.tipText}>
              While not ideal for your Light Spring palette, use these colors sparingly as accents in accessories or patterns. Keep them away from your face to maintain the light, fresh, and clear quality of your palette while adding depth to your outfits.
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
      
      {selectedColor && (
        <ColorInfoOverlay 
          color={selectedColor} 
          onClose={() => setSelectedColor(null)}
        />
      )}
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
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 22, fontWeight: '600', color: '#3A3A3A', marginBottom: 8 },
  sectionDescription: { fontSize: 14, color: '#6B6B6B', marginBottom: 16 },
  colorGrid: { justifyContent: 'space-between' },
  colorItem: { alignItems: 'center', marginBottom: 12, width: '20%' },
  colorSwatch: {
    width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: 'white',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  colorNameContainer: { alignItems: 'center', marginTop: 4 },
  colorName: { fontSize: 10, textAlign: 'center', color: '#6B6B6B', lineHeight: 12 },
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
  colorInfoOverlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20,
    alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  colorInfoSwatch: {
    width: 100, height: 100, borderRadius: 50, marginBottom: 10,
    borderWidth: 2, borderColor: 'white',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  colorInfoName: { fontSize: 24, fontWeight: 'bold', marginBottom: 5, color: '#3A3A3A' },
  
  colorInfoHex: { fontSize: 18, color: '#6B6B6B' },
  closeButton: { position: 'absolute', top: 10, right: 10, padding: 10 },
});