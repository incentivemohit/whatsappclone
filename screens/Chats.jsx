import React from "react";
import Friend from "../components/Chats/Friend";
import { FlatList } from "react-native";
import ImageComponent from "../components/ImageComponent";

const list = [
  {
    id: 1,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },
  {
    id: 2,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },
  {
    id: 3,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 4,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 5,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 6,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 7,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 8,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 9,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },{
    id: 10,
    icon: <ImageComponent w={50} h={50} />,
    name: "Mohit Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos iusto architecto?",
    time: "5:00 am",
  },
];

export default function Chats() {
  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Friend
            name={item.name}
            icon={item.icon}
            message={item.message}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
