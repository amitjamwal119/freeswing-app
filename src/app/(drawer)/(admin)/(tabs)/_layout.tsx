import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/theme";

export default function AdminTabLayout() {
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

        // LOGO LEFT
        headerLeftContainerStyle: { paddingLeft: 0, marginLeft: -10 },
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

        // PROFILE RIGHT (OPENS DRAWER)
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.getParent()?.dispatch(DrawerActions.openDrawer())
            }
            style={{
              marginRight: 30,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
              }}
            />
          </TouchableOpacity>
        ),

        tabBarActiveTintColor: "#8bc34a",
        tabBarInactiveTintColor: "#9E9E9E",

        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60 + insets.bottom,
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

      {/* MEMBERS */}
      <Tabs.Screen
        name="allMembers/index"
        options={{
          title: "Members",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* COURSES */}
      <Tabs.Screen
        name="courses/index"
        options={{
          title: "Courses",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "flag" : "flag-outline"}
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

      {/* SHOP */}
      <Tabs.Screen
        name="proShop/index"
        options={{
          title: "Pro Shop",
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