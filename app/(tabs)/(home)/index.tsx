import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { getCatList } from "@api/get-cat-list";
import CatCard from "@components/cat-card";
import { CatDataType } from "shared/types/cat-type";

const Page = () => {
  const [catDataList, setCatDataList] = useState<CatDataType[]>();
  useEffect(() => {
    try {
      getCatList().then((response) => {
        // console.log(JSON.stringify(response, null, 2));
        response ? setCatDataList(response) : null;
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-indigo-300">
      <View className="flex-1">
        <FlashList
          data={catDataList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View className="w-full items-center justify-center p-1.5">
              <CatCard {...item} index={index} />
            </View>
          )}
          estimatedItemSize={100}
          numColumns={1}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ListFooterComponentStyle={{ paddingVertical: 32 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Page;
