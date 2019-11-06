import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

export default class Welcome extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/sagar.jpg")}
      >
        <View style={styles.topContainer}>
          {/* <Text style={styles.title}>SDSU CLIMBING</Text> */}
          <Image
            style={{ width: "100%" }}
            source={require("../assets/title.png")}
          ></Image>
        </View>
        <View style={styles.centerContainer}></View>
        <View style={styles.bottomContainer}>
          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={this.props.logIn}>
              <Image source={require("../assets/loginText.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b60915"
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    color: "#b60915"
  },
  topContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  centerContainer: {
    flex: 2
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1
    // paddingRight: "10"
  },
  loginContainer: {
    width: 150,
    flexDirection: "row",
    justifyContent: "center"
  },
  loginText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white"
  },
  background: {
    height: 200,
    width: 100
  }
});
