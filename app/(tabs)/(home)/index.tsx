import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { getCatList } from "@api/get-cat-list";
import CatCard from "@components/cat-card";
import { CatDataType } from "shared/types/cat-type";
import SkeletonCard from "@components/skeleton-card";

const Page = () => {
  const [isLoading, setIsLoadig] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(true);
  const [catDataList, setCatDataList] = useState<CatDataType[]>();
  const [page, setPage] = useState<number>(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCatList({ page: 0 })
      .then((response) => {
        response ? setCatDataList(response) : null;
      })
      .finally(() => {
        setRefreshing(false);
        setPage(0);
      });
  }, []);

  const onLoadMore = useCallback(() => {
    getCatList({ page: page + 1 }).then((response) => {
      console.log(JSON.stringify(response, null, 2));
      response ? setCatDataList((prev) => prev?.concat(response)) : null;
      setPage((prev) => prev + 1);
    });
  }, [page]);

  useEffect(() => {
    const start = async () => {
      try {
        await onRefresh();
        setIsLoadig(false);
      } catch (e) {
        console.log(e);
      }
    };
    start();
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
            renderItem={({ item, index }) => (
              <View className="w-full p-1.5">
                <CatCard {...item} index={index} />
              </View>
            )}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.6}
            estimatedItemSize={100}
            numColumns={1}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ListFooterComponentStyle={{ paddingVertical: 32 }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => !refreshing && onRefresh()}
                tintColor="white"
              />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Page;
