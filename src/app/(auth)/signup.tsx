import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SignupScreen() {
    const router = useRouter();

    const [userType, setUserType] = useState("beginner");

    // Form fields
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [course, setCourse] = useState("");
    const [hcp, setHcp] = useState("");
    const [hIndex, setHIndex] = useState("");
    const [slope, setSlope] = useState("");
    const [rating, setRating] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [courseModal, setCourseModal] = useState(false);

    const courses = [
        "Pebble Beach",
        "Augusta National",
        "St Andrews",
        "Royal Melbourne",
    ];


    // Format date to dd-mm-yyyy
    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Handle date change with 18+ restriction
    const onDateChange = (event: any, date?: Date) => {
        setShowDatePicker(false);
        if (date) {
            const today = new Date();
            const minDate = new Date(
                today.getFullYear() - 18,
                today.getMonth(),
                today.getDate()
            );
            if (date > minDate) {
                alert("You must be 18+");
                return;
            }
            setSelectedDate(date);
            setDob(formatDate(date));
        }
    };

    // Reset form fields when switching user type
    const resetForm = () => {
        setName("");
        setDob("");
        setMobile("");
        setEmail("");
        setPassword("");
        setCourse("");
        setHcp("");
        setHIndex("");
        setSlope("");
        setRating("");
        setSelectedDate(new Date());
        setShowDatePicker(false);
    };

    const handleUserTypeChange = (type: string) => {
        setUserType(type);
        resetForm();
    };

    const handleSignup = () => {
        router.replace("/login");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header */}
                <View
                    className="h-48 rounded-b-[50px] justify-center px-6"
                    style={{ backgroundColor: "#8bc34a" }}
                >
                    <Text className="text-3xl font-bold text-white">Create Account</Text>
                    <Text className="text-white mt-2">or use your email for registration</Text>
                </View>

                <View className="px-6 mt-16">
                    {/* User Type */}
                    <View className="flex-row justify-between mb-4">
                        <TouchableOpacity
                            onPress={() => handleUserTypeChange("beginner")}
                            className="flex-1 mr-2 p-3 rounded-md items-center"
                            style={{
                                backgroundColor:
                                    userType === "beginner" ? "#8bc34a" : "#e5e5e5",
                            }}
                        >
                            <Text
                                style={{ color: userType === "beginner" ? "white" : "black" }}
                            >
                                Beginner
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleUserTypeChange("experienced")}
                            className="flex-1 ml-2 p-3 rounded-md items-center"
                            style={{
                                backgroundColor:
                                    userType === "experienced" ? "#8bc34a" : "#e5e5e5",
                            }}
                        >
                            <Text
                                style={{
                                    color: userType === "experienced" ? "white" : "black",
                                }}
                            >
                                Experienced
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Name */}
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        className="border border-gray-300 rounded-md p-4 mb-4"
                    />

                    {/* DOB with clear button */}
                    <View className="border border-gray-300 rounded-md p-4 mb-4 flex-row justify-between items-center">
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            style={{ flex: 1 }}
                        >
                            <Text style={{ color: dob ? "#000" : "#9ca3af" }}>
                                {dob || "dd-mm-yyyy"}
                            </Text>
                        </TouchableOpacity>
                        {dob && (
                            <TouchableOpacity
                                onPress={() => setDob("")}
                                style={{
                                    marginLeft: 10,
                                    width: 24,
                                    height: 24,
                                    borderRadius: 12,
                                    backgroundColor: "#e5e5e5",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons name="close" size={16} color="red" />
                            </TouchableOpacity>
                        )}
                    </View>

                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="default"
                            maximumDate={new Date()}
                            onChange={onDateChange}
                        />
                    )}

                    {/* Mobile */}
                    <TextInput
                        placeholder="Mobile Number"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        className="border border-gray-300 rounded-md p-4 mb-4"
                    />

                    {/* Email */}
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        className="border border-gray-300 rounded-md p-4 mb-4"
                    />

                    {/* Experienced Fields */}
                    {userType === "experienced" && (
                        <>
                            {/* Home Course Dropdown */}
                            <TouchableOpacity
                                onPress={() => setCourseModal(true)}
                                className="border border-gray-300 rounded-md p-4 mb-4"
                            >
                                <Text>{course || "Select Home Course"}</Text>
                            </TouchableOpacity>

                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between" }}
                            >
                                <TextInput
                                    placeholder="Hcp"
                                    value={hcp}
                                    onChangeText={setHcp}
                                    keyboardType="numeric"
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#d1d5db",
                                        borderRadius: 6,
                                        padding: 12,
                                        width: "48%",
                                        marginBottom: 16,
                                    }}
                                />
                                <TextInput
                                    placeholder="H.Index"
                                    value={hIndex}
                                    onChangeText={setHIndex}
                                    keyboardType="numeric"
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#d1d5db",
                                        borderRadius: 6,
                                        padding: 12,
                                        width: "48%",
                                        marginBottom: 16,
                                    }}
                                />
                            </View>

                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between" }}
                            >
                                <TextInput
                                    placeholder="Slope"
                                    value={slope}
                                    onChangeText={setSlope}
                                    keyboardType="numeric"
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#d1d5db",
                                        borderRadius: 6,
                                        padding: 12,
                                        width: "48%",
                                        marginBottom: 16,
                                    }}
                                />
                                <TextInput
                                    placeholder="Rating"
                                    value={rating}
                                    onChangeText={setRating}
                                    keyboardType="numeric"
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#d1d5db",
                                        borderRadius: 6,
                                        padding: 12,
                                        width: "48%",
                                        marginBottom: 16,
                                    }}
                                />
                            </View>
                        </>
                    )}

                    {/* Password */}
                    {/* <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        className="border border-gray-300 rounded-md p-4 mb-4"
                    /> */}

                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#d1d5db",
                            borderRadius: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 16,
                            height: 52,
                            marginBottom: 16,
                        }}
                    >                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            style={{ flex: 1 }}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={18}
                                color="#9ca3af"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Sign Up */}
                    <TouchableOpacity
                        className="py-4 rounded-md items-center mt-4"
                        style={{ backgroundColor: "#8bc34a" }}
                        onPress={handleSignup}
                    >
                        <Text className="text-white font-bold text-lg" >Sign Up</Text>
                    </TouchableOpacity>

                    {/* Login */}
                    <Text className="text-center mt-4 text-gray-500">
                        Already have an account?{" "}
                        <Text
                            style={{ color: "#8bc34a", fontWeight: "bold" }}
                            onPress={() => router.push("/login")}
                        >
                            Login
                        </Text>
                    </Text>
                </View>
            </ScrollView>

            {/* Course Modal */}
            <Modal visible={courseModal} transparent animationType="slide">
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            margin: 20,
                            borderRadius: 10,
                            padding: 20,
                        }}
                    >
                        {courses.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{ padding: 15 }}
                                onPress={() => {
                                    setCourse(item);
                                    setCourseModal(false);
                                }}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            onPress={() => setCourseModal(false)}
                            style={{ padding: 15 }}
                        >
                            <Text style={{ color: "red" }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
}