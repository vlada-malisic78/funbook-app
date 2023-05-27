import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Conversations() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text>Conversations</Text>
      </View>
    </SafeAreaView>
  );
}
