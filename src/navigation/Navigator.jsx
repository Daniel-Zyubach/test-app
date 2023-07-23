import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

import { AssortmentScreen } from "../screens/AssortmentScreen";
import { DetailsScreen } from "../screens/DetailsScreen";
import { EScreens } from "./screens";

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={EScreens.ASSORTMENT} component={AssortmentScreen} />
        <Stack.Screen name={EScreens.DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
