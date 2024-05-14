import { SafeAreaView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Breed } from "shared/types/cat-type";
import { useEffect, useState } from "react";
const Page = () => {
  const { detail } = useLocalSearchParams<{
    detail: string;
  }>();
  const [data, setData] = useState<Breed>(JSON.parse(detail));

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  return (
    <SafeAreaView className="flex-1 bg-indigo-300">
      <View className="flex-1 p-6">
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Page;
