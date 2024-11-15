import { View, FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ColorSwatch } from '@/components/results/color-swatch';
import { ColorInfo, SeasonData } from '@/data/interfaces/interfaces-definition';

interface ColorSectionProps {
  title: string;
  description: string;
  colors: ColorInfo[];
  onColorPress: (color: ColorInfo) => void;
  seasonData: SeasonData;
}

export function ColorSection({
  title,
  description,
  colors,
  onColorPress,
  seasonData
}: ColorSectionProps) {
  return (
    <View style={styles.section}>
      <ThemedText 
        type="defaultSemiBold" 
        style={[styles.sectionTitle, { color: seasonData.textColor }]}
      >
        {title}
      </ThemedText>
      <ThemedText 
        style={[styles.sectionDescription, { color: seasonData.accentColor }]}
      >
        {description}
      </ThemedText>
      <FlatList
        data={colors}
        numColumns={5}
        renderItem={({ item, index }) => (
          <ColorSwatch
            name={item.name}
            hex={item.hex}
            description={item.description}
            index={index}
            onPress={() => onColorPress(item)}
            accentColor={seasonData.accentColor}
          />
        )}
        keyExtractor={item => item.name}
        scrollEnabled={false}
        style={styles.colorGrid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  colorGrid: {
    marginTop: 16,
  },
});