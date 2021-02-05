import React, { Component } from "react";
import styled from "styled-components";
import Portal from "../Portal/Portal";
import classes from "./Modal.module.css";
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
`;

export default class Modal extends Component {
  state = {
    acitve: false,
  };
  backDropRef = React.createRef();
  setActiveHandle = (value) => {
    this.setState({ acitve: value });
  };
  render() {
    const { open } = this.props;
    let classNameBackDrop = clases.backd;
    if (open) {
      classNameBackDrop = `${clases.backd} ${clasess.yellow}`;
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
