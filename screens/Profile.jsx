import React from "react";
import { View } from "react-native";
import ImageComponent from "../components/ImageComponent";
import { Text } from "react-native";
import { QrCodeIcon } from "react-native-heroicons/solid";
import { UserCircleIcon } from "react-native-heroicons/solid";
import { LockClosedIcon } from "react-native-heroicons/solid";
import { UserGroupIcon } from "react-native-heroicons/solid";
import Bottom from "../components/Profile/Bottom";

export default function Profile() {
  return (
    <>
      <View className="flex-1 ">
        <View className="w-full gap-1 flex flex-col justify-center items-center  ">
          <View className="relative pt-2">
            <ImageComponent w={100} h={100} />
            <View
              className="absolute bottom-0 right-0 rounded-full p-1"
              style={{ backgroundColor: "#075e54" }}
            >
              <QrCodeIcon size={25} color={"white"} />
            </View>
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-2xl font-800">Mohit Kumar</Text>
            <Text className="text-md font-500 text-gray-600">
              +91 7827818240
            </Text>
            <Text className="text-md font-500 text-gray-600">
              I'm useless Person
            </Text>
          </View>
          <View className="flex-row w-full gap-x-3  justify-center items-center pt-2 pb-3 border-b-[0.6px] border-gray-300">
            <View className="bg-white rounded-xl w-24 py-3  flex-col items-center">
              <UserCircleIcon size={25} color={"green"} />
              <Text>Profile</Text>
            </View>
            <View className="bg-white rounded-xl w-24 py-3 flex-col items-center">
              <LockClosedIcon size={25} color={"green"} />
              <Text>Privacy</Text>
            </View>
            <View className="bg-white rounded-xl w-24 py-3 flex-col items-center">
              <UserGroupIcon size={25} color={"green"} />
              <Text>Contacts</Text>
            </View>
          </View>
          <Bottom />
        </View>
      </View>
    </>
  );
}
