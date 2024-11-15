import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ProgressCircles } from './results/progress-circles';
import { ThemedView } from '@/components/ThemedView';
import { SeasonData } from '@/data/interfaces/interfaces-definition';

interface ResultLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  seasonData: SeasonData;
  backgroundColor?: string;
}

export function ResultLayout({ 
  children, 
  currentStep, 
  totalSteps, 
  seasonData,
  backgroundColor 
}: ResultLayoutProps) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor || seasonData.bgColor }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ProgressCircles totalSteps={totalSteps} currentStep={currentStep} seasonData={seasonData} />
        </View>
        <ThemedView style={styles.card}>
          {children}
        </ThemedView>
      </ScrollView>
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
  }
});