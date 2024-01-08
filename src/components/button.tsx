import React from "react";
import {TouchableOpacity, Text, Button, Touchable, Pressable, GestureResponderEvent} from "react-native";


interface ButProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

export function But({ text, onPress }: ButProps)  {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className='bg-[#03C95D] rounded-full text-center w-[151] h-[53] text-white text-[20px] leading-[53px]'>{text}</Text>
    </TouchableOpacity>
  );
}