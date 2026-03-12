import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { VStack } from "@/components/vstack";
import { HStack } from "@/components/hstack";
import { Box } from "@/components/box";
import { Divider } from "@/components/divider";

import { ThemedText } from "@/components/themed-text";
import Watermark from "@/components/watermark";

export default function adminTournamentsPage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [modalVisible, setModalVisible] = useState(false);

  // Dummy data (replace with API later)
  const tournaments = [
    {
      id: 1,
      name: "BMW Cup",
      course: "Club Prestige Golfshire Club",
      start: "Mar 11, 2026",
      end: "Mar 12, 2026",
    },
    {
      id: 2,
      name: "W12 Championship",
      course: "ASC AEPTA",
      start: "Mar 10, 2026",
      end: "Mar 11, 2026",
    },
    {
      id: 3,
      name: "Practice Tour",
      course: "Bangalore Golf Club",
      start: "Mar 9, 2026",
      end: "Mar 9, 2026",
    },
  ];

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? "#000" : "#f2f2f2",
        }}
      >
        <Watermark />

        {/* Header */}
        <HStack className="justify-between items-center px-4 mt-2">
          <ThemedText
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Tournaments
          </ThemedText>

          <Pressable
            style={styles.createButton}
            onPress={() => setModalVisible(true)}
            className="flex-row items-center gap-1"
          >
            <Ionicons name="add-outline" size={18} color="white" />
            <ThemedText style={{ color: "white", fontWeight: "600" }}>
              Create
            </ThemedText>
          </Pressable>
        </HStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack className="px-4 pb-20 mt-4 gap-4">
            {tournaments.map((tournament) => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                isDark={isDark}
              />
            ))}
          </VStack>
        </ScrollView>
      </SafeAreaView>

      {/* CREATE TOURNAMENT MODAL */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <HStack className="justify-between items-center mb-4">
              <ThemedText style={{ fontSize: 18, fontWeight: "700" }}>
                Create Tournament
              </ThemedText>

              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} />
              </Pressable>
            </HStack>

            <ScrollView showsVerticalScrollIndicator={false}>
              <VStack className="gap-3">
                <TextInput
                  placeholder="Tournament Name"
                  style={styles.input}
                />

                <TextInput placeholder="Course" style={styles.input} />

                <TextInput placeholder="Tee Box" style={styles.input} />

                <TextInput placeholder="Scoring Type" style={styles.input} />

                <TextInput placeholder="Start Date" style={styles.input} />

                <TextInput placeholder="End Date" style={styles.input} />

                <TextInput
                  placeholder="Description"
                  multiline
                  numberOfLines={3}
                  style={styles.textArea}
                />
              </VStack>
            </ScrollView>

            <HStack className="justify-end mt-6 gap-3">
              <Pressable
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <ThemedText style={{ color: "#374151" }}>Cancel</ThemedText>
              </Pressable>

              <Pressable style={styles.createButton}>
                <ThemedText style={{ color: "white", fontWeight: "600" }}>
                  Create
                </ThemedText>
              </Pressable>
            </HStack>
          </View>
        </View>
      </Modal>
    </>
  );
}

function TournamentCard({ tournament, isDark }: any) {
  return (
    <Box
      className="rounded-2xl p-4"
      style={{
        borderWidth: 1,
        borderColor: isDark ? "#262626" : "#e5e5e5",
      }}
    >
      <VStack className="gap-2">
        <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>
          {tournament.name}
        </ThemedText>

        <ThemedText style={{ opacity: 0.7 }}>
          {tournament.course}
        </ThemedText>

        <HStack className="justify-between mt-2">
          <VStack>
            <ThemedText style={{ fontSize: 12, opacity: 0.6 }}>
              Start
            </ThemedText>

            <ThemedText>{tournament.start}</ThemedText>
          </VStack>

          <VStack>
            <ThemedText style={{ fontSize: 12, opacity: 0.6 }}>
              End
            </ThemedText>

            <ThemedText>{tournament.end}</ThemedText>
          </VStack>
        </HStack>

        <Divider className="my-2" />

        {/* Actions */}
        <HStack className="justify-between">

          <Pressable>
            <Ionicons name="pencil-outline" size={18} color="#6b7280" />
          </Pressable>

          <Pressable>
            <Ionicons name="person-add-outline" size={18} color="#3b82f6" />
          </Pressable>

          <Pressable>
            <Ionicons name="time-outline" size={18} color="#06b6d4" />
          </Pressable>

          <Pressable>
            <Ionicons name="stats-chart-outline" size={18} color="#f59e0b" />
          </Pressable>

          <Pressable>
            <Ionicons name="trash-outline" size={18} color="#ef4444" />
          </Pressable>

        </HStack>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },

  modalContainer: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 20,
    maxHeight: "85%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    height: 90,
    textAlignVertical: "top",
  },

  createButton: {
    backgroundColor: "#8bc34a",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  cancelButton: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
});