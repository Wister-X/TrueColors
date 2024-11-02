import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressCircles = React.memo(({ totalSteps, currentStep }) => (
  <View style={styles.progressCircles}>
    {[...Array(totalSteps)].map((_, index) => (
      <View
        key={index}
        style={[
          styles.progressCircle,
          index < currentStep ? styles.progressCircleActive : {}
        ]}
      />
    ))}
  </View>
));

const styles = StyleSheet.create({
  progressCircles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  progressCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginRight: 8,
  },
  progressCircleActive: {
    backgroundColor: '#3A3A3A',
  },
});

export default ProgressCircles;