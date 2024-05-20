import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import * as Linking from "expo-linking";

const Page = () => {
  const [assets] = useAssets([require("/shared/images/profile-pic.jpg")]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white p-6 gap-y-6">
        {assets?.length > 0 && (
          <Image
            source={assets[0]}
            className="w-40 h-40 rounded-full border-4 border-indigo-400  mx-auto "
          />
        )}
        <Text>
          Hi, My name is Ratchanon Pheungta,But you can call me Tae, I'm a
          passionate Front-End Web Developer and Mobile Developer based in
          Thailand. With a Bachelor's degree in Software Engineering from
          Burapha University, which I obtained in 2020, I have honed my skills
          in crafting exceptional digital experiences. From building intuitive
          and responsive web interfaces to developing seamless mobile
          applications, I thrive on combining technical expertise with creative
          problem-solving to deliver engaging and user-friendly solutions.
        </Text>

        <Text>
          Now, I am open to new collaborations or work where I can contribute
          and grow. Connect with me.
        </Text>

        <Pressable
          className=" p-4 bg-indigo-400 rounded-lg w-full"
          onPress={() =>
            Linking.openURL(
              "https://portfolio-git-main-taetaew42gmailcoms-projects.vercel.app/"
            )
          }
        >
          <Text className="text-white text-lg font-bold text-center">
            Go To My Portfolio
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Page;
