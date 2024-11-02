import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, runOnJS, interpolateColor } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

const Color = React.memo(({ name, hex, index, onPress }) => {
  const words = name.split(' ');
  return (
    <AnimatedView 
      entering={FadeInDown.delay(100 * index).springify()} 
      style={styles.colorItem}
    >
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

const ColorSection = React.memo(({ title, description, colors, onColorPress }) => {
  const renderColorSwatch = useCallback(({ item, index }) => (
    <Color 
      name={item.name} 
      hex={item.hex} 
      index={index} 
      onPress={onColorPress}
    />
  ), [onColorPress]);

  return (
    <View style={styles.section}>
      <AnimatedText entering={FadeInDown.delay(200).springify()} style={styles.sectionTitle}>{title}</AnimatedText>
      <AnimatedText entering={FadeInDown.delay(300).springify()} style={styles.sectionDescription}>{description}</AnimatedText>
      <FlatList
        data={colors}
        renderItem={renderColorSwatch}
        keyExtractor={(item) => item.name}
        numColumns={5}
        columnWrapperStyle={styles.colorGrid}
      />
    </View>
  );
});

const ProgressCircles = React.memo(({ totalSteps, currentStep }) => (
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
));

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

export default function ColorsToWearView() {
  const [currentStep] = useState(3);
  const totalSteps = 6;
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const colorsToWear = useMemo(() => [
    { name: "Golden Sand", hex: "#F3E5AB" },
    { name: "Soft Peach", hex: "#FFDAB9" },
    { name: "Warm Amber", hex: "#FFCBA4" },
    { name: "Misty Blue", hex: "#F0FFFF" },
    { name: "Sage Green", hex: "#90EE90" },
    { name: "Creamy Ivory", hex: "#FFF8DC" },
    { name: "Rich Henna", hex: "#D2691E" },
    { name: "Deep Merlot", hex: "#800000" },
    { name: "Forest Pine", hex: "#228B22" },
    { name: "Olive Night", hex: "#556B2F" },
  ], []);

  const neutralColors = useMemo(() => [
    { name: "Warm Cream", hex: "#F3E5AB" },
    { name: "Soft Blush", hex: "#FFDAB9" },
    { name: "Cool Slate", hex: "#708090" },
    { name: "Rich Caramel", hex: "#D2691E" },
  ], []);

  const handleColorPress = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  const renderColorSection = useCallback((title, description, colors) => (
    <ColorSection
      title={title}
      description={description}
      colors={colors}
      onColorPress={handleColorPress}
    />
  ), [handleColorPress]);

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
          <AnimatedText entering={FadeInDown.springify()} style={styles.title}>Wear these colors</AnimatedText>
          <AnimatedText entering={FadeInDown.delay(100).springify()} style={styles.subtitle}>
            Enhance your Warm Autumn palette with these rich, earthy tones
          </AnimatedText>

          {renderColorSection("Colors", "Rich, earthy tones to complement your warm undertones:", colorsToWear)}
          {renderColorSection("Neutrals", "Versatile shades to balance your outfits:", neutralColors)}

          <AnimatedView entering={FadeInDown.delay(1300).springify()} style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Pro Tip</Text>
            <Text style={styles.tipText}>
              Combine these colors with your neutrals for a balanced and harmonious look that complements your warm autumn palette.
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
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  progressCircles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  progressCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginRight: 8,
  },
  progressCircleActive: {
    backgroundColor: '#3A3A3A',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B6B6B',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 16,
  },
  colorGrid: {
    justifyContent: 'space-between',
  },
  colorItem: {
    alignItems: 'center',
    marginBottom: 12,
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
  },
  colorNameContainer: {
    alignItems: 'center',
    marginTop: 4,
  },
  colorName: {
    fontSize: 10,
    textAlign: 'center',
    color: '#6B6B6B',
    lineHeight: 12,
  },
  tipContainer: {
    backgroundColor: '#FFF5E1',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#6B6B6B',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#6B6B6B',
  },
  shareContainer: {
    alignItems: 'flex-end',
    padding: 16,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A3A3A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: DRAWER_HEIGHT,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomSheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#00000020',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 2,
  },
  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#00000010',
  },
  shareOptionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#3A3A3A',
  },
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