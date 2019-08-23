import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Audio } from "expo";

const listBackgroundColors = {
  1: "#EAF0F1",
  2: "#E74292",
  3: "#01CBC6",
  4: "#BB2CD9",
  5: "#EAF0F1",
  6: "#8B78E6",
  7: "#00CCCD",
  8: "#1287A5",
  9: "#EA7773",
  10: ""
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spanish Number App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
