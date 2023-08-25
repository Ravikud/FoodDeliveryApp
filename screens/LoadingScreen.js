import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Goes To Order Screen after 2 secs
    setTimeout(() => {
      navigation.replace("Order");
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <LottieView
        style={{
          height: 260,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
        source={require("../assets/thumbs.json")}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your Order Has Been Recieved
      </Text>
      <LottieView
        style={{
          height: 260,
          width: 300,
          position: "absolute",
          top: 100,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
        source={require("../assets/sparkle.json")}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
