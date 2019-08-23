import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

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
  10: "#EA9973"
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
        .then(PlaybackStatus => {
          setTimeout(() => {
            SoundObject.unloadAsync();
          }, PlaybackStatus.playableDurationMillis);
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
        <Image style={styles.logo} source={logo} />
        <ScrollView styel={styles.gridContainer}>
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
                { backgroundColor: listBackgroundColors[2] }
              ]}
              onPress={() => {
                this.playSound("two");
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[3] }
              ]}
              onPress={() => {
                this.playSound("three");
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[4] }
              ]}
              onPress={() => {
                this.playSound("four");
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[5] }
              ]}
              onPress={() => {
                this.playSound("five");
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[6] }
              ]}
              onPress={() => {
                this.playSound("six");
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[7] }
              ]}
              onPress={() => {
                this.playSound("seven");
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[8] }
              ]}
              onPress={() => {
                this.playSound("eight");
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[9] }
              ]}
              onPress={() => {
                this.playSound("nine");
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[10] }
              ]}
              onPress={() => {
                this.playSound("ten");
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    fontSize: 20
  }
});
