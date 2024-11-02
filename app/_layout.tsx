import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: 'fade',
        headerShown: false,
        contentStyle: { backgroundColor: '#FFF8F0' },
      }}>
      <Stack.Screen name="launch" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="rate" />
      <Stack.Screen name="notification" />
    </Stack>
  );
}
