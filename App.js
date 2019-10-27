import React, { Component } from "react";
import Welcome from "./app/Welcome.js";
import PrimaryNav from "./app/PrimaryNav.js";
import { tsParenthesizedType } from "@babel/types";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    });
  };

  renderRoot(ComponentToRender) {
    return <ComponentToRender logIn={this.logIn} />;
  }

  render() {
    const { loggedIn } = this.state;
    return loggedIn ? this.renderRoot(PrimaryNav) : this.renderRoot(Welcome);
  }
}
