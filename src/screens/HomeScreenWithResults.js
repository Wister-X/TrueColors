import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, Modal } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.7;

const AnimatedView = Animated.createAnimatedComponent(View);

const PreviousAnalysisItem = ({ date }) => (
  <View style={styles.analysisItem}>
    <View style={styles.analysisThumbnail} />
    <Text style={styles.analysisDate}>Analyzed on {date}</Text>
  </View>
);

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

export default function HomeScreenWithResults() {
  const navigation = useNavigation();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  
  const previousAnalyses = [
    { id: '1', date: "May 15, 2023" },
    { id: '2', date: "May 10, 2023" },
    { id: '3', date: "May 5, 2023" },
    { id: '4', date: "April 30, 2023" },
  ];

  const handleUploadPress = () => {
    navigation.navigate('SelfieTips');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Upload Selfie</Text>
          <Text style={styles.subtitle}>Get your personalized results</Text>
        </View>
        <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
          <Ionicons name="settings-outline" size={24} color="#3A3A3A" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.main}>
        <TouchableOpacity style={styles.uploadCard} onPress={handleUploadPress}>
          <Ionicons name="add-circle-outline" size={96} color="#D4A574" />
          <Text style={styles.uploadText}>Upload a new selfie to get started</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPress}>
            <Text style={styles.uploadButtonText}>Upload your pics</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Previous Analysis</Text>
        <FlatList
          data={previousAnalyses}
          renderItem={({ item }) => <PreviousAnalysisItem date={item.date} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.analysisListContent}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={handleUploadPress}
        >
          <View style={styles.iconButton}>
            <Ionicons name="camera-outline" size={32} color="#D4A574" />
          </View>
          <Text style={styles.footerButtonText}>Take Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Results')}>
          <View style={styles.iconButton}>
            <Ionicons name="checkmark-circle-outline" size={32} color="#D4A574" />
          </View>
          <Text style={styles.footerButtonText}>Results</Text>
        </TouchableOpacity>
      </View>

      <SettingsDrawer 
        isVisible={isSettingsVisible} 
        setIsVisible={setIsSettingsVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  subtitle: {
    fontSize: 16,
    color: '#8A8A8A',
  },
  main: {
    flex: 1,
    padding: 16,
  },
  uploadCard: {
    backgroundColor: '#FFF5EB',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  uploadText: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#3A3A3A',
  },
  uploadButton: {
    backgroundColor: '#3A3A3A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
  },
  uploadButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#3A3A3A',
  },
  analysisListContent: {
    paddingRight: 16,
  },
  analysisItem: {
    width: 150,
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  analysisThumbnail: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginBottom: 8,
  },
  analysisDate: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  footerButton: {
    alignItems: 'center',
  },
  iconButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF5EB',
    borderWidth: 2,
    borderColor: '#D4A574',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerButtonText: {
    marginTop: 8,
    fontSize: 14,
    color: '#3A3A3A',
  },
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