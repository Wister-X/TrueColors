import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  HAS_RESULTS: 'hasResults',
  USER_RESULTS: 'userResults',
};

export const StorageUtils = {
  async setHasResults(value: boolean) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.HAS_RESULTS, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving results status:', error);
    }
  },

  async getHasResults(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.HAS_RESULTS);
      return value ? JSON.parse(value) : false;
    } catch (error) {
      console.error('Error getting results status:', error);
      return false;
    }
  },

  async clearStorage() {
    try {
      await AsyncStorage.multiRemove([STORAGE_KEYS.HAS_RESULTS, STORAGE_KEYS.USER_RESULTS]);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}; 