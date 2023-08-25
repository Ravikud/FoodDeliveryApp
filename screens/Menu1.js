import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Menu1 = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View
        style={{
          height: 300,
          backgroundColor: "#B0C4DE",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          margin:10
        }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="search1" size={24} color="black" />
            <Text>Search</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu1;

const styles = StyleSheet.create({});
