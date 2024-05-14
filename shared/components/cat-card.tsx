import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CatCard: React.FC<CatDataType> = ({ breeds, url }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="rounded-2xl w-full h-[10rem] bg-white items-start justify-center space-y-1 overflow-visible"
    >
      <Image
        source={url}
        style={{ width: "100%", height: 180 }}
        className="rounded-t-lg"
        contentPosition="top"
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
    </TouchableOpacity>
  );
};

export default React.memo(CatCard);
