import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function TabLayout() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? "dark" : "light";
  const colors = Colors[theme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#8bc34a", // active icon + text
        tabBarInactiveTintColor: "#9E9E9E", // inactive icon + text

        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 73,
        },
      }}
    >
      {/* DASHBOARD */}
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* NEW ROUND */}
      <Tabs.Screen
        name="newRound"
        options={{
          title: "New Round",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* TOURNAMENTS */}
      <Tabs.Screen
        name="tournaments/index"
        options={{
          title: "Tournaments",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* BOOK GAME */}
      <Tabs.Screen
        name="bookGame/index"
        options={{
          title: "Book Game",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* SHOP */}
      <Tabs.Screen
        name="shop/index"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
