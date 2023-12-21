import { View, Text, SafeAreaView, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OpenCamera from "./OpenCamera";
import { addData } from "./DetectedTag";

const NewLocation = () => {
  const [Location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView className="mt-20 mx-20">
      <View className="p-5 rounded-full bg-[#14594a] border-2 border-black">
        <Text className="text-5xl text-white font-bold text-center">
          New Location
        </Text>
      </View>
      <View className="mt-32 p-10 items-center rounded-lg bg-[#14594a] border-2 border-black">
        <Text className=" text-4xl text-white font-bold">
          Location Name: {Location}
        </Text>
        <TextInput
          className="p-5 mt-5 text-2xl border-2 border-green text-white"
          placeholder="Enter your Location"
          value={Location}
          onChangeText={(text) => setLocation(text)}
        />

        <View>
          <Text className="mt-10 text-3xl text-white font-bold">
            Date: {date.toLocaleString()}
          </Text>

          {show && (
            <DateTimePicker value={date} mode={mode} onChange={onChange} />
          )}
        </View>
        <View className=" mt-20 items-center ">
          <TouchableOpacity
            className="items-center border-2 bg-green-500"
            onPress={() => {
              navigation.navigate(OpenCamera, {location: Location});
              setLocation("");
            }}
          >
            <Text className="text-5xl p-5 font-bold text-gray-100">
              Start Tagging
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewLocation;
