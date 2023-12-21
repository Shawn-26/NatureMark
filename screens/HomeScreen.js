import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="">
      <View className="mt-20 flex-1 justify-center items-center">
        <Animatable.Image
          className="h-auto w-auto"
          source={require("./LogoGears.gif")}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(Menu)}>
        <View
          className="m-10 mx-20 p-3 rounded-full bg-[#14594a] border-2
          border-black"
        >
          <Text className="text-5xl text-white font-bold text-center">
            ArborTag
          </Text>
          <Text className="text-xl text-white font-semibold text-center">
            By NatureMarkSystemsLLP
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
