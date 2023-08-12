import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();

  starsClass = (stars) => {
    if (stars == 5) {
      return "text-green-500";
    } else if (stars == 4) {
      return "text-green-700";
    } else if (stars == 3) {
      return "text-yellow-400";
    } else if (stars == 2) {
      return "text-red-600";
    } else if (stars == 1) {
      return "text-red-400";
    } else {
      return "text-gray-400";
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Restaurant", {
          ...item,
        });
      }}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
      >
        <View
          style={{
            borderColor: themeColors.bgColor(0.2),
          }}
          className={`bg-white mr-6 rounded-[26px] shadow-lg border-2 border-gray-300`}
        >
          <Image
            className="h-36 w-64 rounded-t-3xl"
            source={item.image}
          ></Image>
          <View className="px-3 pb-4 space-y-2">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="w-4 h-4"
              ></Image>
              <Text className="text-xs">
                <Text className={`text-green-700 ${starsClass(item.stars)}`}>
                  {item.stars}
                </Text>
                <Text className="text-gray-700">
                  {" "}
                  ({item.reviews} değerlendirme) ·{" "}
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin height={15} width={15} stroke="gray" />
              <Text className="text-gray-700 text-xs">{item.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
