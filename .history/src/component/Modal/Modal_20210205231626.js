import React, { Component } from "react";
import styled from "styled-components";
import Portal from "../Portal/Portal";
import classes from "./Modal.module.css";

export default class Modal extends Component {
  constructor(props) {super()
    this.backDropRef = React.createRef();
  }
  state = {
    acitve: false,
  };
  setActiveHandle = (value) => {
    this.setState({ acitve: value });
  };
  componentDidMount() {
    this.backDropRef.current.addEventListener("click", this.props.onClose);
  }
  render() {
    const { open } = this.props;
    let classNameBackDrop = classes.backDrop;
    if (open) {
      classNameBackDrop = `${classes.backDrop} ${classes.active}`;
    }
    return (
      <React.Fragment>
        {(open || this.state.acitve) && (
          <Portal className="modal-portal">
            <div className={classNameBackDrop} ref={this.backDropRef}>
              <div className={classes.content}>{this.props.children}</div>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}
