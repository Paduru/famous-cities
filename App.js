import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import BostonScreen from "./screens/BostonScreen";
import NewYorkScreen from "./screens/NewYorkScreen";
import SanFranciscoScreen from "./screens/SanFranciscoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Boston" component={BostonScreen} />
        <Stack.Screen name="New-York" component={NewYorkScreen} />
        <Stack.Screen name="San-Francisco" component={SanFranciscoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
