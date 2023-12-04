import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import Camera from "../screens/Camera";
import { CameraIcon } from "react-native-heroicons/solid";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: "#075e54",
          },tabBarActiveTintColor:"white",tabBarLabelStyle:{
            fontWeight:"500"
          }}} >
      <Tab.Screen
        name="Camera"
        options={{
          tabBarLabel: "Camera",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <CameraIcon color={color} size={size} />
          ),
          
          tabBarShowIcon: true,
        }}
        component={Camera}
      />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}
