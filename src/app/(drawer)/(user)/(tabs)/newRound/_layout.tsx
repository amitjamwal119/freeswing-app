import { Stack } from "expo-router";

export default function NewRoundLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="scoreCard"
        options={{
          title: "Score Card",
        }}
      />{" "}
    </Stack>
  );
}
