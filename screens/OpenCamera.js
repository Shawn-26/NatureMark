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
import NewTag from "./NewTag";
import StartCapturing from "../components/StartCapturing";

const OpenCamera = ({ route }) => {
  const navigation = useNavigation();
  const imageUri = route.params?.imageUri;
  const location = route.params;

  return (
    <SafeAreaView className=" mx-20">
      <View className="mt-20 pt-20 pb-10 items-center rounded-lg bg-[#14594a] border-2 border-black">
        <View className="p-56 px-72 flex justify-center items-center bg-white">
          {imageUri ? (
            <Image source={{ uri: imageUri }} />
          ) : (
            <Text>Clicked Image Here</Text>
          )}
        </View>
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="mt-10 border-2 bg-green-500"
            onPress={() => navigation.navigate(StartCapturing)}
          >
            <Text className="text-5xl p-5 font-bold text-gray-100">
              Start Capturing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(NewTag, {location: location})}
            className="mt-10 ml-32 border-2 bg-green-500"
          >
            <Text className="text-5xl p-5 font-bold text-gray-100">
              Save Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpenCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
