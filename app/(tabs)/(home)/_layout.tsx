import PageHeader from "@components/page-header";
import { Stack } from "expo-router";
import { View, Text } from "react-native";

const HomeScreenLayout = () => {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(165 180 252)",
            },
            headerTitle: (props) => <PageHeader title={props.children} />,
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
