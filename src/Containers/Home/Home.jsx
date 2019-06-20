import React, { Component, Fragment } from "react";
import logo from "../../reactjs.png";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Egin10.</p>
        </header>
      </Fragment>
    );
  }
}
