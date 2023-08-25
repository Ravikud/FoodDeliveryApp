import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const FoodItem1 = ({ item }) => {
 const data = [item];
  // const [selected, setSelected] = useState([]);
  return (
    <View>
      {data.map((item, i) => (
        <>
          <Pressable
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center ",
            }}
            key={i}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <AntDesign name="down" size={24} color="black" />
          </Pressable>

          {/* {selected.includes(item.name)
            ? item.items.map((food, index) => (
                <MenuComponent food={food} key={index} />
              ))
            : null} */}
        </>
      ))}
    </View>
  );
};

export default FoodItem1;

const styles = StyleSheet.create({});
