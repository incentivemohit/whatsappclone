import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Header from "../components/Header";
import Profile from "../screens/Profile";
import ChatRoom from "../screens/ChatRoom";
import ChatRoomHeader from "../components/ChatRoom/ChatRoomHeader";
import Demo from "../screens/Demo";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        options={{
          header: () => <Header />,
        }}
        component={TabNavigation}
      />

      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          header: () => <ChatRoomHeader />,
        }}
      />
    </Stack.Navigator>
  );
}
