import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { View } from 'react-native'
import { PaperAirplaneIcon } from "react-native-heroicons/solid";
import { FaceSmileIcon } from "react-native-heroicons/solid";
import { PaperClipIcon } from "react-native-heroicons/solid";
import { CurrencyRupeeIcon } from "react-native-heroicons/solid";
import { CameraIcon } from "react-native-heroicons/solid";

export default function ChatRoomFooter() {
    const [message,setMessage]= useState("")
  return (
    <>
    <View   className="flex-row pb-3 items-center justify-center px-9 gap-x-1">
    
       <View className="bg-white rounded-3xl flex-row justify-evenly items-center h-fit w-full px-1">
       <FaceSmileIcon size={23} color={"black"} />
       <TextInput value={message} onChangeText={(text)=>setMessage(text)} multiline placeholder='Message' className="pl-2 py-2 w-36 " />
       <View className="flex-row gap-x-2">
       <PaperClipIcon size={23} color={"black"} />
       <CurrencyRupeeIcon size={23} color={"black"} />
       <CameraIcon size={23} color={"black"} />
       </View>
       </View>
        <View className="bg-green-700 rounded-full p-3">
        <PaperAirplaneIcon size={23} color={"white"} />
        </View>
    </View>
    </>
  )
}
