import React from "react";
import {  StatusBar, Text, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import ImageComponent from "./ImageComponent";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar />
      <View
        className="flex flex-row justify-between px-3 py-6 items-center"
        style={{ backgroundColor: "#075e54" }}
      >
        <Text className="text-2xl text-white font-bold">WhatsApp</Text>

        <View className="flex flex-row items-center gap-3">
          <MagnifyingGlassIcon size={22} color={"white"} onPress={()=>navigation.navigate("Demo")}/>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <ImageComponent w={31} h={31} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
