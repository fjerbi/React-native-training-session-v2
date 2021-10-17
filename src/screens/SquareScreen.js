import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Image, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCEAMENT= 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);


  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCEAMENT)}
        onDecrease={() => setRed(red - COLOR_INCEAMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCEAMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCEAMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCEAMENT)}
        onDecrease={() => setGreen(green - COLOR_INCEAMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;
