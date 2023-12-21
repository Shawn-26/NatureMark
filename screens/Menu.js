import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  return (
    <SafeAreaView className="mt-20 mx-20">
      <View
        className=" p-3  rounded-full bg-[#14594a] border-2
          border-black"
      >
        <Text className="text-5xl text-white font-bold text-center">
          ArborTag
        </Text>
        <Text className="text-xl text-white font-semibold text-center">
          By NatureMarkSystemsLLP
        </Text>
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
