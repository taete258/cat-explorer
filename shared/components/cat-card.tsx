import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { CatDataType } from "shared/types/cat-type";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import { router } from "expo-router";
const CatCard: React.FC<CatDataType & { index: number }> = ({
  breeds,
  url,
  index,
}) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(100 * index)}
      className="rounded-2xl w-full h-[10rem] bg-white items-start justify-center space-y-1 overflow-visible"
    >
      <Pressable
        className="w-full h-full"
        onPress={() => {
          router.navigate({
            pathname: "/cat-detail/[detail]",
            params: { detail: JSON.stringify({ breeds, url }) },
          });
        }}
      >
        <Image
          source={{ uri: url }}
          style={{ width: "100%", height: 180 }}
          className="rounded-t-lg"
          cachePolicy="disk"
          recyclingKey={index.toString()}
        />
        <View className="p-4">
          <Text
            className="text-lg font-semibold text-indigo-600"
            numberOfLines={2}
          >
            {breeds[0]?.name}
          </Text>

          <Text className="text-sm font-medium text-black" numberOfLines={2}>
            {breeds[0]?.temperament}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default React.memo(CatCard);
