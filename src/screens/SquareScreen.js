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
import ColorCounter from "../components/ColorCounter";

const COLOR_INCEAMENT = 15;

const reducer = (state, action) => {
  // state === {red:number, gree:number, blue:number}
  //action === {colorToChange: 'red} || 'green' || 'blue', amount:15 || -15}
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //dspatch = run my reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", amount: COLOR_INCEAMENT });
        }}
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCEAMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCEAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCEAMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCEAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCEAMENT })
        }
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
