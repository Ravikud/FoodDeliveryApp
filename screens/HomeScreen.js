import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";
const HomeScreen = () => {
  const data = hotels;
  return (
    // Search Bar Component
    <ScrollView style={{ marginTop: 50 }}>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search For Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="black" />
      </View>

      {/* Image SliderBox Component */}
      <Carousel />

      {/* Food Items */}
      <FoodTypes />

      {/*Quick Food Component */}
      <QuickFood />

      {/*Filter Component */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 3,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort By Rating</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort By Price</Text>
        </Pressable>
      </View>
      {data.map((item,index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
