import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const Page = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-red-400">
        <Text>About Me</Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;
