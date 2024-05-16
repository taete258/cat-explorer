import { ScrollView, View, Text, Platform } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Breed } from "shared/types/cat-type";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import Animated, {
  FadeInDown,
  FadingTransition,
  ZoomInDown,
} from "react-native-reanimated";
import CustomHeader from "@components/custom-header";
import { StatusBar } from "expo-status-bar";
import TraitsScore from "@components/traits-score";

const Page = () => {
  const { detail } = useLocalSearchParams<{
    detail: string;
  }>();
  const [data, setData] = useState<{ breeds: Breed[]; url: string }>();

  useEffect(() => {
    setData(JSON.parse(detail));
  }, [detail]);

  return (
    <View className="w-full h-full bg-indigo-300">
      <StatusBar style="auto" />
      <CustomHeader />

      <ScrollView className="w-full h-full" bounces={false}>
        <Animated.View entering={FadeInDown.delay(200)}>
          <Image
            source={{ uri: data?.url }}
            className="oject-contain w-full h-[300px] bg-gray-200"
            contentPosition={"top center"}
            cachePolicy="disk"
            contentFit="cover"
            priority="high"
            placeholder={"https://placehold.co/300x300?font=roboto"}
          />
          <View className=" bg-white m-4 p-6 rounded-2xl  space-y-6">
            {/* title */}
            <View className="space-y-1">
              <Text className="text-xl text-indigo-600 font-bold">
                {data?.breeds[0].name}
              </Text>
              {/* tag */}
              <Text className="text-black font-medium">
                {data?.breeds[0]?.temperament}
              </Text>
            </View>

            <View className="h-[1px] bg-slate-400 w-full" />

            {/* Description */}
            <View className="space-y-1">
              <Text className="text-base text-indigo-600 font-medium">
                Description
              </Text>
              <Text className="text-sm text-black font-regular">
                {data?.breeds[0]?.description}
              </Text>
            </View>

            {/* Traits */}
            <View className="space-y-1">
              <Text className="text-base text-indigo-600 font-medium">
                Traits
              </Text>
              <View>
                <TraitsScore label="Lap Cat" score={data?.breeds[0]?.lap} />
                <TraitsScore
                  label="Intelligence"
                  score={data?.breeds[0]?.intelligence}
                />
                <TraitsScore
                  label="Energy Level"
                  score={data?.breeds[0]?.energy_level}
                />
                <TraitsScore
                  label="Grooming Requirements"
                  score={data?.breeds[0]?.grooming}
                />
                <TraitsScore
                  label="Shedding"
                  score={data?.breeds[0]?.shedding_level}
                />
                <TraitsScore
                  label="Good With Children"
                  score={data?.breeds[0]?.child_friendly}
                />
                <TraitsScore
                  label="Good With Stranger"
                  score={data?.breeds[0]?.stranger_friendly}
                />
                <TraitsScore
                  label="Good With Dogs"
                  score={data?.breeds[0]?.dog_friendly}
                />
                <TraitsScore
                  label="Chattiness"
                  score={data?.breeds[0]?.social_needs}
                />
              </View>
            </View>
          </View>
        </Animated.View>
        <View className={`${Platform.OS === "ios" ? "h-20" : "h-16"}`} />
      </ScrollView>
    </View>
  );
};
export default Page;
