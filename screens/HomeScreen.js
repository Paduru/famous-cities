import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text> Famous Cities </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Boston");
        }}
      >
        <Text> Boston </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("San-Francisco");
        }}
      >
        <Text> San Francisco </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("New-York");
        }}
      >
        <Text> New York City </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
