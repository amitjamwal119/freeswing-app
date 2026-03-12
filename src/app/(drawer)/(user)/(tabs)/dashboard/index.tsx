import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { Button } from '@react-navigation/elements';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title">Dashboard</ThemedText>
        <ThemedText>Welcome to FreeSwing!</ThemedText>

        {/* Profile Page Button */}
        <Button onPress={() => router.push("/(drawer)/(profile)/userProfile")}>
          Profile Page
        </Button>

        {/* All Members Page Button */}
        <Button onPress={() => router.push("/(drawer)/(allMembers)")}>
          All Members
        </Button>
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