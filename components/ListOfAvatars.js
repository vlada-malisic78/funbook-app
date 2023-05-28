import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import ListHeaderComponent from "./ListHeaderComponent";

const arrayOfAvatars = [
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

export default function ListOfAvatars() {
  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: 50,
          height: 50,
          marginBottom: 32,
          marginRight: 20,
          borderRadius: 50,
        }}
        source={item.url}
      />
    );
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <FlatList
        data={arrayOfAvatars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ListHeaderComponent={<ListHeaderComponent />}
      />
    </View>
  );
}
