import React, { Component } from "react";

export default class App1 extends Component {
  data = ["a", "b", c];
  renderHtML = () => {
    const abc = this.data.map((letter) => {
      return letter;
    });
    return abc;
  };
  render() {
    return (
      <div>
        {this.renderHtML()}
        123
      </div>
    );
  }
}
