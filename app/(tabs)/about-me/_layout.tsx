import PageHeader from "@components/page-header";
import { Stack } from "expo-router";
import { SafeAreaView, View } from "react-native";

const AboutMeScreenLayout = () => {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(165 180 252)",
            },
            headerTitle: () => <PageHeader title={"About Me"} />,
          }}
        />
      </Stack>
    </View>
  );
};

export default AboutMeScreenLayout;
