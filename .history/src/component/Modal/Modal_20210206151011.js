import React, { Component } from "react";
import styled from "styled-components";
import Portal from "../Portal/Portal";
import classes from "./Modal.module.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.backDropRef = React.createRef();
  }
  state = {
    acitve: false,
  };
  setActiveHandle = (value) => {
    this.setState({ acitve: value });
  };
  componentDidMount() {
    // this.backDropRef.current.addEventListener("click", this.props.onClose);
  }
  render() {
    console.log(document.activeElement);
    if (this.backDropRef.current) {
      this.backDropRef.current.addEventListener("click", this.props.onClose);
    }
    const { open } = this.props;
    let classNameBackDrop = classes.backDrop;
    if (open) {
      classNameBackDrop = `${classes.backDrop} ${classes.active}`;
      // window.setTimeout(() => {
      //   document.activeElement.blur();
      // }, 100);
    }else{
      classNameBackDrop={classes.backDrop}
    }

    return (
      <React.Fragment>
        {(open || this.state.acitve) && (
          <Portal className="modal-portal">
            <div className={classNameBackDrop} ref={this.backDropRef} onClick={this.props.onClose}>
              <div className={classes.modal_content}>{this.props.children}</div>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}
