import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, interpolateColor, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

const colorSeasons = {
  lightSummer: {
    title: "You're a light summer",
    description: "Your color season exudes a soft, delicate, and refreshing aura",
    bgColor: "#FFF5E1",
    textColor: "#3A3A3A",
    accentColor: "#6B6B6B",
    colorPalette: [
      { name: "Light Pink", hex: "#FFB6C1" },
      { name: "Soft Blue", hex: "#ADD8E6" },
      { name: "Pale Lavender", hex: "#E6E6FA" },
      { name: "Mint Green", hex: "#98FB98" },
      { name: "Peach", hex: "#FFDAB9" },
    ],
    seasonDescription: "Light Summers have a low contrast between their light hair, eyes, and fair skin with cool undertones. Your best colors are soft, light, and cool, creating a fresh and airy appearance",
    styleInsight: "Embrace your light summer palette by incorporating these soft, cool, and light tones into your wardrobe and makeup choices. Combine light pinks, soft blues, and pale lavenders for a fresh, delicate look that enhances your natural softness and creates a breezy, summery elegance."
  },
  deepAutumn: {
    title: "You're a deep autumn",
    description: "Your color season radiates warmth, richness, and depth",
    bgColor: "#F2D2BD",
    textColor: "#8B4513",
    accentColor: "#A0522D",
    colorPalette: [
      { name: "Burnt Orange", hex: "#CC5500" },
      { name: "Deep Burgundy", hex: "#800020" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Golden Brown", hex: "#996515" },
      { name: "Rust Red", hex: "#B7410E" },
    ],
    seasonDescription: "Deep Autumns have high contrast between their dark hair, eyes, and warm-toned skin. Your best colors are rich, warm, and intense, creating a striking and sophisticated appearance",
    styleInsight: "Embrace your deep autumn palette by incorporating these rich, warm tones into your wardrobe and makeup choices. Combine deep burgundies, forest greens, and golden browns for a luxurious look that enhances your natural warmth and creates a bold, autumnal elegance."
  },
};

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

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

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
    <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          <View style={styles.bottomSheetHandle} />
          {shareOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.shareOption}>
              <Ionicons name={option.icon} size={24} color={option.color} />
              <Text style={styles.shareOptionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const ColorInfoOverlay = ({ color, onClose, seasonData }) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    translateY.value = withSpring(0);
    opacity.value = withSpring(1);
  }, []);

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
      <Text style={[styles.colorInfoName, { color: seasonData.textColor }]}>{color.name}</Text>
      <Text style={[styles.colorInfoHex, { color: seasonData.accentColor }]}>{color.hex}</Text>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Ionicons name="close" size={24} color={seasonData.textColor} />
      </TouchableOpacity>
    </Animated.View>
  );
};

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

export default function ColorSeasonAnalysisView({ colorSeason = 'lightSummer' }) {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 6;
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const seasonData = useMemo(() => colorSeasons[colorSeason], [colorSeason]);

  const handleColorPress = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  const renderColorSwatch = useCallback(({ item, index }) => (
    <ColorSwatch 
      color={item} 
      index={index} 
      onPress={handleColorPress}
      accentColor={seasonData.accentColor}
    />
  ), [handleColorPress, seasonData.accentColor]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: seasonData.bgColor }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ProgressCircles totalSteps={totalSteps} currentStep={currentStep} />
          <TouchableOpacity>
            <Ionicons name="close" size={24} color="#3A3A3A" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <AnimatedText entering={FadeInDown.springify()} style={[styles.title, { color: seasonData.textColor }]}>
            {seasonData.title}
          </AnimatedText>
          <AnimatedText entering={FadeInDown.delay(100).springify()} style={[styles.subtitle, { color: seasonData.accentColor }]}>
            {seasonData.description}
          </AnimatedText>

          <AnimatedText entering={FadeInDown.delay(200).springify()} style={[styles.sectionTitle, { color: seasonData.textColor }]}>
            Your Color Season
          </AnimatedText>
          <AnimatedText entering={FadeInDown.delay(300).springify()} style={[styles.sectionDescription, { color: seasonData.accentColor }]}>
            {seasonData.seasonDescription}
          </AnimatedText>

          <AnimatedText entering={FadeInDown.delay(400).springify()} style={[styles.sectionTitle, { color: seasonData.textColor }]}>
            Your Color Palette
          </AnimatedText>
          <AnimatedText entering={FadeInDown.delay(500).springify()} style={[styles.sectionDescription, { color: seasonData.accentColor }]}>
            {colorSeason === 'lightSummer' ? 'Soft, cool, and light tones to enhance your natural coloring:' : 'Rich, warm tones to complement your deep coloring:'}
          </AnimatedText>

          <FlatList
            data={seasonData.colorPalette}
            renderItem={renderColorSwatch}
            keyExtractor={(item) => item.name}
            numColumns={5}
            columnWrapperStyle={styles.colorGrid}
          />

          <AnimatedView 
            entering={FadeInDown.delay(900).springify()} 
            style={[styles.insightContainer, { backgroundColor: seasonData.bgColor, borderColor: seasonData.accentColor }]}
          >
            <Text style={[styles.insightTitle, { color: seasonData.textColor }]}>Style Insight</Text>
            <Text style={[styles.insightText, { color: seasonData.accentColor }]}>
              {seasonData.styleInsight}
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
          seasonData={seasonData}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  colorGrid: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
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
    alignItems:  'center',
    marginTop: 4,
  },
  colorName: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 12,
  },
  insightContainer: {
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  insightText: {
    fontSize: 14,
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
  },
  colorInfoHex: {
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});