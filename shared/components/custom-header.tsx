import { View, Text, Pressable, Platform } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex-row  justify-between z-10 absolute">
      <Pressable
        className={`items-center justify-center rounded-full bg-white h-12 w-12 left-4 top-14 shadow-lg `}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome
          name="arrow-left"
          color={"rgb(99 102 241)"}
          size={22}
          className="m-auto"
        />
      </Pressable>
    </View>
  );
};

export default React.memo(CustomHeader);
