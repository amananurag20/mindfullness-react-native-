import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/home.styles";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission for notifications is not granted!");
      }
    };
    getPermissions();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Peaceful Mind</Text>
      <Text style={styles.subtitle}>
        Begin your journey to mindfulness and inner peace
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/meditation-list")}
      >
        <Text style={styles.buttonText}>Start Meditating</Text>
      </TouchableOpacity>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10M+</Text>
          <Text style={styles.statLabel}>Meditation Minutes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>50K+</Text>
          <Text style={styles.statLabel}>Active Users</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4.8★</Text>
          <Text style={styles.statLabel}>User Rating</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Benefits of Meditation</Text>

      <View style={styles.benefitCard}>
        <Text style={styles.benefitTitle}>Reduced Stress & Anxiety</Text>
        <Text style={styles.benefitText}>
          Regular meditation practice helps lower cortisol levels and promotes
          emotional balance
        </Text>
      </View>

      <View style={styles.benefitCard}>
        <Text style={styles.benefitTitle}>Improved Focus</Text>
        <Text style={styles.benefitText}>
          Enhance your concentration and mental clarity through mindful
          practices
        </Text>
      </View>

      <View style={styles.benefitCard}>
        <Text style={styles.benefitTitle}>Better Sleep Quality</Text>
        <Text style={styles.benefitText}>
          Develop better sleep patterns and deeper rest with evening meditation
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Daily Mindfulness Tip</Text>
      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          "Take three deep breaths before responding to stressful situations.
          This simple practice can change your entire day."
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
