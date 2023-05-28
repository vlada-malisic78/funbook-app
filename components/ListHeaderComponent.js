import { View, Text } from "react-native";
import React from "react";

export default function ListHeaderComponent() {
  return (
    <View>
      <Text
        style={{
          width: 50,
          height: 50,
          color: "#333",
          borderRadius: 50,
          textAlign: "center",
          lineHeight: 50,
          fontSize: 22,
          paddingVertical: 0,
          marginRight: 20,
          fontWeight: 600,
          backgroundColor: "#ddd",
        }}
      >
        +
      </Text>
    </View>
  );
}
