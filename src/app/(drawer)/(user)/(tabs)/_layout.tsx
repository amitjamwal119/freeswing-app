import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


import { Colors } from "@/constants/theme";
import { Image } from "expo-image";

export default function TabLayout() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? "dark" : "light";
  const colors = Colors[theme];

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();


  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "",

        headerLeftContainerStyle: {
          paddingLeft: 0,
          marginLeft: -10,
        },

        headerLeft: () => (
          <Image
            source={require("@/assets/FreeSwing.png")}
            style={{
              width: 150,
              height: 80,
              marginLeft: -20,
              resizeMode: "contain",
            }}
          />
        ),

        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.getParent()?.dispatch(DrawerActions.toggleDrawer())
            }
            style={{ marginRight: 15 }}
          >
            <Ionicons name="menu" size={24} color="#333" />
          </TouchableOpacity>
        ),

        tabBarActiveTintColor: "#8bc34a",
        tabBarInactiveTintColor: "#9E9E9E",

        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 50 + insets.bottom,
          paddingBottom: insets.bottom,
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
