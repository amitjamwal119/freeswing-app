import React from 'react';
import { StyleSheet } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { Button } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import Watermark from '@/components/watermark';

export default function DashboardScreen() {
  const routePage = useRouter();
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Watermark/>
        <ThemedText type="title">Dashboard</ThemedText>
        <ThemedText>Welcome to FreeSwing!</ThemedText>
        <Button
        onPress={() => routePage.push("/(profile)/userProfile")}
        >Profile Page</Button>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
  },
});
