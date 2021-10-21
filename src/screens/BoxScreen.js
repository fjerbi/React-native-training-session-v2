import React, { useReducer } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  FlatList,
  ActionSheetIOS,
} from "react-native";
const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}> Child #1</Text>
        <Text style={styles.textTwoStyle}> Child #2</Text>
        <Text style={styles.textThreeStyle}> Child #3</Text>
      </View>

      <View style={styles.parentStyle}>
        <Text style={styles.viewOneStyle}> </Text>
        <Text style={styles.viewTwoStyle}></Text>
        <Text style={styles.viewThreeStyle}></Text>
      </View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },

  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});
