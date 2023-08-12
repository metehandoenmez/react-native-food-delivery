import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

export default function CartIcon() {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="text-white text-lg font-extrabold">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          Sepete Git
        </Text>
        <Text className="text-white text-lg font-extrabold"> 496.50 ₺</Text>
      </TouchableOpacity>
    </View>
  );
}
