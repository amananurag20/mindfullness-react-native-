import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { meditationListStyles } from "../styles/meditation-list.styles";
import { Meditation } from "../types";

interface MeditationListItemProps {
  item: Meditation;
}

const MeditationListItem = ({ item }: MeditationListItemProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={meditationListStyles.card}
      onPress={() =>
        router.push({
          pathname: "/player",
          params: { meditation: JSON.stringify(item) },
        })
      }
    >
      <Image
        source={item.image}
        style={meditationListStyles.cardImage}
        resizeMode="cover"
      />
      <View style={meditationListStyles.cardContent}>
        <Text style={meditationListStyles.cardTitle}>{item.title}</Text>
        <Text style={meditationListStyles.cardDescription}>
          {item.description}
        </Text>
        <Text style={meditationListStyles.cardDuration}>
          Default duration: {item.duration}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MeditationListItem;
