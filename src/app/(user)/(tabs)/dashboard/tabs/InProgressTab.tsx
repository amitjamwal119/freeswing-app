import { Badge } from "@/components/badge";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import { Text } from "@/components/text";
import { VStack } from "@/components/vstack";
import { Ionicons } from "@expo/vector-icons";

export function InProgressTab() {
    return (
        <VStack space="md">
            <HStack className="bg-orange-100 p-3 rounded-t-xl items-center pb-2">
                <Ionicons name="hourglass" size={16} color="#4b5563" />
                <Text className="font-bold text-gray-800 ml-2">In Progress Games</Text>
            </HStack>

            <Box className="bg-white border border-gray-200 border-t-0 p-4 rounded-b-xl flex-row justify-between items-center -mt-2">
                <VStack>
                    <Text className="font-bold text-base text-gray-900">ASC AEPTA</Text>
                    <HStack className="items-center mt-1 space-x-2">
                        <Ionicons name="calendar-outline" size={14} color="#6b7280" />
                        <Text className="text-xs text-gray-500">
                            Mar 9, 2026, 5:51:42 PM
                        </Text>
                        <Text className="text-xs text-gray-300 mx-1">•</Text>
                        <Badge className="bg-gray-100 rounded-md px-2 py-0.5 shrink-0 self-start">
                            <Text className="text-[10px] font-medium text-gray-800">
                                1 Holes Played
                            </Text>
                        </Badge>
                    </HStack>
                </VStack>

                <HStack space="sm">
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-red-400 rounded-full px-4 h-8 flex-row items-center justify-center"
                    >
                        <Ionicons
                            name="trash-outline"
                            size={14}
                            color="#f87171"
                            className="mr-1 mt-0.5"
                        />
                        <Text className="text-red-400 text-xs font-medium ml-1">
                            Delete
                        </Text>
                    </Button>
                    <Button
                        size="sm"
                        className="bg-green-500 rounded-full px-4 h-8 flex-row items-center justify-center"
                    >
                        <Text className="text-white text-xs font-medium mr-1">Resume</Text>
                        <Ionicons name="arrow-forward" size={14} color="white" />
                    </Button>
                </HStack>
            </Box>
        </VStack>
    );
}
