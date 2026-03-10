import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const [playerName, setPlayerName] = useState<string>('[Player Name]');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setPlayerName('Kunal');
    setLoading(false);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText>Player Dashboard</ThemedText>
        {loading ? (
          <ActivityIndicator size="small" color="#dc2626" />
        ) : (
          <ThemedText type="subtitle">Welcome back, {playerName}</ThemedText>
        )}
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
    //alignItems: 'center',
    justifyContent: 'flex-start',
    gap: Spacing.three,
  },
});
