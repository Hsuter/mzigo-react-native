import { ScrollView } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Input } from "@rneui/base";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigator/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const tw = useTailwind();

  const [input, setInput] = useState<string>("");

  const navigation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by cutomer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
