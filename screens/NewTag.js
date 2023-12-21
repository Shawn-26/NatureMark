import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DetectedTag from "./DetectedTag";

const NewTag = ({ route }) => {
  const navigation = useNavigation();
  const location = route.params;
  return (
    <SafeAreaView className="mx-20">
      <View className="mt-20 pt-20 pb-10 items-center rounded-lg bg-[#14594a] border-2 border-black">
        <View className="p-56 px-72 flex justify-center items-center bg-white">
          <Text className="text-4xl">Scan NFC Tag Here</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(DetectedTag, {location: location});
          }}
          className="mt-10 items-center border-2 bg-green-500"
        >
          <Text className="text-5xl p-5 font-bold text-gray-100">
            Capture NFC Tag
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewTag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
