import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Gear extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Gear</Text>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b60915"
  },
  title: {
    fontSize: 45,
    fontWeight: "500"
  },
  topContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
