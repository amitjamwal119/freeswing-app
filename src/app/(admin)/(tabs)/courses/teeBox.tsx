import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Box } from "@/components/box";
import { VStack } from "@/components/vstack";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

import { ThemedText } from "@/components/themed-text";
import Watermark from "@/components/watermark";
//               onPress={() => routePage.push("/newRound/scoreCard")}
//     const routePage = useRouter();

import { HStack } from "@/components/hstack";
import { useRouter } from "expo-router";
import { Modal, Pressable, useColorScheme, View } from "react-native";

import { Divider } from "@/components/divider";
import { Text } from "@/components/text";
import { ThemedView } from "@/components/themed-view";
import { TextInput } from "react-native";
export default function teeBoxPage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [modalVisible, setModalVisible] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState<
    "red" | "blue" | "black" | "white" | "gold" | "green" | "silver" | null
  >(null);
  const [scoringMode, setScoringMode] = useState("netInclude");

  const courses = [
    { id: 1, name: "ASC AEPTA", location: "Bangalore", tees: 2, free: true },
    { id: 2, name: "Royal Greens", location: "Delhi", tees: 4, free: false },
    { id: 3, name: "Palm Meadows", location: "Mumbai", tees: 3, free: true },
  ];

  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          backgroundColor: isDark ? "#000" : "#f2f2f2",
        }}
      >
        <Watermark />

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack className="px-4 pb-20 mt-3">
            <VStack className="gap-4">
              {courses.map((course) => (
                <CourseCardAdmin
                  key={course.id}
                  course={course}
                  isDark={isDark}
                  openModal={() => setModalVisible(true)}
                />
              ))}
            </VStack>
          </VStack>
        </ScrollView>
      </ThemedView>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            {/* Header */}
            <HStack className="justify-between items-center mb-4">
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Edit Tee Box
              </Text>

              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} />
              </Pressable>
            </HStack>

            {/* Form */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Name */}
              <VStack className="mb-4">
                <Text
                  style={{ fontSize: 15, fontWeight: "500", marginBottom: 6 }}
                >
                  Name
                </Text>

                <TextInput
                  placeholder="Enter tee name"
                  placeholderTextColor="#999"
                  style={styles.input}
                />
              </VStack>

              {/* Color */}
              <VStack className="mb-4">
                <Text
                  style={{ fontSize: 15, fontWeight: "500", marginBottom: 6 }}
                >
                  Color
                </Text>

                <TextInput
                  placeholder="Enter color"
                  placeholderTextColor="#999"
                  style={styles.input}
                />
              </VStack>

              {/* Rating + Slope Row */}
              <HStack className="justify-between mb-4" style={{ gap: 10 }}>
                <VStack style={{ flex: 1 }}>
                  <Text style={styles.label}>Rating</Text>

                  <TextInput
                    placeholder="Rating"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </VStack>

                <VStack style={{ flex: 1 }}>
                  <Text style={styles.label}>Slope</Text>

                  <TextInput
                    placeholder="Slope"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </VStack>
              </HStack>

              {/* Color Dropdown */}
              <VStack className="mb-4">
                <Text style={styles.label}>Select Color</Text>

                <Pressable
                  onPress={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    borderWidth: 1,
                    borderColor: dropdownOpen ? "#8bc34a" : "#818589",
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <HStack className="justify-between items-center">
                    <ThemedText
                      style={{
                        fontSize: 16,
                        color: selectedColor ? "#8bc34a" : "#999",
                        fontWeight: selectedColor ? "600" : "400",
                      }}
                    >
                      {selectedColor
                        ? selectedColor.charAt(0).toUpperCase() +
                          selectedColor.slice(1)
                        : "Select Color"}
                    </ThemedText>

                    <Ionicons
                      name={dropdownOpen ? "chevron-up" : "chevron-down"}
                      size={20}
                    />
                  </HStack>
                </Pressable>
              </VStack>

              {/* Dropdown Options */}
              {dropdownOpen && (
                <VStack className="border border-gray-400 rounded-lg overflow-hidden mb-4">
                  {(
                    [
                      "red",
                      "blue",
                      "black",
                      "white",
                      "gold",
                      "green",
                      "silver",
                    ] as const
                  ).map((color) => (
                    <Pressable
                      key={color}
                      onPress={() => {
                        setSelectedColor(color);
                        setDropdownOpen(false);
                      }}
                      style={{
                        backgroundColor:
                          selectedColor === color ? "#8bc34a" : "white",
                        paddingVertical: 10,
                      }}
                    >
                      <ThemedText
                        style={{
                          color: selectedColor === color ? "white" : "black",
                          fontWeight: "500",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                      >
                        {color}
                      </ThemedText>
                    </Pressable>
                  ))}
                </VStack>
              )}

              <Text className="text-gray-500 mb-4">
                *Premium courses are only available to subscribed members.
              </Text>
            </ScrollView>

            {/* Footer */}
            <HStack className="justify-end mt-4 gap-3">
              <Pressable
                style={styles.cancelButton}
                onPress={() => {
                  setSelectedColor(null);
                  setModalVisible(false);
                }}
              >
                <ThemedText style={{ color: "white", fontWeight: "600" }}>
                  Cancel
                </ThemedText>
              </Pressable>

              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.startButton}
              >
                <ThemedText style={{ color: "white", fontWeight: "600" }}>
                  Save Changes
                </ThemedText>
              </Pressable>
            </HStack>
          </View>
        </View>
      </Modal>
    </>
  );
}

/* ---------- COURSE CARD ---------- */

function CourseCardAdmin({ course, isDark, openModal }: any) {
  const routePage = useRouter();

  return (
    <Box
      className="rounded-2xl p-5 relative"
      style={{
        borderWidth: 1,
        borderColor: isDark ? "#262626" : "#e5e5e5",
      }}
    >
      {/* Free Badge */}
      {course.free && (
        <Box
          className="absolute top-3 right-3 px-3 py-1 rounded-full"
          style={{
            backgroundColor: isDark ? "#262626" : "#e5e5e5",
          }}
        >
          <ThemedText style={{ fontSize: 12, fontWeight: "600" }}>
            Free
          </ThemedText>
        </Box>
      )}

      {/* Flag */}
      <HStack className="mb-3">
        <Svg width={28} height={28} viewBox="0 0 448 512">
          <Path
            fill="#8bc34a"
            d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V358.4l62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30V65.1c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4V32z"
          />
        </Svg>
      </HStack>

      {/* Course Name */}
      <ThemedText style={{ fontSize: 18, fontWeight: "700" }}>
        {course.name}
      </ThemedText>

      {/* Location */}
      <HStack className="items-center mt-2">
        <Ionicons name="location-outline" size={18} color="#ef4444" />
        <ThemedText
          style={{
            marginLeft: 6,
            fontSize: 14,
            opacity: 0.7,
          }}
        >
          {course.location}
        </ThemedText>
      </HStack>

      {/* Manage Tees */}
      <Pressable
        onPress={() => routePage.replace("/(admin)/(tabs)/courses/teeBox")}
        className="mt-3 rounded-xl py-2 items-center border border-[#8bc34a] flex-row justify-center gap-2"
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#8bc34a" : "transparent",
        })}
      >
        {({ pressed }) => (
          <>
            <Ionicons
              name={pressed ? "apps" : "apps-outline"}
              size={18}
              color={pressed ? "white" : "#8bc34a"}
            />
            <ThemedText
              style={{
                color: pressed ? "white" : "#8bc34a",
                fontWeight: "600",
              }}
            >
              Manage Tees
            </ThemedText>
          </>
        )}
      </Pressable>

      <Divider className="my-3 h-[1px] bg-[#e5e5e5]" />

      {/* Edit / Delete Actions */}
      <HStack className="justify-between">
        {/* Edit */}
        <Pressable onPress={openModal} className="flex-row items-center gap-1">
          <Ionicons name="pencil-outline" size={15} color="#6b7280" />
          <ThemedText style={{ color: "#6b7280", fontWeight: "400" }}>
            Edit
          </ThemedText>
        </Pressable>

        {/* Delete */}
        <Pressable className="flex-row items-center gap-1">
          <Ionicons name="trash-outline" size={15} color="#ef4444" />
          <ThemedText style={{ color: "#ef4444", fontWeight: "400" }}>
            Delete
          </ThemedText>
        </Pressable>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 14,
    padding: 20,
  },

  selectBox: {
    borderWidth: 1,
    borderColor: "#8bc34a",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
  },

  handicapCard: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    padding: 14,
    marginTop: 6,
  },

  cancelButton: {
    backgroundColor: "#6b7280",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },

  startButton: {
    backgroundColor: "#8bc34a",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#818589",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },

  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
  },
});
