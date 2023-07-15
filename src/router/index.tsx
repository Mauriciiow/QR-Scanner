import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Scanner from "../pages/scan";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import QRCodeData from "../pages/QRCodeData";
import { StatusBar } from "expo-status-bar";

export type NativeStackParamList = {
  Home: {};
  Scanner: {};
  Data: { data: string };
};

type StackScreenNavigationProp =
  NativeStackNavigationProp<NativeStackParamList>;
export type StackProps = {
  navigation?: StackScreenNavigationProp;
  route?: RouteProp<
    {
      params: {
        data: string;
        goBack: boolean;
        onSetGoBack: (item: boolean) => void;
      };
    },
    "params"
  >;
};
const Stack = createNativeStackNavigator<NativeStackParamList>();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Data"
          component={QRCodeData}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
