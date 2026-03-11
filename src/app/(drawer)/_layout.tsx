import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

function CustomDrawerContent() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Profile Section */}
      <View style={styles.topSection}>
        {/* Golf Ball Avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Pro</Text>
          </View>
        </View>

        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.handicap}>Handicap: 5</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <TouchableOpacity
          onPress={() => router.replace("/(drawer)/(profile)/userProfile")}
          style={styles.drawerItem}
        >
          <Ionicons name="person-circle-outline" size={26} color="#2e7d32" />
          <Text style={styles.drawerText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //   onPress={() => router.replace("/(stats)/userStats")}
          style={styles.drawerItem}
        >
          <Ionicons name="analytics-outline" size={26} color="#2e7d32" />
          <Text style={styles.drawerText}>Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //   onPress={() => router.replace("/(settings)/userSettings")}
          style={styles.drawerItem}
        >
          <Ionicons name="settings-outline" size={26} color="#2e7d32" />
          <Text style={styles.drawerText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Logout */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={() => router.replace("/login")}
          style={styles.logoutButton}
        >
          <Ionicons name="log-out-outline" size={22} color="#fff" />
          <Text style={[styles.drawerText, { color: "#fff" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          width: 300,
          backgroundColor: "#e8f5e9",
        },
      }}
    >
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topSection: {
    alignItems: "center",
    marginTop: 20,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#8bc34a",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
  },
  badge: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "#8bc34a",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  userName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#558b2f",
  },
  handicap: {
    fontSize: 14,
    color: "#4caf50",
    marginTop: 4,
  },
  drawerItems: {
    marginTop: 40,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 6,
    backgroundColor: "#8bc34a",
  },
  drawerText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  logoutContainer: {
    marginBottom: 20,
    // paddingHorizontal: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8bc34a",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: "center",
  },
});