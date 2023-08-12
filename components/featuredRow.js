import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({ title, restaurants, description }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="semibold" style={{ color: themeColors.text }}>
            Tümünü Gör
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard item={restaurant} key={index}></RestaurantCard>
          );
        })}
      </ScrollView>
    </View>
  );
}
