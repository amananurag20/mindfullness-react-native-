import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { playerStyles } from "../styles/player.styles";

interface DurationModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setDuration: (value: number) => void;
  setTimeLeft: (value: number) => void;
  playSound: () => void;
}

const DurationModal = ({
  showModal,
  setShowModal,
  setDuration,
  setTimeLeft,
  playSound,
}: DurationModalProps) => {
  const durations = [5, 10, 15, 20, 30, 60];

  return (
    <Modal animationType="fade" transparent visible={showModal}>
      <View style={playerStyles.modalContainer}>
        <View style={playerStyles.modalContent}>
          <Text style={playerStyles.modalTitle}>Set Timer Duration</Text>
          {durations.map((mins) => (
            <TouchableOpacity
              key={mins}
              style={playerStyles.durationButton}
              onPress={() => {
                setDuration(mins);
                setTimeLeft(mins * 60);
                setShowModal(false);
                playSound();
              }}
            >
              <Text style={playerStyles.durationButtonText}>
                {mins} Minutes
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default DurationModal;
