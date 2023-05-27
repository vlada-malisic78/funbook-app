import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Favorites() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ paddingTop: headerHeight, flex: 1 }}>
      <View>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}
