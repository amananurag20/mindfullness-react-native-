import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { playerStyles } from "../styles/player.styles";
import { Meditation } from "../types";
import { audioFiles } from "../constants/audio";
import DurationModal from "../components/DurationModal";

const Player = () => {
  const { meditation } = useLocalSearchParams<{ meditation: string }>();
  const meditationData: Meditation = JSON.parse(meditation);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    let timer = null;

    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft <= 0) {
      pauseSound();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stopAsync().then(() => sound.unloadAsync());
        setSound(null);
      }
    };
  }, [sound, meditation]);

  const playSound = async () => {
    try {
      if (sound) {
        await sound.playAsync();
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          audioFiles[meditationData.id],
          { shouldPlay: true, isLooping: true }
        );
        setSound(newSound);
        await newSound.playAsync();
      }
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound) await sound.pauseAsync();
      setIsPlaying(false);
    } catch (error) {
      console.error("Error pausing sound:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={playerStyles.scrollContainer}>
      <DurationModal
        showModal={showModal}
        setShowModal={setShowModal}
        setDuration={setDuration}
        setTimeLeft={setTimeLeft}
        playSound={playSound}
      />
      <View style={playerStyles.playerCard}>
        <Image
          source={meditationData.image}
          style={playerStyles.cardImage}
          resizeMode="cover"
        />
        <Text style={playerStyles.title}>{meditationData.title}</Text>
        <Text style={playerStyles.description}>
          {meditationData.description}
        </Text>
        <Text style={playerStyles.timer}>
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </Text>
        <View style={playerStyles.playPauseContainer}>
          <TouchableOpacity
            style={playerStyles.playButton}
            onPress={isPlaying ? pauseSound : playSound}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={30}
              color="#ffffff"
            />
          </TouchableOpacity>
          <Text style={playerStyles.playPauseText}>
            {isPlaying ? "Pause" : "Play"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Player;
