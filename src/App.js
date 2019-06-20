import React from "react";
import "./App.css";
import BlogPost from "./Containers/BlogPost/BlogPost";
import Home from "./Containers/Home/Home";
import FormPost from "./Containers/FormPost/FormPost";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <BlogPost />
        <FormPost />
      </div>
      <footer>
        <hr />
        <p>Copyright&copy;2019.<a href="https://github.com/egin10" target="_blank" rel="noopener noreferrer">egin10</a></p>
      </footer>
    </div>
  );
}

export default App;
