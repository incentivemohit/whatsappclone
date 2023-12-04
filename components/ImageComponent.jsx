import React from "react";
import { Image } from "react-native";

export default function ImageComponent({w,h,photo}) {
  return (
    <>
      <Image
        style={{
          width: w,
          height: h,
          
        }}
        className="rounded-full"
        source={{uri:photo}}
      />
    </>
  );
}
