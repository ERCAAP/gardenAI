import { Stack } from 'expo-router';
import React from 'react';

export default function RemoveObjectsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="EditScreen" />
      <Stack.Screen name="LoadingScreen" />
      <Stack.Screen name="ResultsScreen" />
    </Stack>
  );
} 