import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StorageUtils } from '../../src/utils/storage';

export default function CameraScreen() {
  const router = useRouter();

  const handleCapture = async () => {
    // TODO: Implement camera functionality
    // For now, just simulate a successful capture
    await StorageUtils.setHasResults(true);
    router.push('/(tabs)' as const);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.cameraPreview}>
        <Text style={styles.text}>Camera Preview</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
          <Ionicons name="camera" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#D4A574',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 