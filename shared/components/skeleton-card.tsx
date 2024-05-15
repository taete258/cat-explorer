import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const SkeletonCard: React.FC<{ total: number }> = ({ total }) => {
  const opacity = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.3, {
          duration: 1000,
        }),
        withTiming(0.6, {
          duration: 1000,
        })
      ),
      Infinity,
      true
    );
  }, []);

  return (
    <ScrollView className="w-full space-y-2" scrollEnabled={false}>
      {new Array(total).fill(0).map((_, index) => (
        <View
          key={index}
          className="rounded-2xl w-full h-[10rem] bg-white items-start justify-center space-y-1 overflow-visible"
        >
          <Animated.View
            className="rounded-t-2xl h-[180px] w-full bg-gray-400"
            style={animatedStyle}
          />

          <View className="p-4 w-full space-y-2">
            <Animated.View
              className="rounded-lg bg-gray-400 w-[60%] h-4"
              style={animatedStyle}
            />
            <Animated.View
              className="rounded-lg bg-gray-400 w-[45%] h-3"
              style={animatedStyle}
            />
            <Animated.View
              className="rounded-lg bg-gray-400 w-[40%] h-3"
              style={animatedStyle}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default React.memo(SkeletonCard);
