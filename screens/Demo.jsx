import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'

const list = [1,2,3,4,5,6,7,8,9]

export default function Demo() {

  const renderItem =({item})=>{
    return <View className="flex-1 flex-row justify-center items-center p-2"><Text>{item}</Text></View>
  }

  return (
    <>
   <View className="flex-row items-center">
    
    <FlatList data={list} renderItem={renderItem} numColumns={4}/>
   </View>
    </>)
}
