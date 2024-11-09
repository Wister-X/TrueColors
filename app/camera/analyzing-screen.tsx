import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring, 
  FadeIn, 
  SlideInRight,
  SlideOutLeft,
  WithSpringConfig,
  WithTimingConfig
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

// Type definitions
interface Step {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}

interface StepItemProps {
  step: Step;
  index: number;
  currentStep: number;
}

interface StylesType {
  [key: string]: ViewStyle | TextStyle;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const { width, height } = Dimensions.get('window');

const springConfig: WithSpringConfig = {
  stiffness: 100,
  damping: 10
};

const timingConfig: WithTimingConfig = {
  duration: 500
};

const steps: Step[] = [
  { icon: 'color-palette-outline', text: "Analyzing skin tone" },
  { icon: 'sparkles-outline', text: "Determining color harmony" },
  { icon: 'sunny-outline', text: "Evaluating warm colors" },
  { icon: 'moon-outline', text: "Assessing cool colors" },
  { icon: 'rainy-outline', text: "Finalizing your palette" },
];

const StepItem: React.FC<StepItemProps> = React.memo(({ step, index, currentStep }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(index <= currentStep ? 1 : 0.5, timingConfig),
      transform: [
        { translateX: withSpring(index <= currentStep ? 0 : -20, springConfig) },
      ],
    };
  }, [currentStep]);

  return (
    <Animated.View style={[styles.stepItem, animatedStyle]}>
      <View style={[styles.iconContainer, index <= currentStep ? styles.activeIcon : styles.inactiveIcon]}>
        <Ionicons name={step.icon} size={24} color={index <= currentStep ? 'white' : '#8A8A8A'} />
      </View>
      <Text style={[styles.stepText, index <= currentStep && styles.activeStepText]}>{step.text}</Text>
    </Animated.View>
  );
});

const AnalyzingPageVariation: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const progressWidth = useSharedValue<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress: number) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentStep(Math.min(Math.floor((progress / 100) * steps.length), steps.length - 1));
    progressWidth.value = withTiming(progress, { duration: 100 });
  }, [progress]);

  const progressBarStyle = useAnimatedStyle(() => ({
    width: `${progressWidth.value}%`,
  }));

  const memoizedSteps = useMemo(() => 
    steps.map((step, index) => (
      <StepItem key={index} step={step} index={index} currentStep={currentStep} />
    )),
    [currentStep]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Analyzing Your Colors</Text>
          <Text style={styles.subtitle}>Please wait while we process your image</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <AnimatedLinearGradient
            colors={['#D4A574', '#E6C9A8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.progressBar, progressBarStyle]}
          />
        </View>

        <View style={styles.stepsContainer}>
          {memoizedSteps}
        </View>

        <View style={styles.currentStepContainer}>
          <Animated.Text
            entering={SlideInRight.duration(300)}
            exiting={SlideOutLeft.duration(300)}
            key={currentStep}
            style={styles.currentStepText}
          >
            {steps[currentStep]?.text}
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<StylesType>({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    height: height,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    fontFamily: 'System',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8A8A8A',
    fontFamily: 'System',
    textAlign: 'center',
  },
  progressBarContainer: {
    width: width * 0.85,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  progressBar: {
    height: '100%',
  },
  stepsContainer: {
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 44,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    marginRight: 16,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    backgroundColor: '#D4A574',
  },
  inactiveIcon: {
    backgroundColor: '#E0E0E0',
  },
  stepText: {
    fontSize: 16,
    color: '#8A8A8A',
    fontFamily: 'System',
  },
  activeStepText: {
    color: '#3A3A3A',
    fontWeight: '600',
  },
  currentStepContainer: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    marginTop: 20,
    overflow: 'hidden',
  },
  currentStepText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#D4A574',
    fontFamily: 'System',
    textAlign: 'center',
  },
});

export default AnalyzingPageVariation;