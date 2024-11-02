import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  useAnimatedGestureHandler,
  runOnJS,
  FadeIn,
  FadeInDown
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.7;

const AnimatedView = Animated.createAnimatedComponent(View);

const SettingItem = ({ icon, text, color, onPress }) => (
  <TouchableOpacity style={styles.settingOption} onPress={onPress}>
    <View style={styles.settingOptionLeft}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={styles.settingOptionText}>{text}</Text>
    </View>
    <Ionicons name="chevron-forward" size={24} color="#3A3A3A" />
  </TouchableOpacity>
);

const SettingsDrawer = ({ isVisible, setIsVisible }) => {
  const translateY = useSharedValue(DRAWER_HEIGHT);

  useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(0, { damping: 50 });
    } else {
      translateY.value = withSpring(DRAWER_HEIGHT, { damping: 50 });
    }
  }, [isVisible]);

  const rDrawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = Math.max(ctx.startY + event.translationY, 0);
    },
    onEnd: (event) => {
      if (event.velocityY > 500 || event.translationY > DRAWER_HEIGHT / 3) {
        translateY.value = withSpring(DRAWER_HEIGHT, { damping: 50 });
        runOnJS(setIsVisible)(false);
      } else {
        translateY.value = withSpring(0, { damping: 50 });
      }
    },
  });

  const closeDrawer = () => {
    setIsVisible(false);
  };

  const settingsOptions = [
    { icon: 'flower-outline', text: 'Share it with your friends', color: '#FF69B4', onPress: () => {} },
    { icon: 'mail-outline', text: 'Contact Support', color: '#4169E1', onPress: () => {} },
    { icon: 'star-outline', text: 'Rate Us', color: '#FFD700', onPress: () => {} },
    { icon: 'logo-instagram', text: 'Follow us on IG', color: '#C13584', onPress: () => {} },
    { icon: 'lock-closed-outline', text: 'Privacy Policy', color: '#4CAF50', onPress: () => {} },
    { icon: 'language-outline', text: 'Language', color: '#FF9800', onPress: () => {} },
    { icon: 'notifications-outline', text: 'Notifications', color: '#2196F3', onPress: () => {} },
    { icon: 'information-circle-outline', text: 'About', color: '#795548', onPress: () => {} },
  ];

  return (
    <Modal visible={isVisible} transparent animationType="none">
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={closeDrawer}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <AnimatedView style={[styles.drawer, rDrawerStyle]}>
            <View style={styles.drawerHandle} />
            <Animated.View entering={FadeIn.delay(200)} style={styles.drawerContent}>
              <View style={styles.drawerHeader}>
                <Text style={styles.drawerTitle}>Settings</Text>
                <TouchableOpacity onPress={closeDrawer}>
                  <Ionicons name="close" size={24} color="#3A3A3A" />
                </TouchableOpacity>
              </View>
              {settingsOptions.map((option, index) => (
                <Animated.View key={option.text} entering={FadeInDown.delay(100 + index * 50)}>
                  <SettingItem {...option} />
                </Animated.View>
              ))}
            </Animated.View>
          </AnimatedView>
        </PanGestureHandler>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  drawer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: DRAWER_HEIGHT,
    width: SCREEN_WIDTH,
    padding: 20,
  },
  drawerHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#00000020',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 2,
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#00000010',
  },
  settingOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingOptionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#3A3A3A',
  },
});

export default SettingsDrawer;