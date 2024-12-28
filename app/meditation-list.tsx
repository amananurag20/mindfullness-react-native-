import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { meditationListStyles } from "../styles/meditation-list.styles";
import MeditationListItem from "../components/MeditationListItem";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Notifications from "expo-notifications";
import { meditations } from "../constants/meditation";

const MeditationList = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Please allow notifications.");
      }
    };

    requestPermissions();

    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received:", notification);
      }
    );

    return () => subscription.remove();
  }, []);

  const handleConfirm = (date: Date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const timeString = `${hour % 12 === 0 ? 12 : hour % 12}:${
      minute < 10 ? "0" + minute : minute
    } ${hour >= 12 ? "PM" : "AM"}`;

    setIsDatePickerVisible(false);
    scheduleNotification(timeString, date);
  };

  const handleCancel = () => {
    setIsDatePickerVisible(false);
  };

  const scheduleNotification = async (time: string, date: Date) => {
    const trigger = new Date();
    trigger.setHours(date.getHours());
    trigger.setMinutes(date.getMinutes());
    trigger.setSeconds(0);
    console.log({ time });
    console.log({ trigger });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Meditation Reminder",
        body: `It's time for your daily meditation at ${time}!`,
      },
      trigger,
    });

    alert(`Reminder set for ${time}`);
  };

  return (
    <View style={meditationListStyles.container}>
      {/* Header */}
      <View style={meditationListStyles.header}>
        <Text style={meditationListStyles.title}>All Meditations</Text>
        <TouchableOpacity
          onPress={() => setIsDatePickerVisible(true)}
          style={meditationListStyles.reminderButton}
        >
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={meditationListStyles.reminderButtonText}>
            Set Reminder
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={meditations}
        renderItem={({ item }) => <MeditationListItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={meditationListStyles.list}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        is24Hour={false}
      />
    </View>
  );
};

export default MeditationList;
