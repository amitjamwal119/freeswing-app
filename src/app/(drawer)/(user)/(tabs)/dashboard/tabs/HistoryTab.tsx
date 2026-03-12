import { Box } from "@/components/box";
import { Text } from "@/components/text";
import { Ionicons } from "@expo/vector-icons";

export function HistoryTab() {
    return (
        <Box className="bg-background-0 rounded-2xl border border-outline-200 py-12 items-center mt-4">
            <Ionicons name="time-outline" size={40} color="#9ca3af" />
            <Text className="text-typography-400 font-semibold text-sm mt-3">
                No history yet
            </Text>
        </Box>
    );
}
