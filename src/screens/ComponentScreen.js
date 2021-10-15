import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = [123,456]
  return (
    <View>
      <Text style={styles.textStyle}>This is a compnent screen</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
  },
});

export default ComponentScreen;
