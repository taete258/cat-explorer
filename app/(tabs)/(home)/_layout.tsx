import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import { Platform, View } from "react-native";

const HomeScreenLayout = () => {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Home",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(165 180 252)",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="cat-detail/[detail]"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "white",
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

export default HomeScreenLayout;

const StackScreenWithSearchBar: NativeStackNavigationOptions =
  Platform.OS === "ios"
    ? {
        headerLargeTitle: true,
        headerLargeStyle: {
          backgroundColor: "rgb(165 180 252)",
        },
        headerLargeTitleStyle: {
          color: "white",
        },
        headerTintColor: "rgb(99 102 241)",
        headerTransparent: true,
        headerBlurEffect: "prominent",
      }
    : null;
