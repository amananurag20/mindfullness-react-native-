import React from "react";
import { Stack } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { layoutStyles as styles } from "@/styles/layout.styles";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Peaceful Mind" }} />
        <Stack.Screen
          name="meditation-list"
          options={{ title: "Meditations" }}
        />
        <Stack.Screen name="player" options={{ title: "Player" }} />
      </Stack>
    </>
  );
}
