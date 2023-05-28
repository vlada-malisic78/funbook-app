import { View, Text } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import ListOfAvatars from "../components/ListOfAvatars";
import ListOfCards from "../components/ListOfCards";

export default function Feed() {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: headerHeight + 20, paddingHorizontal: 20 }}
    >
      <View>
        <ListOfAvatars />
        <ListOfCards />
      </View>
    </SafeAreaView>
  );
}
