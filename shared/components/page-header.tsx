import { View, Text } from "react-native";
import React from "react";
type Props = {
  title: string;
};
const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <View className="flex-1 flex-row">
      <Text className="text-2xl font-bold text-white">{title}</Text>
    </View>
  );
};

export default React.memo(PageHeader);
