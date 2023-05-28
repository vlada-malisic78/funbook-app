import { View, Text, Image, FlatList } from "react-native";
import React from "react";

const arrayOfImages = [
  { id: 1, url: require("../assets/avatars/1.png") },
  { id: 5, url: require("../assets/avatars/5.png") },
  { id: 2, url: require("../assets/avatars/2.png") },
  { id: 3, url: require("../assets/avatars/3.png") },
  { id: 4, url: require("../assets/avatars/4.png") },
  { id: 6, url: require("../assets/avatars/6.png") },
  { id: 7, url: require("../assets/avatars/7.png") },
  { id: 8, url: require("../assets/avatars/8.png") },
  { id: 9, url: require("../assets/avatars/9.png") },
  { id: 10, url: require("../assets/avatars/10.png") },
  { id: 11, url: require("../assets/avatars/11.png") },
  { id: 12, url: require("../assets/avatars/12.png") },
];

export default function ListOfCards() {
  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 288,
          borderRadius: 20,
          marginBottom: 32,
        }}
        source={item.url}
      />
    );
  };
  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
