import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { PhoneIcon } from "react-native-heroicons/solid";

export default function PersonCall({ imageIcon, name, time, call }) {
  return (
    <>
      <View className="flex-row justify-between items-center my-1 pr-6">
        <View className="flex-row gap-x-2 items-center ">
          <View className="border-4 rounded-full border-green-400 ">
            {imageIcon}
          </View>
          <View>
            <Text className="text-[17px]">{name}</Text>
            <View className="flex-row items-center gap-x-1
            
            ">
              <Text>{call}</Text>
              <Text className="text-xs">{time}</Text>
            </View>
          </View>
        </View>
        <PhoneIcon size={22} color={"green"} />
      </View>
    </>
  );
}
