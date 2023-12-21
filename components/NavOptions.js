import {
  View,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "New Location",
    image: "https://hmp.me/d84h",
    screen: "NewLocation",
  },
  {
    id: "456",
    title: "Data Curation",
    image: "https://hmp.me/d9ck",
    screen: "DataCuration",
  },
  {
    id: "789",
    title: "Data Analysis",
    image: "https://hmp.me/d80l",
    screen: "DataAnalysis",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="rounded-2xl p-4 pt-10 pb-10 bg-[#14594a] m-10 mt-32 w-76"
        >
          <View className="items-center">
            <Image
              style={{ width: 240, height: 240, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-10 text-4xl font-bold text-white`}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
