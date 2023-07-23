import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { EScreens } from "../navigation/screens";

export const AssortmentScreen = () => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate(EScreens.DETAILS);
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToDetails}>
        <Text>Assortment</Text>
      </TouchableOpacity>
    </View>
  );
};
