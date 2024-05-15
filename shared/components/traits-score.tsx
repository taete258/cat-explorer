import { View, Text } from "react-native";
import React from "react";

type Props = {
  label: string;
  score: number;
};
const TraitsScore: React.FC<Props> = ({ label, score }) => {
  return (
    <View className="flex-row items-center justify-between my-1">
      <Text className="text-sm font-medium text-gray-600">{label}</Text>

      <View className="flex-row  gap-x-2">
        {new Array(5).fill(0).map((_, index) => (
          <View
            key={index}
            className={`rounded-full h-4 w-4 ${
              index < score ? "bg-indigo-600" : "border border-gray-400"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(TraitsScore);
