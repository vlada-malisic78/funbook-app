import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./surfaces/Login";
import Feed from "./surfaces/Feed";
import Conversations from "./surfaces/Conversations";
import AddPost from "./surfaces/AddPost";
import Favorites from "./surfaces/Favorites";
import Profile from "./surfaces/Profile";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color = "red", size }) => {
            let iconName;

            if (route.name === "Feed") {
              iconName = focused ? "md-home" : "md-home-outline";
            } else if (route.name === "Conversations") {
              iconName = focused ? "chatbox" : "chatbox-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#25ab0",
          tabBarInactiveTintColor: "#000000",
          tabBarShowLabel: false,
          headerTransparent: true,
          headerTitleAlign: "left",
          headerTitleStyle: {
            paddingTop: 140,
            paddingBottom: 40,
            textAlign: "left",
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Conversations" component={Conversations} />
        <Tab.Screen name="AddPost" component={AddPost} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  let [fontsLoaded] = useFonts({ Poppins_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userLoggedIn ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
