import React from "react";
import "./App.css";
import BlogPostComponent from "./Containers/BlogPost/BlogPostComponent";
import HomeComponent from "./Containers/Home/HomeComponent";

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <BlogPostComponent />
      <footer>
        <p>Copyright&copy;2019.<a href="https://github.com/egin10" target="_blank">egin10</a></p>
      </footer>
    </div>
  );
}

export default App;
