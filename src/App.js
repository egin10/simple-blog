import React from "react";
import logo from "./reactjs.png";
import "./App.css";
import BlogPostComponent from "./Containers/BlogPost/BlogPostComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Egin10.</p>
        <BlogPostComponent />
      </header>
    </div>
  );
}

export default App;
