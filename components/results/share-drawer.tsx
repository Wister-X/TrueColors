import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  useAnimatedGestureHandler 
} from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.5;

const AnimatedView = Animated.createAnimatedComponent(View);

interface ShareOption {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  text: string;
  color: string;
  onPress?: () => void;
}

interface ShareDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  customOptions?: ShareOption[];
}

type ContextType = {
  startY: number;
};

export const ShareDrawer: React.FC<ShareDrawerProps> = React.memo(({ isOpen, setIsOpen, customOptions }) => {
  const translateY = useSharedValue(DRAWER_HEIGHT);

  const rBottomSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  React.useEffect(() => {
    translateY.value = withSpring(isOpen ? 0 : DRAWER_HEIGHT, { damping: 50 });
  }, [isOpen, translateY]);

  const defaultShareOptions: ShareOption[] = [
    { icon: 'flower-outline', text: 'Share with friends', color: '#FF69B4' },
    { icon: 'mail-outline', text: 'Contact Support', color: '#4169E1' },
    { icon: 'diamond-outline', text: 'Rate Us', color: '#9370DB' },
    { icon: 'logo-instagram', text: 'Follow us on Instagram', color: '#C13584' },
    { icon: 'lock-closed-outline', text: 'Privacy Policy', color: '#FFD700' },
  ];

  const shareOptions = customOptions || defaultShareOptions;

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = Math.max(context.startY + event.translationY, 0);
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
            <TouchableOpacity 
              key={index} 
              style={styles.shareOption}
              onPress={option.onPress}
            >
              <Ionicons name={option.icon} size={24} color={option.color} />
              <Text style={styles.shareOptionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </AnimatedView>
      </PanGestureHandler>
    </Modal>
  );
});

const styles = StyleSheet.create({
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
