import { Stack } from "expo-router";
import { SafeAreaView, View } from "react-native";

const AboutMeScreenLayout = () => {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "About Me",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(165 180 252)",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
      </Stack>
    </View>
  );
};

export default AboutMeScreenLayout;
