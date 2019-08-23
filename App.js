import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Audio } from "expo-av";

import logo from "./assets/logo.png";

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
  10: "#EA7773"
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
  playSound = async Number => {
    const SoundObject = new Audio.Sound();
    try {
      let path = soundList[Number];
      await SoundObject.loadAsync(path);
      await SoundObject.playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            SoundObject.unloadAsync();
          }, playbackStatus.playbackDurationMillis);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View styel={styles.gridContainer}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[1] }
              ]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[1] }
              ]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[1] }
              ]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 20
  },
  rowContainer: {
    flexDirection: "row"
  }
});
