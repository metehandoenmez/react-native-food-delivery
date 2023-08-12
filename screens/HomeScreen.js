import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";

let featured = {
  title: "Öne Çıkan Restoranlar",
  description: "Bölgenizdeki en iyi restoranları keşfedin.",
  restaurants: [
    {
      name: "Papa John's",
      description: "Pizza, Fast Food, İtalya Mutfağı",
      image: require("../assets/images/pizza.png"),
      stars: 5,
      reviews: "12.4 bin",
      category: "Pizza",
      address: "Altunizade, İstanbul",
      dishes: [
        {
          name: "Margarita",
          description: "Domates sos, mozzarella peyniri",
          price: 129.99,
          image: require("../assets/images/margarita.png"),
        },
        {
          name: "Karışık Pizza",
          description:
            "Domates sos, mozzarella peyniri, sucuk, sosis, mantar, zeytin, mısır, biber",
          price: 139.99,
          image: require("../assets/images/mixPizza.png"),
        },
        {
          name: "Üç Peynirli Pizza",
          description: "Domates sos, mozzarella, kaşar, beyaz peynir",
          price: 134.99,
          image: require("../assets/images/cheesePizza.png"),
        },
      ],
    },
    {
      name: "McDonald's",
      description: "Burgers, Fast Food, Amerikan Mutfağı",
      image: require("../assets/images/burger.png"),
      stars: 4,
      reviews: "15.3 bin",
      category: "Hamburger",
      address: "Kısıklı, Üsküdar",
      dishes: [
        {
          name: "Margarita",
          description: "Domates sos, mozzarella peyniri",
          price: 129.99,
          image: require("../assets/images/margarita.png"),
        },
        {
          name: "Karışık Pizza",
          description:
            "Domates sos, mozzarella peyniri, sucuk, sosis, mantar, zeytin, mısır, biber",
          price: 139.99,
          image: require("../assets/images/mixPizza.png"),
        },
        {
          name: "Üç Peynirli Pizza",
          description: "Domates sos, mozzarella, kaşar, beyaz peynir",
          price: 134.99,
          image: require("../assets/images/cheesePizza.png"),
        },
      ],
    },
    {
      name: "KFC",
      description: "Chicken, Fast Food, Amerikan Mutfağı",
      image: require("../assets/images/chicken.png"),
      stars: 2,
      reviews: "3.4 bin",
      category: "Tavuk",
      address: "Bağdat Cad., Maltepe",
      dishes: [
        {
          name: "Margarita",
          description: "Domates sos, mozzarella peyniri",
          price: 129.99,
          image: require("../assets/images/margarita.png"),
        },
        {
          name: "Karışık Pizza",
          description:
            "Domates sos, mozzarella peyniri, sucuk, sosis, mantar, zeytin, mısır, biber",
          price: 139.99,
          image: require("../assets/images/mixPizza.png"),
        },
        {
          name: "Üç Peynirli Pizza",
          description: "Domates sos, mozzarella, kaşar, beyaz peynir",
          price: 134.99,
          image: require("../assets/images/cheesePizza.png"),
        },
      ],
    },
  ],
};

export default function HomeScreen() {
  return (
    <SafeAreaView className="relative">
      <StatusBar barStyle="content-dark" />
      <Image
        className="w-full absolute -top-5 opacity-20"
        style={{ height: 120 }}
        source={require("../assets/images/topbackground.png")}
      ></Image>
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search
            height={25}
            width={25}
            stroke="gray"
            className="w-6 h-6 text-gray-400"
          />
          <TextInput placeholder="Restoranlar" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">Üsküdar</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 bg-gray-300 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
