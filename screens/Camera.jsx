import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ToastAndroid } from 'react-native';
import { View } from 'react-native'

export default function Camera() {

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT,ToastAndroid.CENTER);
  };
  return (
    <>
    <View className="flex-1 flex-row justify-center bg-black relative">
    <TouchableOpacity className="absolute bottom-14 w-14 h-14 rounded-full bg-red-500" onPress={() => showToast()}></TouchableOpacity>
    </View>
    </>
    
  )
}
