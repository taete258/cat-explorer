import { Tabs } from "expo-router";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
const TabsNavigation = () => {
  useEffect(() => {
    console.log("TabsNavigation mounted");
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "rgb(99 102 241)",
        tabBarInactiveTintColor: "rgb(165 180 252)",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="about-me"
        options={{
          title: "About Me",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info-circle" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigation;
