import React from "react";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { KeyIcon } from "react-native-heroicons/solid";
import { PencilIcon } from "react-native-heroicons/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/solid";
import { GlobeAltIcon } from "react-native-heroicons/solid";
import { CircleStackIcon } from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/solid";

const list = [
  {
    id: 1,
    icon: <KeyIcon size={23} color={"gray"} />,
    title: "Account",
    subTitle: "Security notifications, change number",
  },
  {
    id: 2,
    icon: <PencilIcon size={23} color={"gray"} />,
    title: "Update",
    subTitle: "Create, edit, profile photo",
  },
  {
    id: 3,
    icon: <ChatBubbleOvalLeftEllipsisIcon size={23} color={"gray"} />,
    title: "Chats",
    subTitle: "Theme, wallpapers, chat history",
  },
  {
    id: 4,
    icon: <BellIcon size={23} color={"gray"} />,
    title: "Notifications",
    subTitle: "Message, group & call tones",
  },
  {
    id: 5,
    icon: <CircleStackIcon size={23} color={"gray"} />,
    title: "Storage and data",
    subTitle: "Network usage, auto-download",
  },
  {
    id: 6,
    icon: <GlobeAltIcon size={23} color={"gray"} />,
    title: "App language",
    subTitle: "English (device's language)",
  },
  {
    id: 7,
    icon: <QuestionMarkCircleIcon size={23} color={"gray"} />,
    title: "Help",
    subTitle: "Help center, contact us, privacy policy",
  },
];

export default function Bottom() {
  return (
    <>
      <View className="w-full">
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View className="flex-row gap-4 py-2 pl-6 items-center">
              <View>{item.icon}</View>
              <View>
                <Text className="text-lg">{item.title}</Text>
                <Text className="text-md text-gray-500">{item.subTitle}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}
