import React from "react";
import { Image } from "react-native";

export default function ImageComponent({w,h}) {
  return (
    <>
      <Image
        style={{
          width: w,
          height: h,
          
        }}
        className="rounded-full"
        source={require("../assets/images/mkk.jpg")}
      />
    </>
  );
}
