import React from "react";
import { View } from "react-native";
import ImageComponent from "../ImageComponent";
import { Text } from "react-native";
import { VideoCameraIcon } from "react-native-heroicons/solid";
import { PhoneIcon } from "react-native-heroicons/solid";
import { EllipsisVerticalIcon } from "react-native-heroicons/solid";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoomHeader() {
  const navigation = useNavigation()
  return (
    <>
      <View
        style={{ backgroundColor: "#075e54" }}
        className="flex-row items-center justify-between py-3 px-3"
      >
        <View className="flex-row items-center gap-x-2">
          <ArrowLeftIcon size={22} color={"white"}  onPress={()=>navigation.goBack()}/>
          <View>
            <ImageComponent w={38} h={38} />
          </View>
          <Text className="text-white text-lg font-semibold">Mohit</Text>
        </View>
        <View className="flex-row items-center gap-x-4">
          <VideoCameraIcon size={22} color={"white"} />
          <PhoneIcon size={22} color={"white"} />
          <EllipsisVerticalIcon size={22} color={"white"} />
        </View>
      </View>
    </>
  );
}
