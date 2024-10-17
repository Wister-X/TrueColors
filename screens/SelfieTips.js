import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

// Components
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const TipsCard = () => (
  <View style={styles.tipsCard}>
    {[
      { emoji: '🕶️', text: 'No hats, glasses, or covered faces' },
      { emoji: '💡', text: 'Use good lighting' },
      { emoji: '👀', text: 'Look straight into the camera' },
      { emoji: '🚫', text: "Don't use any filters" },
    ].map((tip, index) => (
      <View key={index} style={styles.tipItem}>
        <Text style={styles.tipEmoji}>{tip.emoji}</Text>
        <Text style={styles.tipText}>{tip.text}</Text>
      </View>
    ))}
  </View>
);

const ExampleImage = ({ type, index }) => (
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: `https://via.placeholder.com/120x150.png?text=${type}+example+${index+1}` }}
      style={styles.exampleImage}
    />
    <View style={[styles.indicator, type === 'good' ? styles.goodIndicator : styles.badIndicator]}>
      <Text style={styles.indicatorText}>{type === 'good' ? '✓' : '✗'}</Text>
    </View>
  </View>
);

const ExamplesSection = ({ title, type }) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.examplesScroll}>
      {Array(6).fill(0).map((_, i) => (
        <ExampleImage key={`${type}-${i}`} type={type} index={i} />
      ))}
    </ScrollView>
  </View>
);

const UploadButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Upload or take a selfie</Text>
  </TouchableOpacity>
);

// Main Component
const SelfieTips = () => {
  const handleImageUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        console.log(source);
        // Handle the uploaded image here
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Tips for best results</Title>
        <TipsCard />
        <ExamplesSection title="Good examples" type="good" />
        <ExamplesSection title="Bad examples" type="bad" />
      </ScrollView>
      <UploadButton onPress={handleImageUpload} />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#3A3A3A',
  },
  tipsCard: {
    backgroundColor: '#FFF5EB',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  tipText: {
    fontSize: 15,
    color: '#3A3A3A',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3A3A3A',
  },
  examplesScroll: {
    marginBottom: 14,
  },
  imageContainer: {
    marginRight: 10,
  },
  exampleImage: {
    width: 120,
    height: 150,
    borderRadius: 8,
  },
  indicator: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goodIndicator: {
    backgroundColor: '#4CAF50',
  },
  badIndicator: {
    backgroundColor: '#F44336',
  },
  indicatorText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3A3A3A',
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelfieTips;