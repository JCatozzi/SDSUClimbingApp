import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNews } from "../services/newsService";

export default class News extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => (createNews("good news"), test())}>
            <Text style={styles.title}>News</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}

function test() {
  console.log("test");
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
