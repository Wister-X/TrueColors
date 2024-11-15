import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

export default function RateScreen() {
  const [rated, setRated] = useState(false);
  const router = useRouter();

  const handleRating = () => {
    setRated(true);
    setTimeout(() => {
      router.replace('/notification');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name="heart" size={60} color="#D4A574" />
        </View>
        <Text style={styles.title}>Leave a rating!</Text>
        <Text style={styles.subtitle}>
          Your feedback helps us grow and create a better experience for everyone
        </Text>
      </View>

      <View style={styles.footer}>
        {rated && <Text style={styles.ratedText}>Thanks for your support! ❤️</Text>}
        <TouchableOpacity 
          style={[styles.button, rated ? styles.buttonDisabled : styles.buttonEnabled]}
          onPress={handleRating}
          disabled={rated}
        >
          <Text style={styles.buttonText}>
            {rated ? 'Thanks for rating!' : 'Rate True Colors'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5A4A3A',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#8A7A6A',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    padding: 24,
  },
  ratedText: {
    fontSize: 16,
    color: '#D4A574',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonEnabled: {
    backgroundColor: '#D4A574',
  },
  buttonDisabled: {
    backgroundColor: '#5A4A3A',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});