import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const DataAnalysis = () => {
  return (
    <SafeAreaView className="flex justify-center mt-20 mx-20">
      <View className="p-5 rounded-full bg-[#14594a] border-2 border-black">
        <Text className="text-5xl text-white font-bold text-center">
          Data Analysis
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DataAnalysis;
