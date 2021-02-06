import React, { Component } from "react";

export default class App1 extends Component {
  state = {
    a: "hahahah q4faasdfasf",
  };
  data = [01, "b", "c"];
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
        {this.state.a.sub()}
      </div>
    );
  }
}
