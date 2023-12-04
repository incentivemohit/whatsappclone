import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
export default function Friend({icon,name,message,time}) {
  const navigation = useNavigation()
  
  return (
    <>
    <TouchableOpacity className="flex flex-row items-center gap-3  px-2 py-3" style={{width:`${windowWidth}`}} onPress={()=>navigation.navigate('ChatRoom')}>
       <View>
       {icon}
       </View>
        <View style={{width:windowWidth-90}} >
            <View className="flex flex-row justify-between items-center">
                <Text className="font-semibold text-lg"  >{name} </Text>
                <Text className="text-[12px] font-semibold text-gray-500">{time}</Text>
            </View>
            <View className="flex-row justify-between">
            <Text ellipsizeMode='tail' numberOfLines={1} className="text-gray-500 text-[13px] font-semibold">{message}</Text>
            <Text className="text-[12px] bg-green-600 text-white rounded-full px-[2.6px]">23</Text>
            </View>
        </View>
    </TouchableOpacity>
    </>
  )
}
