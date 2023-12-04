import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { PlusSmallIcon } from "react-native-heroicons/solid";
import ImageComponent from "../components/ImageComponent";

const list = [
  {
    id: 1,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Mohit",
  },
  {
    id: 2,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Rohan",
  },
  {
    id: 3,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Pintu",
  },
];

export default function Status() {
  return (
    <>
      <View className="flex-1">
        <View className="flex-row gap-x-3 items-center py-2 pl-3 ">
          <View className="relative">
            <ImageComponent w={50} h={50} />
            <View className="bg-green-700 rounded-full absolute right-0 bottom-0">
              <PlusSmallIcon size={18} color={"white"} />
            </View>
          </View>
          <View>
            <Text className="font-semibold">My status</Text>
            <Text className="text-gray-500">Tap to add status update</Text>
          </View>
        </View>

        <View className="pl-3 py-4 bg-gray-300">
          <Text>Recent Updates</Text>
        </View>

        <FlatList
          className="pl-3 pt-2"
          data={list}
          renderItem={({ item }) => (
            <View className="flex-row gap-x-2 items-center my-1">
              <View className="border-4 rounded-full border-green-400 ">
               
                {item.imageIcon}
             
              </View>
              <View>
                <Text className="text-[16px]">{item.name}</Text>
                <Text className="text-xs">2 min ago</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
