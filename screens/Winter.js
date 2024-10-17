import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Modal, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
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

const ShareDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const translateY = useSharedValue(DRAWER_HEIGHT);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    if (isOpen) {
      translateY.value = withSpring(0, { damping: 50 });
    }
  }, [isOpen]);

  const openDrawer = () => {
    setIsOpen(true);
  };

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
    <>
      <TouchableOpacity 
        style={styles.shareButton} 
        onPress={openDrawer}
      >
        <Ionicons name="share-outline" size={20} color="white" />
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
      <Modal visible={isOpen} transparent animationType="none">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
              <View style={styles.bottomSheetHandle} />
              {shareOptions.map((option, index) => (
                <TouchableOpacity key={index} style={styles.shareOption}>
                  <Ionicons name={option.icon} size={24} color={option.color} />
                  <Text style={styles.shareOptionText}>{option.text}</Text>
                </TouchableOpacity>
              ))}
            </Animated.View>
          </PanGestureHandler>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const seasonConfig = {
  winter: { icon: 'snow-outline', color: '#4682B4', bgColor: '#F0F8FF' },
};

const faceShapeConfig = {
  oval: 'ellipse-outline',
  square: 'square-outline',
  triangle: 'triangle-outline',
};

export default function DynamicSelfieResults() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // In a real application, this would come from an API or props
  const analysisResult = {
    season: 'winter',
    faceShape: 'oval',
    skinTone: 'warm',
    contrast: 'high'
  };

  const { season, faceShape, skinTone, contrast } = analysisResult;

  const seasonData = seasonConfig[season.toLowerCase()];
  const faceShapeIcon = faceShapeConfig[faceShape.toLowerCase()] || 'ellipse-outline';

  const results = [
    { icon: seasonData.icon, label: 'Season', value: season },
    { icon: faceShapeIcon, label: 'Face Shape', value: faceShape },
    { icon: 'water-outline', label: 'Skin Tone', value: skinTone },
    { icon: 'contrast-outline', label: 'Contrast', value: contrast },
  ];

  const ResultItem = ({ item, index }) => (
    <AnimatedView 
      entering={FadeInDown.delay(300 + index * 100).springify()} 
      style={[styles.resultItem, { backgroundColor: seasonData.bgColor }]}
    >
      <Ionicons name={item.icon} size={48} color={seasonData.color} />
      <Text style={styles.resultLabel}>{item.label}</Text>
      <Text style={styles.resultValue}>{item.value}</Text>
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

        <AnimatedText entering={FadeInDown.springify()} style={styles.title}>Your Color Profile</AnimatedText>
        <AnimatedText entering={FadeInDown.delay(100).springify()} style={styles.subtitle}>
          Discover your unique color characteristics
        </AnimatedText>

        <View style={styles.card}>
          <AnimatedView entering={FadeInDown.delay(200).springify()} style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/200' }}
              style={[styles.userImage, { borderColor: seasonData.color }]}
            />
          </AnimatedView>

          <View style={styles.resultsGrid}>
            {results.map((result, index) => (
              <ResultItem key={result.label} item={result} index={index} />
            ))}
          </View>
        </View>

        <View style={styles.shareContainer}>
          <ShareDrawer />
        </View>
      </ScrollView>
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
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B6B6B',
    marginBottom: 24,
    paddingHorizontal: 16,
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resultItem: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 14,
    color: '#6B6B6B',
    marginTop: 8,
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3A3A',
    textTransform: 'capitalize',
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
});