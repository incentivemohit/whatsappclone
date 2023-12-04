import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { PlusSmallIcon } from "react-native-heroicons/solid";
import { UserCircleIcon } from "react-native-heroicons/solid";
import * as ImagePicker from "expo-image-picker";
import ImageComponent from "../components/ImageComponent";

export default function Register() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileno, setMobileNo] = useState();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const handlePhoneNo = ()=>{

    let updatedNo = mobileno.toString()
    
    if(updatedNo.length>10){
      alert("More than 10 digits are not allowed")
      return
    }
    setMobileNo(parseInt(updatedNo))

  }
  return (
    <>
      <View className="flex-1 flex-col items-center">
        <View className="flex-col justify-center items-center w-5/6 pt-14 gap-y-2">
          <View className="relative">
            {selectedImage ? (
              <ImageComponent w={130} h={130} photo={selectedImage} />
            ) : (
              <UserCircleIcon size={130} color={"gray"} />
            )}
            <View className="bg-green-700 rounded-full absolute right-2 bottom-1">
              <PlusSmallIcon
                size={45}
                color={"white"}
                onPress={pickImageAsync}
              />
            </View>
          </View>

          <View className="w-full">
            <TextInput
              keyboardType="numeric"
              onChangeText={handlePhoneNo}
              value={mobileno}
              placeholder="Enter Your Mobile Number"
              className="bg-white py-2 px-6 rounded-3xl"
            />
            <TouchableOpacity className="my-2 ">
              <Text className="bg-blue-700 text-white  text-center rounded-3xl py-3 font-semibold">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
