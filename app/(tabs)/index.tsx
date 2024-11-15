import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Step } from '../../data/interfaces/interfaces-definition';
import { commonFeatures } from '../../data/seasons/seasons-index';
import { StorageUtils } from '../../src/utils/storage';

export default function HomeScreen() {
  const [hasPreviousResults, setHasPreviousResults] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    loadResultsStatus();
  }, []);

  const loadResultsStatus = async () => {
    const hasResults = await StorageUtils.getHasResults();
    setHasPreviousResults(hasResults);
  };

  // Show loading state while checking results
  if (hasPreviousResults === null) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!hasPreviousResults) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Upload Selfie</Text>
            <Text style={styles.subtitle}>Discover your personalized color palette</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#3A3A3A" />
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <View style={styles.card}>
            <Ionicons name="add-circle-outline" size={96} color="#D4A574" />
            <Text style={styles.cardText}>
              You don't have any results yet,{'\n'}upload a selfie to get started
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/camera' as const)}>
              <Text style={styles.buttonText}>Upload your pics</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>How It Works</Text>
          <View style={styles.stepsContainer}>
            {[
              { step: 1, text: "Upload a selfie" },
              { step: 2, text: "Discover your colors" },
              { step: 3, text: "Get your color palette" }
            ].map((item) => (
              <View key={item.step} style={styles.stepItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{item.step}</Text>
                </View>
                <Text style={styles.stepText}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>True Colors</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="#5A4A3A" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.stepsContainer}>
        {Object.values(commonFeatures.steps).map((step: Step) => (
          <TouchableOpacity key={step.step} style={styles.stepCard}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    paddingTop: 20,
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
  card: {
    backgroundColor: '#FFF5EB',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#3A3A3A',
  },
  button: {
    backgroundColor: '#3A3A3A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
    color: '#3A3A3A',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  stepNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3A3A3A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#3A3A3A',
  },
  // Existing styles for users with previous results
  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});
