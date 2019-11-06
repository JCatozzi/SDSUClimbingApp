import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TabView from "react-native-scrollable-tab-view";
import Gear from "./Gear.js";
import News from "./News.js";
import Trips from "./Trips.js";

export default class PrimaryNav extends Component {
  render() {
    return (
      <TabView
        tabBarUnderlineStyle={{ backgroundColor: "#b60915", height: 2 }}
        tabBarActiveTextColor={"#b60915"}
        style={styles.container}
      >
        <News tabLabel="News"></News>
        <Trips tabLabel="Trips"></Trips>
        <Gear tabLabel="Gear" />
      </TabView>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 25 }
});
