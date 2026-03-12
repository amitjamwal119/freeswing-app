import { Badge } from "@/components/badge";
import { Box } from "@/components/box";
import { HStack } from "@/components/hstack";
import { Text } from "@/components/text";
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { VStack } from "@/components/vstack";
import { Spacing } from '@/constants/theme';
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HistoryTab } from "./tabs/HistoryTab";
import { InProgressTab } from "./tabs/InProgressTab";
import { OverviewTab, type Scorecard } from "./tabs/OverviewTab";

// ─── TODO: swap this function with your real API call ─────────────────────────
// async function fetchGameFeed(): Promise<Scorecard[]> {
//   const res = await fetch("https://your-api.com/game-feed", {
//     headers: { Authorization: `Bearer ${YOUR_TOKEN}` },
//   });
//   const json = await res.json();
//   return json.data;
// }

// ─── Hardcoded data (remove once API is ready) ────────────────────────────────
const HARDCODED_CARDS: Scorecard[] = [
  {
    id: "1",
    playerName: "Kunal",
    date: "Mar 11, 2026",
    course: "Bangalore Golf Club",
    tee: "Red",
    holes: 18,
    grossScore: 62,
    grossDiff: -8,
    net: 62,
    points: 64,
    par: 70,
    likes: 0,
    isTournament: false,
  },
  {
    id: "2",
    playerName: "x1",
    date: "Mar 10, 2026",
    course: "w12",
    tee: "BLUE",
    holes: 18,
    grossScore: 86,
    grossDiff: 16,
    net: 78,
    points: 30,
    par: 70,
    likes: 0,
    isTournament: true,
  },
];

export default function DashboardScreen() {
  const [cards, setCards] = useState<Scorecard[]>(HARDCODED_CARDS);

  const handleLike = (id: string) =>
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );

  const [playerName, setPlayerName] = useState<string>('[Player Name]');
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview", icon: "grid-outline" },
    { key: "progress", label: "In Progress", icon: "hourglass-outline" },
    { key: "history", label: "Game History", icon: "time-outline" },
  ];

  useEffect(() => {
    setPlayerName('Kunal');
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ThemedView style={styles.container}>
          <ThemedText>Player Dashboard</ThemedText>
          {loading ? (
            <ActivityIndicator size="small" color="#dc2626" />
          ) : (
            <ThemedText type="subtitle">Welcome back, {playerName}</ThemedText>
          )}
          <ThemedText>Track your progress and manage your games.</ThemedText>

          {/* Tabs */}
          <View className="flex-row items-center bg-gray-100 p-1 rounded-full justify-between">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <Pressable
                  key={tab.key}
                  onPress={() => setActiveTab(tab.key)}
                  className={`flex-row items-center px-4 py-2 rounded-full ${active ? "bg-green-500" : ""
                    }`}
                >
                  <Text
                    className={`text-sm font-medium ${active ? "text-white" : "text-gray-500"
                      }`}
                  >
                    {tab.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {activeTab === "overview" && (
            <>
              <VStack space="md">
                {/* Row 1 */}
                <HStack space="md">
                  {/* Card 1 */}
                  <Box className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <HStack className="justify-between items-center">
                      <VStack className="space-y-1">
                        <Text className="text-3xl font-bold">3</Text>
                        <Text className="text-sm text-gray-500 font-medium">
                          COURSES PLAYED
                        </Text>
                        <Badge className="bg-gray-200 rounded-md self-start px-2 py-1">
                          <Text className="text-xs">Unique</Text>
                        </Badge>
                      </VStack>
                      <Box className="bg-amber-100 p-3 rounded-xl items-center justify-center">
                        <Ionicons name="location" size={22} color="#d97706" />
                      </Box>
                    </HStack>
                  </Box>

                  {/* Card 2 */}
                  <Box className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <HStack className="justify-between items-center">
                      <VStack className="space-y-1">
                        <Text className="text-3xl font-bold">72.300</Text>
                        <Text className="text-sm text-gray-500 font-medium">
                          AVG SCORE
                        </Text>
                        <Badge className="bg-gray-200 rounded-md self-start px-2 py-1">
                          <Text className="text-xs">Per 18 Holes</Text>
                        </Badge>
                      </VStack>
                      <Box className="bg-blue-100 p-3 rounded-full items-center justify-center">
                        <Ionicons name="stats-chart-outline" size={22} color="#06abd4" />
                      </Box>
                    </HStack>
                  </Box>
                </HStack>

                {/* Row 2 */}
                <HStack space="md">
                  {/* Card 3 */}
                  <Box className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <HStack className="justify-between items-center">
                      <VStack className="space-y-1">
                        <Text className="text-3xl font-bold">40</Text>
                        <Text className="text-sm text-gray-500 font-medium">
                          BEST SCORE
                        </Text>
                        <Badge className="bg-gray-200 rounded-md self-start px-2 py-1">
                          <Text className="text-xs">Personal Best</Text>
                        </Badge>
                      </VStack>
                      <Box className="bg-green-100 p-3 rounded-full items-center justify-center">
                        <Ionicons name="star" size={22} color="#06d428" />
                      </Box>
                    </HStack>
                  </Box>

                  {/* Card 4 */}
                  <Box className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <HStack className="justify-between items-center">
                      <VStack className="space-y-1">
                        <Text className="text-3xl font-bold">15</Text>
                        <Text className="text-sm text-gray-500 font-medium">
                          HANDICAP INDEX
                        </Text>
                        <Badge className="bg-gray-200 rounded-md self-start px-2 py-1">
                          <Text className="text-xs">Portable Index</Text>
                        </Badge>
                      </VStack>
                      <Box className="bg-purple-100 p-3 rounded-full items-center justify-center">
                        <Ionicons name="flag" size={22} color="#2fe228ff" />
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </VStack>

              {/* Home Course Handicap */}
              <Box className="w-full bg-white p-4 rounded-xl border border-gray-200 mt-3">
                <HStack className="justify-between items-center">
                  <VStack className="space-y-1">
                    <Text className="text-3xl font-bold">0</Text>
                    <Text className="text-sm text-gray-500 font-medium">
                      HOME COURSE HANDICAP
                    </Text>
                    <Badge className="bg-gray-200 rounded-md self-start px-2 py-1">
                      <Text className="text-xs">No Home Course</Text>
                    </Badge>
                  </VStack>
                  <Box className="bg-gray-100 p-4 rounded-full items-center justify-center">
                    <Ionicons name="home" size={22} color="#757575ff" />
                  </Box>
                </HStack>
              </Box>
            </>
          )}

          {/* Tab Content */}
          {activeTab === "overview" && <OverviewTab cards={cards} handleLike={handleLike} />}
          {activeTab === "progress" && <InProgressTab />}
          {activeTab === "history" && <HistoryTab />}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.four,
    gap: Spacing.three,
  },
});