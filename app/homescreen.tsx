import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Footer } from '@/components/home/Footer';
import { Header } from '@/components/home/Header';
import { PreviousAnalysisList } from '@/components/home/PreviousAnalysisList';
import { UploadCard } from '@/components/home/UploadCard';
import { ThemedView } from '@/components/ThemedView';

type RootStackParamList = {
  Home: undefined;
  SelfieTips: undefined;
  Results: undefined;
};

export default function HomeScreenWithResults() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  
  const previousAnalyses = [
    { id: '1', date: "May 15, 2023" },
    { id: '2', date: "May 10, 2023" },
    { id: '3', date: "May 5, 2023" },
    { id: '4', date: "April 30, 2023" },
  ];

  const footerButtons = [
    {
      icon: 'camera-outline' as const,
      label: 'Take Picture',
      onPress: () => navigation.navigate('SelfieTips')
    },
    {
      icon: 'checkmark-circle-outline' as const,
      label: 'Results',
      onPress: () => navigation.navigate('Results'),
      isActive: true
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Upload Selfie"
        subtitle="Get your personalized results"
        onSettingsPress={() => setIsSettingsVisible(true)}
      />

      <ThemedView style={styles.main}>
        <UploadCard
          onUploadPress={() => navigation.navigate('SelfieTips')}
          buttonText="Upload your pics"
          description="Upload a new selfie to get started"
        />

        <PreviousAnalysisList
          analyses={previousAnalyses}
          onAnalysisPress={() => navigation.navigate('Results')}
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