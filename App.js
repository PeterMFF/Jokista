import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { MotiView, MotiText } from "moti";

export default function App() {
  useEffect(() => {
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/start.mp3")
      );
      await sound.playAsync();
    };
    playSound();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/dG2jNwZ.jpeg" }}
      style={styles.container}
    >
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "timing", duration: 1500 }}
      >
        <MotiText style={styles.logo}>Jokista Studios</MotiText>
      </MotiView>

      <Text style={styles.dev}>تطوير: Peter Morcos</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  logo: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "#00e5ff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  dev: {
    position: "absolute",
    bottom: 50,
    color: "#fff",
    fontSize: 16,
  },
});
