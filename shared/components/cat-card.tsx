import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const CatCard: React.FC<CatDataType> = ({ breeds, url }) => {
  return (
    <View className="rounded-md w-full min-h-[8rem] bg-white p-4 ">
      <Image
        source={url}
        style={{ width: 80, height: 80 }}
        className="rounded-full"
      />
      <Text>{breeds[0]?.name}</Text>
    </View>
  );
};

export default React.memo(CatCard);
