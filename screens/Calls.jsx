import React from "react";
import PersonCall from "../components/Calls/PersonCall";
import ImageComponent from "../components/ImageComponent";
import { FlatList, Text, View } from "react-native";
import { ArrowDownLeftIcon } from "react-native-heroicons/solid";
import { ArrowUpRightIcon } from "react-native-heroicons/solid";
import { LinkIcon } from "react-native-heroicons/solid";


const list = [
  {
    id: 1,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Mohit",
    time: "5 minutes ago",
    call:<ArrowDownLeftIcon size={13} color={"red"}/>
  },
  {
    id: 2,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Rohan",
    time: "5 minutes ago",
    call:<ArrowUpRightIcon size={13} color={"green"}/>
  },
  {
    id: 3,
    imageIcon: <ImageComponent w={50} h={50} />,
    name: "Pintu",
    time: "5 minutes ago",
    call:<ArrowDownLeftIcon size={13} color={"red"}/>
  },
];

function Calls() {
  return (
    <>
    <View className="flex-row pl-2 gap-x-2 items-center py-2">
<View className="bg-green-700  rounded-full w-fit flex-row items-center justify-center w-12 h-12"><LinkIcon size={18} color={"white"}/></View>
<View>
  <Text className="font-semibold">Create a call link</Text>
  <Text className="text-[12px] text-gray-600">Share a link for your Whatsapp call</Text>
</View>
    </View>
    <Text className="pl-5 py-1 font-semibold">Recent</Text>
      <FlatList
        className="pl-3 pt-2"
        data={list}
        renderItem={({ item }) => (
          <PersonCall
            name={item.name}
            imageIcon={item.imageIcon}
            time={item.time}
            call={item.call}
          />
        )}
      />
    </>
  );
}

export default Calls;
