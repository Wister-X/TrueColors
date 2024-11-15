import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Footer } from '@/components/home/Footer';
import { Header } from '@/components/home/Header';
import { StepsList } from '@/components/home/StepsList';
import { UploadCard } from '@/components/home/UploadCard';
import { ThemedView } from '@/components/ThemedView';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Camera: undefined;
  Results: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const steps = [
    { step: 1, text: "Upload a selfie" },
    { step: 2, text: "Discover your colors" },
    { step: 3, text: "Get your color palette" }
  ];

  const footerButtons = [
    {
      icon: 'camera-outline' as const,
      label: 'Take Picture',
      onPress: () => navigation.navigate('Camera')
    },
    {
      icon: 'checkmark-circle-outline' as const,
      label: 'Results',
      onPress: () => navigation.navigate('Results'),
      isActive: false
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Upload Selfie"
        subtitle="Discover your personalized color palette"
        onSettingsPress={() => navigation.navigate('Settings')}
      />

      <ThemedView style={styles.main}>
        <UploadCard
          onUploadPress={() => navigation.navigate('Camera')}
          buttonText="Upload your pics"
          description="You don't have any results yet,\nupload a selfie to get started"
        />

        <StepsList
          steps={steps}
          title="How It Works"
        />
      </ThemedView>

      <Footer buttons={footerButtons} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
  },
  main: {
    flex: 1,
    padding: 16,
  }
});