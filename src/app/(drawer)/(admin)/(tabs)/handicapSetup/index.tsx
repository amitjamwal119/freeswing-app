import React, { useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { VStack } from "@/components/vstack";
import { HStack } from "@/components/hstack";
import { Box } from "@/components/box";
import { Divider } from "@/components/divider";
import { Avatar } from "@/components/avatar";

import { ThemedText } from "@/components/themed-text";
import Watermark from "@/components/watermark";

import { UserIcon } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";

type Player = {
  id: string;
  name: string;
  email: string;
  handicap: number;
  average: number;
};

const players: Player[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@email.com",
    handicap: 3,
    average: 4.2,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@email.com",
    handicap: 5,
    average: 5.8,
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@email.com",
    handicap: 2,
    average: 3.1,
  },
];

export default function PlayerHandicapSetup() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const togglePlayer = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? "#000" : "#f2f2f2",
      }}
    >
      <Watermark />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack className="px-4">

          {/* HEADER */}
          <HStack className="items-center justify-between mb-6">
            <HStack className="items-center">
              <Pressable onPress={() => router.back()}>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  color={isDark ? "#fff" : "#020617"}
                />
              </Pressable>

              <ThemedText
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  marginLeft: 12,
                }}
              >
                Player Handicap Setup
              </ThemedText>
            </HStack>

            {/* PLAYER COUNT */}
            <Box
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
                backgroundColor: "rgba(139,195,74,0.15)",
              }}
            >
              <Ionicons name="people-outline" size={16} color="#8bc34a" />

              <ThemedText
                style={{
                  color: "#8bc34a",
                  fontWeight: "700",
                  marginLeft: 6,
                  fontSize: 14,
                }}
              >
                {players.length} Players
              </ThemedText>
            </Box>
          </HStack>

          {/* PLAYER LIST */}
          <VStack space="md">
            {players.map((player) => (
              <Box
                key={player.id}
                className="p-4 rounded-2xl mb-3"
                style={{
                  backgroundColor: isDark
                    ? "rgba(30,30,30,0.75)"
                    : "rgba(255,255,255,0.75)",
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                }}
              >
                {/* PLAYER HEADER */}
                <Pressable onPress={() => togglePlayer(player.id)}>
                  <HStack className="items-center justify-between">

                    <HStack className="items-center">
                      <Avatar
                        size="md"
                        style={{
                          borderWidth: 2,
                          borderColor: "#8bc34a",
                          marginRight: 10,
                        }}
                      >
                        <UserIcon size={22} color="#8bc34a" />
                      </Avatar>

                      <ThemedText style={{ fontWeight: "700", fontSize: 16 }}>
                        {player.name}
                      </ThemedText>
                    </HStack>

                    <Ionicons
                      name={
                        expanded[player.id]
                          ? "chevron-up-outline"
                          : "chevron-down-outline"
                      }
                      size={22}
                      color={isDark ? "#fff" : "#000"}
                    />
                  </HStack>
                </Pressable>

                {/* DETAILS */}
                {expanded[player.id] && (
                  <>
                    <HStack className="items-center mt-3">
                      <Ionicons
                        name="mail-outline"
                        size={16}
                        color={isDark ? "#9CA3AF" : "#6B7280"}
                      />

                      <ThemedText style={{ marginLeft: 8, fontSize: 14 }}>
                        {player.email}
                      </ThemedText>
                    </HStack>

                    <HStack className="items-center mt-2">
                      <Ionicons
                        name="trophy-outline"
                        size={16}
                        color={isDark ? "#9CA3AF" : "#6B7280"}
                      />

                      <ThemedText style={{ marginLeft: 8, fontSize: 14 }}>
                        Current Handicap: {player.handicap}
                      </ThemedText>
                    </HStack>

                    <HStack className="items-center mt-2">
                      <Ionicons
                        name="analytics-outline"
                        size={16}
                        color={isDark ? "#9CA3AF" : "#6B7280"}
                      />

                      <ThemedText style={{ marginLeft: 8, fontSize: 14 }}>
                        Calculated Average: {player.average}
                      </ThemedText>
                    </HStack>

                    <Divider style={{ marginVertical: 10 }} />
                  </>
                )}
              </Box>
            ))}
          </VStack>

        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}