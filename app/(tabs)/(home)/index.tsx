import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { getCatList } from "@api/get-cat-list";
import CatCard from "@components/cat-card";
import { CatDataType } from "shared/types/cat-type";
import SkeletonCard from "@components/skeleton-card";

const Page = () => {
  const [isLoading, setIsLoadig] = useState<boolean>(true);
  const [catDataList, setCatDataList] = useState<CatDataType[]>();

  useEffect(() => {
    try {
      getCatList()
        .then((response) => {
          response ? setCatDataList(response) : null;
        })
        .finally(() => {
          setIsLoadig(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-indigo-300">
      <View className="flex-1">
        {isLoading ? (
          <View className="px-4 w-full">
            <SkeletonCard total={3} />
          </View>
        ) : (
          <FlashList
            data={catDataList}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
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
        )}
      </View>
    </SafeAreaView>
  );
};
export default Page;
