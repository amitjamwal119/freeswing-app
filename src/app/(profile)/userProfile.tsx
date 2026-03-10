// import { ThemedText } from "@/components/themed-text";
// import { ThemedView } from "@/components/themed-view";
// // import {
// //   Briefcase,
// //   LockKeyhole,
// //   Mail,
// //   User,
// //   UserPen,
// // } from "lucide-react-native";
// import { Ionicons } from "@expo/vector-icons";

// import { HStack } from "@/components/hstack";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import {
//   Pressable,
//   ScrollView,
//   TouchableOpacity,
//   useColorScheme,
//   View
// } from "react-native";
// // import { VStack } from "@/components/ui/vstack";
// import { Avatar } from "@/components/avatar";
// import { Box } from "@/components/box";
// import { Divider } from "@/components/divider";
// import { VStack } from "@/components/vstack";

// export default function UserProfile() {
//   const [userData, setUserData] = useState<any>(null);
//   const [showChangePas, setChangePas] = useState(false);

//   const [showEditProfile, setEditProfile] = useState(false);

//   const colorScheme = useColorScheme();

//   // const colorScheme = useColorScheme();
//   const isDark = colorScheme === "dark";

//   const routePage = useRouter();

//   return (
//     <>
//       <ThemedView className="flex-1 p-5 pt-20">
//         {/* ================= SCROLL CONTENT ================= */}
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {/* HEADER */}
//           <HStack>
//             <Pressable onPress={() => routePage.back()}>
//               <Ionicons
//                 name="arrow-back-outline"
//                 size={22}
//                 color={colorScheme === "dark" ? "#ffffff" : "#020617"}
//               />
//             </Pressable>
//           </HStack>

//           {/* PROFILE */}
//           <VStack className="items-center mb-8">
//             {/* <Avatar size="xl" className="mb-4">
//               <AvatarImage source={{ uri: user.imageUrl }} />
//             </Avatar> */}
//             <View
//               style={{
//                 borderWidth: 2,
//                 borderColor: isDark ? "#ffffff" : "#dc2626",
//                 borderRadius: 999,
//                 padding: 3,
//                 marginBottom: 16,
//               }}
//             >
//               <Avatar size="xl">
//                 {/* <AvatarImage source={{ uri: user.imageUrl }} /> */}
//               </Avatar>
//             </View>

//             <ThemedText style={{ fontSize: 23, fontWeight: "700" }}>
//               John Doe
//             </ThemedText>
//           </VStack>

//           {/* DETAILS */}
//           <Box className="bg-white/10 px-4 py-5 rounded-2xl border border-gray-200">
//             <VStack space="md">
//               <HStack className="items-center gap-3">
//                 <User size={22} color="#dc2626" />
//                 <VStack>
//                   <ThemedText className="text-sm text-gray-400">
//                     Username
//                   </ThemedText>
//                   <ThemedText>John Doe</ThemedText>
//                 </VStack>
//               </HStack>

//               <Divider />

//               <HStack className="items-center gap-3">
//                 <Mail size={20} color="#dc2626" />
//                 <VStack>
//                   <ThemedText className="text-sm text-gray-400">
//                     Email
//                   </ThemedText>
//                   <ThemedText>johndoemail.com</ThemedText>
//                 </VStack>
//               </HStack>

//               <Divider />

//               <HStack className="items-center gap-3">
//                 <Briefcase size={20} color="#dc2626" />
//                 <VStack>
//                   <ThemedText className="text-sm text-gray-400">
//                     Organisation
//                   </ThemedText>
//                   <ThemedText>klark</ThemedText>
//                 </VStack>
//               </HStack>
//             </VStack>
//           </Box>

//           {/* BUTTONS */}

//           <VStack className="mt-8" space="md">
//             <TouchableOpacity
//               activeOpacity={0.8}
//               style={{
//                 backgroundColor: "#dc2626",
//                 paddingVertical: 16,
//                 borderRadius: 12,
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 gap: 8,
//               }}
//               onPress={() => setEditProfile(true)}
//             >
//               <UserPen size={20} color="white" />
//               <ThemedText style={{ color: "white", fontWeight: "600" }}>
//                 Edit Profile
//               </ThemedText>
//             </TouchableOpacity>

//             <TouchableOpacity
//               activeOpacity={0.8}
//               className="bg-black rounded-xl py-4 flex-row justify-center gap-2"
//               onPress={() => setChangePas(true)}
//             >
//               <LockKeyhole size={20} color="white" />
//               <ThemedText style={{ color: "white", fontWeight: "600" }}>
//                 Change Password
//               </ThemedText>
//             </TouchableOpacity>
//           </VStack>
//         </ScrollView>
//       </ThemedView>
//     </>
//   );
// }
