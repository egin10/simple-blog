import React, { Component, Fragment } from "react";
import logo from "../../reactjs.png";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>HELLO WORLD! <span role="img" aria-label="Bye-Bye">👋🏻</span> <br /> How are you? <span role="img" aria-label="Boy-Laptop">👨‍💻</span></p>
        </header>
      </Fragment>
    );
  }
}
