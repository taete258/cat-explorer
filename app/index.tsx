import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getCatList } from "../shared/api/get-cat-list";
import { FlashList } from "@shopify/flash-list";
import CatCard from "../shared/components/cat-card";

export default function Page() {
  const [pokenmonList, setPokenmonList] = useState<CatDataType[]>();
  useEffect(() => {
    try {
      getCatList().then((response) => {
        console.log(JSON.stringify(response, null, 2));
        response ? setPokenmonList(response) : null;
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <FlashList
          data={pokenmonList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CatCard {...item} />}
          estimatedItemSize={100}
          numColumns={1}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}
