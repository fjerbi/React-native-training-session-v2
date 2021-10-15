import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";


// I can use this const ImageDetail = (props) => {
    //or i can get rid of props and pass directly the ones i need
const ImageDetail = ({imageSource, title, score}) => {
  return (
    <View>
        <Image source={imageSource}/>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

export default ImageDetail;
