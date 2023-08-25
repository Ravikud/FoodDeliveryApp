import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <Pressable onPress={()=>navigation.navigate("Menu1",{
        id:item.id,
        name:item.name,
        image:item.image,
        rating:item.rating,
        time:item.time,
        adress:item.adress,
        cost_for_two:item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu,
      })} style={{ flexDirection: "row"}}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          >
            <FontAwesome
              style={{ position: "absolute", top: 10, right: 10 }}
              name="heart-o"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.time} mins
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "gray", marginTop: 6 }}>
            {item.adress}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,

                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 4,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {item.cost_for_two} for two
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
