import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Upload Selfie</Text>
          <Text style={styles.subtitle}>Discover your personalized color palette</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#3A3A3A" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <Ionicons name="add-circle-outline" size={96} color="#D4A574" />
          <Text style={styles.cardText}>
            You don't have any results yet,{'\n'}upload a selfie to get started
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
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

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Camera')}>
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
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
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
});