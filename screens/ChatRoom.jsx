import React from 'react'
import { View } from 'react-native'
import ChatRoomFooter from '../components/ChatRoom/ChatRoomFooter'

export default function ChatRoom() {
  return (
    <>
    <View className="flex-1 flex-col justify-end">
      <ChatRoomFooter/>
    </View>
    </>
  )
}
