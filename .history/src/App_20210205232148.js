import React, { Component } from "react";
// import ReactDom from 'react-dom';

import "./App.css";
import Modal from "./component/Modal/Modal";

class App extends Component {
  state = {
    isOpen: false,
    isLocked: true,
    isLockedOpen: true,
  };
  isOpenHandler = (value) => {
    // alert("hh");
    console.log(value);
    this.setState({ isOpen: value });
  };
  isLockedOpenHandler = (value) => {
    this.setState({ isLockedOpen: value });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.isOpenHandler(true);
          }}
        >
          Open Modal
        </button>
        <button
          onClick={() => {
            this.isLockedOpenHandler(true);
          }}
        >
          Open Locked Modal
        </button>
        <Modal
          onClose={() => {
            this.isOpenHandler(false);
          }}
          open={this.state.isOpen}
        >
          <p>Hello everyone</p>
          <h1>Have a good day!</h1>
          <p style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                this.isOpenHandler(false);
              }}
            >
              Close
            </button>
          </p>
        </Modal>
      </div>
    );
  }
}

export default App;
