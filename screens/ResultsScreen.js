import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, Dimensions, Modal, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, SlideInRight, useAnimatedStyle, useSharedValue, withTiming, runOnJS, SlideInUp, SlideOutDown } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const FullResultsModal = React.memo(({ isVisible, result, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = useMemo(() => ['Overview', 'Palette', 'Colors to Wear', 'Colors to Avoid', 'Accessories', 'Foundation'], []);

  if (!result) return null;

  const renderPage = useCallback((page) => {
    switch (page) {
      case 'Overview':
        return (
          <View>
            <Text style={styles.modalSectionTitle}>Season: {result.season}</Text>
            <Text style={styles.modalText}>Tone: {result.tone}</Text>
            <Text style={styles.modalText}>Face Shape: {result.faceShape}</Text>
            <Text style={styles.modalText}>Contrast: {result.contrast}</Text>
          </View>
        );
      case 'Palette':
        return (
          <View>
            <Text style={styles.modalSectionTitle}>Your Color Palette</Text>
            <Text style={styles.modalText}>{result.paletteDetails}</Text>
            <View style={styles.colorGrid}>
              {result.palette.map((color, index) => (
                <View key={index} style={[styles.colorSwatch, { backgroundColor: color }]} />
              ))}
            </View>
          </View>
        );
      // ... (other cases remain the same)
      default:
        return null;
    }
  }, [result]);

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="none"
      onRequestClose={onClose}
    >
      <BlurView intensity={100} style={StyleSheet.absoluteFill}>
        <Animated.View 
          entering={SlideInUp} 
          exiting={SlideOutDown}
          style={styles.fullResultsModalContent}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{result.date} Results</Text>
            <TouchableOpacity onPress={onClose} accessibilityLabel="Close modal">
              <Ionicons name="close" size={24} color="#3A3A3A" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={pages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.pageContainer}>
                {renderPage(item)}
              </View>
            )}
            keyExtractor={(item) => item}
            onMomentumScrollEnd={(event) => {
              const newPage = Math.round(event.nativeEvent.contentOffset.x / width);
              setCurrentPage(newPage);
            }}
          />
          <View style={styles.paginationContainer}>
            {pages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentPage && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </Animated.View>
      </BlurView>
    </Modal>
  );
});

const ResultCard = React.memo(({ result, onDelete, onExpand, isFocused, onFocus }) => {
  const translateX = useSharedValue(0);
  const cardScale = useSharedValue(1);
  const cardOpacity = useSharedValue(1);
  const leftIndicatorOpacity = useSharedValue(0);
  const rightIndicatorOpacity = useSharedValue(0);

  useEffect(() => {
    cardScale.value = withTiming(isFocused ? 1.05 : 1, { duration: 100 });
  }, [isFocused]);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { scale: cardScale.value }
    ],
    opacity: cardOpacity.value,
  }));

  const leftIndicatorStyle = useAnimatedStyle(() => ({
    opacity: leftIndicatorOpacity.value,
  }));

  const rightIndicatorStyle = useAnimatedStyle(() => ({
    opacity: rightIndicatorOpacity.value,
  }));

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      runOnJS(onFocus)(result.id);
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      const progress = Math.abs(event.translationX) / (width * 0.3);
      cardOpacity.value = withTiming(1 - progress * 0.5, { duration: 50 });
      
      if (event.translationX < 0) {
        leftIndicatorOpacity.value = withTiming(progress, { duration: 50 });
        rightIndicatorOpacity.value = withTiming(0, { duration: 50 });
      } else {
        rightIndicatorOpacity.value = withTiming(progress, { duration: 50 });
        leftIndicatorOpacity.value = withTiming(0, { duration: 50 });
      }
    })
    .onEnd(() => {
      if (translateX.value < -width * 0.3) {
        runOnJS(confirmDelete)();
      } else if (translateX.value > width * 0.3) {
        runOnJS(onExpand)(result);
      } else {
        translateX.value = withTiming(0);
        cardOpacity.value = withTiming(1);
      }
      leftIndicatorOpacity.value = withTiming(0);
      rightIndicatorOpacity.value = withTiming(0);
    });

  const tapGesture = Gesture.Tap()
    .onStart(() => {
      runOnJS(onFocus)(result.id);
    });

  const composedGestures = Gesture.Simultaneous(panGesture, tapGesture);

  const confirmDelete = useCallback(() => {
    Alert.alert(
      "Delete Result",
      "Are you sure you want to delete this result?",
      [
        {
          text: "Cancel",
          onPress: () => {
            translateX.value = withTiming(0);
            cardOpacity.value = withTiming(1);
            leftIndicatorOpacity.value = withTiming(0);
          },
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => {
            translateX.value = withTiming(-width);
            cardScale.value = withTiming(0.5);
            cardOpacity.value = withTiming(0, {}, (finished) => {
              if (finished) {
                runOnJS(onDelete)(result.id);
              }
            });
          }
        }
      ]
    );
  }, [onDelete, result.id]);

  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.swipeIndicator, styles.leftIndicator, leftIndicatorStyle]}>
        <Ionicons name="trash-outline" size={24} color="white" />
        <Text style={styles.indicatorText}>Delete</Text>
      </Animated.View>
      <Animated.View style={[styles.swipeIndicator, styles.rightIndicator, rightIndicatorStyle]}>
        <Ionicons name="eye-outline" size={24} color="white" />
        <Text style={styles.indicatorText}>View</Text>
      </Animated.View>
      <GestureDetector gesture={composedGestures}>
        <Animated.View style={[styles.card, rStyle]}>
          <Image source={{ uri: result.image }} style={styles.resultImage} accessibilityLabel={`Result image from ${result.date}`} />
          <AnimatedLinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent']}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.cardContent}>
            <Text style={styles.dateText}>{result.date}</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
});

export default function ResultsPage() {
  const navigation = useNavigation();
  const [results, setResults] = useState([
    { 
      id: 1, 
      image: 'https://via.placeholder.com/300x400', 
      date: 'Jul 15', 
      palette: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA'],
      season: 'Spring',
      tone: 'Warm',
      faceShape: 'Oval',
      contrast: 'Medium',
      paletteDetails: 'Your palette is bright and warm, perfect for a Spring complexion.',
      colorsToWear: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E'],
      colorsToAvoid: ['#000000', '#8B4513', '#4B0082', '#800000'],
      accessories: 'Gold jewelry, coral necklaces, and turquoise earrings will complement your palette beautifully.',
      foundation: { brand: 'Fenty Beauty', shade: '150 Warm' }
    },
    { 
      id: 2, 
      image: 'https://via.placeholder.com/300x400', 
      date: 'Jul 01', 
      palette: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E'],
      season: 'Autumn',
      tone: 'Warm',
      faceShape: 'Heart',
      contrast: 'High',
      paletteDetails: 'Your palette is rich and warm, perfect for an Autumn complexion.',
      colorsToWear: ['#D35400', '#27AE60', '#2980B9', '#F39C12'],
      colorsToAvoid: ['#000000', '#FF69B4', '#00FFFF', '#FF00FF'],
      accessories: 'Copper jewelry, amber necklaces, and emerald earrings will enhance your natural coloring.',
      foundation: { brand: 'MAC', shade: 'NC30' }
    },
  ]);
  const [viewingResult, setViewingResult] = useState(null);
  const [focusedCardId, setFocusedCardId] = useState(null);

  const handleDelete = useCallback((id) => {
    setResults(prevResults => prevResults.filter(result => result.id !== id));
    setFocusedCardId(null);
  }, []);

  const handleExpand = useCallback((result) => {
    setViewingResult(result);
    setFocusedCardId(null);
  }, []);

  const handleFocus = useCallback((id) => {
    setFocusedCardId(id);
  }, []);

  const renderItem = useCallback(({ item }) => (
    <ResultCard 
      result={item} 
      onDelete={handleDelete} 
      onExpand={handleExpand}
      isFocused={focusedCardId === item.id}
      onFocus={handleFocus}
    />
  ), [handleDelete, handleExpand, handleFocus, focusedCardId]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} accessibilityLabel="Go back">
            <Ionicons name="arrow-back" size={24} color="#3A3A3A" />
          </TouchableOpacity>
          <Text style={styles.title}>Results</Text>
        </View>

        <Animated.View entering={FadeIn.delay(300).duration(500)} style={styles.summaryContainer}>
          <Text style={styles.summaryText}>You've analyzed {results.length} looks</Text>
          <Text style={styles.summarySubtext}>Swipe cards to interact</Text>
        </Animated.View>

        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          onScroll={() => setFocusedCardId(null)} // Reset focus when scrolling
        />

        <FullResultsModal 
          isVisible={viewingResult !== null}
          result={viewingResult}
          onClose={() => {
            setViewingResult(null);
            setFocusedCardId(null);
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF7F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 24,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 24,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  summaryContainer: {
    backgroundColor: '#FFF5EB',
    padding: 16,
    paddingTop: 24,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  summaryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 4,
  },
  summarySubtext: {
    fontSize: 14,
    color: '#8A8A8A',
  },
  listContent: {
    padding: 16,
  },
  cardContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  resultImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  swipeIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  leftIndicator: {
    left: 0,
    backgroundColor: 'rgba(255, 59, 48, 0.8)', // Red color for delete
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  rightIndicator: {
    right: 0,
    backgroundColor: 'rgba(52, 199, 89, 0.8)', // Green color for view
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  indicatorText: {
    color: 'white',
    marginTop: 4,
    fontWeight: '600',
  },
  fullResultsModalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: height * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  pageContainer: {
    width: width - 40,
    paddingHorizontal: 20,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#3A3A3A',
    marginBottom: 8,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  colorSwatch: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#3A3A3A',
  },
});